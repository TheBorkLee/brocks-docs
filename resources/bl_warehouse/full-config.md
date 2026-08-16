---
title: "Full Config"
description: "Configuration reference for BL Warehouse version 1.2.0."
icon: "file-code-2"
---

# Full Config Reference

This reference mirrors the editable configuration structure shipped with BL Warehouse `1.2.0`. The installed config files remain the source of truth for their exact values and comments.

<Note>
Restart `bl_warehouse` after changing any configuration file. Back up customized files before installing an update.
</Note>

## Configuration Files

| File | Scope |
| --- | --- |
| `shared/cfg_shared.lua` | Exterior entrance coordinates used by the client and server |
| `shared/cfg_client.lua` | Models, targets, animations, combat behavior, interior props, exit, and dispatch toggle |
| `shared/cfg_server.lua` | Secure timers, requirements, rewards, guards, locations, notifications, and dispatch data |
| `client/dialog.lua` | Optional NPC dialog content |

## General

Settings in `shared/cfg_server.lua`:

| Key | Default | Unit | Description |
| --- | --- | --- | --- |
| `cooldown` | `30 * 60` | Seconds | Global delay before another robbery starts |
| `robberyTime` | `5 * 60` | Seconds | Maximum active robbery duration |
| `guardSpawnDelay` | `1500` | Milliseconds | Delay before guard network IDs are sent to players |
| `deadGuardCleanupDelay` | `10 * 60 * 1000` | Milliseconds | Delay before dead guards are removed |
| `routingBucketBase` | `5000` | Number | Base range used for unique robbery instances |
| `interactionDistance` | `5.0` | Game units | Server validation distance for interactions |

## Framework

Set `framework` to `qbox`, `qbcore`, or `esx`. Version 1.2.0 requires the matching framework resource, plus `ox_lib`, `ox_target`, and `ox_inventory`. OneSync must be enabled.

## Start Item

`requiredItem` in `shared/cfg_server.lua`:

| Key | Default | Description |
| --- | --- | --- |
| `name` | `warehouse_blueprints` | Exact ox_inventory item key |
| `amount` | `1` | Quantity required to start a robbery |
| `removeOnUse` | `true` | Consume the required quantity when the robbery starts |

## Locations

| Key | File | Description |
| --- | --- | --- |
| `warehouseEnters` | `shared/cfg_shared.lua` | List of possible exterior `vec3` entrances |
| `locations.warehouseInside` | Client and server configs | Interior teleport position and secure distance-check center |
| `locations.warehouseExit` | Client config | ox_target box used to leave the interior |
| `locations.jobStartLoc` | Server config | Contact NPC position and heading |
| `warehouseProps.locations` | Client config | All possible crate prop positions and headings |
| `boxLoot.locationCount` | Server config | Number of client prop locations available for random selection |

Keep the client and server warehouse interior coordinates synchronized. `boxLoot.locationCount` must equal the number of entries in `warehouseProps.locations`; version 1.2.0 includes `21`.

## Police

`police` in `shared/cfg_server.lua`:

| Key | Default | Description |
| --- | --- | --- |
| `jobs` | `police`, `sasp`, `bcso` | Qbox jobs counted as law enforcement |
| `amount` | `2` | Minimum total on-duty officers; use `0` to disable |
| `message` | `Not enough police on duty` | Notification shown when the requirement fails |

## Cooldown

`cooldown` is in seconds. Multiplication keeps longer values readable:

```lua
cooldown = 30 * 60 -- 30 minutes
```

The cooldown is global, and the resource prevents overlapping robberies.

## Client Guard Behavior

`guards` in `shared/cfg_client.lua`:

| Key | Default | Description |
| --- | --- | --- |
| `relationshipGroup` | `WAREHOUSE_GUARDS` | Dedicated relationship group name |
| `accuracy` | `45` | Accuracy from `0` to `100` |
| `combatAbility` | `2` | GTA native combat ability |
| `combatMovement` | `2` | GTA native combat movement |
| `combatRange` | `2` | GTA native combat range |
| `alertness` | `3` | Alertness from `0` to `3` |
| `seeingRange` | `80.0` | Guard sight range |
| `hearingRange` | `80.0` | Guard hearing range |
| `dropsWeaponsWhenDead` | `false` | Whether dead guards drop their weapon |
| `combatFlags` | `16` | Combat attribute applied to guards |
| `netWait` / `netTries` | `100` / `50` | Guard network wait interval and attempts |
| `lootTarget` | Table | Guard-search target, progress circle, and animation |

Server-created guard entries in `shared/cfg_server.lua` define each guard's model, `vec4` coordinates, health, armour, weapon, and ammo. Version 1.2.0 ships with three guards.

## Props and Crates

- `warehouseProps.propTable` lists valid GTA V object models chosen randomly for crate positions.
- `warehouseProps.locations` lists every possible position and heading.
- `lootBoxes.target` controls the ox_target name, label, icon, distance, progress label and duration, and search animation.
- `boxLoot.amount.min` and `max` control how many crates become searchable. Defaults are `3` and `6`.

## Rewards

`guardLoot.items` and `boxLoot.items` use the same entry structure:

| Key | Description |
| --- | --- |
| `name` | Exact ox_inventory item key |
| `minAmount` | Minimum reward quantity |
| `maxAmount` | Maximum reward quantity |
| `chance` | Independent percentage chance from `0` to `100` |

Version 1.2.0 defaults:

- Guards: `black_money`, `250`–`750`, `100%`
- Crates: `black_money`, `100`–`500`, `100%`
- Crates: `lockpick`, `1`, `25%`

## Notifications

The `notify` table controls the title and messages for an already active robbery, cooldown, missing start item, start failure, and completion. `police.message`, `guardLoot.messages`, and `boxLoot.messages` control their related error text.

## Dispatch

`dispatch.enabled` in `shared/cfg_client.lua` toggles dispatch requests. The server `dispatch` table defines:

- `resource` — default `daybreak-police`
- `title`, `code`, and `message`
- Recipient `jobs`
- Blip `sprite`, `color`, and `scale`
- Alert `length` and `priority`

Dispatch is optional. The robbery continues if the configured dispatch resource is not running.

## Debug

Version 1.2.0 has no debug config key. Test with temporary police, cooldown, and timer values on a development server while monitoring the server and F8 consoles.
