---
title: "Configuration"
description: "Configure BL Warehouse 1.2.0 across its shared, client, and server settings."
icon: "sliders-horizontal"
---

# Configuration

BL Warehouse keeps its editable settings in three open configuration files. Restart `bl_warehouse` after making changes.

| File | Controls |
| --- | --- |
| `shared/cfg_shared.lua` | Exterior warehouse entrances shared by the client and server |
| `shared/cfg_client.lua` | Visuals, targets, props, interior, guard combat behavior, UI, and dispatch toggle |
| `shared/cfg_server.lua` | Timers, police requirement, start item, rewards, guard definitions, routing buckets, and dispatch details |

<Warning>
This reference matches BL Warehouse `1.2.0`. Compare the version in `fxmanifest.lua` with this page before applying settings to a different release.
</Warning>

## General Settings

The main server gameplay settings are at the top of `shared/cfg_server.lua`.

| Setting | Unit | Default | Purpose |
| --- | --- | --- | --- |
| `cooldown` | Seconds | `30 * 60` | Delay before another robbery can begin |
| `robberyTime` | Seconds | `5 * 60` | Maximum duration before the active robbery ends |
| `guardSpawnDelay` | Milliseconds | `1500` | Delay before guard network IDs are sent to entering players |
| `deadGuardCleanupDelay` | Milliseconds | `10 * 60 * 1000` | Delay before dead guard entities are removed |
| `routingBucketBase` | Number | `5000` | Base range used to generate robbery routing buckets |
| `interactionDistance` | Game units | `5.0` | Maximum server-side distance for exterior and guard interactions |

Choose a `routingBucketBase` range that does not overlap another instanced resource on your server.

## Framework

Version 1.2.0 uses the `framework` setting in `shared/cfg_server.lua`. Supported values are `qbox`, `qbcore`, and `esx`.

See [Framework Setup](/resources/bl_warehouse/framework-setup) for the verified start order.

## Interactions

`ox_target` settings are in `shared/cfg_client.lua`:

- `guards.lootTarget` controls the guard-search target, distance, progress circle, and animation.
- `locations.warehouseExit` controls the interior exit target box.
- `lootBoxes.target` controls the crate-search target, distance, progress UI, and animation.

Target names should remain unique across your server. Animation dictionaries and clips must be valid GTA V values.

## Police Requirements

Configure the `police` table in `shared/cfg_server.lua`:

```lua
police = {
    jobs = { 'police', 'sasp', 'bcso' },
    amount = 2,
    message = 'Not enough police on duty'
}
```

`jobs` contains Qbox job names counted as law enforcement. `amount` is the total number of on-duty officers required across those jobs; use `0` to disable the requirement.

## Cooldowns

`cooldown` and `robberyTime` are expressed in seconds:

```lua
cooldown = 30 * 60,  -- 30 minutes
robberyTime = 5 * 60, -- 5 minutes
```

The cooldown is global. Only one warehouse robbery can be active at a time.

## Locations

- Add or remove exterior `vec3` entrance coordinates in `shared/cfg_shared.lua`.
- `locations.warehouseInside` in the client and server configs must refer to the same interior position.
- `warehouseProps.locations` contains the possible crate prop positions and headings.
- `boxLoot.locationCount` must equal the number of entries in `warehouseProps.locations`.
- `locations.jobStartLoc` in `shared/cfg_server.lua` positions the robbery contact NPC.

<Warning>
An incorrect `boxLoot.locationCount` can generate invalid loot indexes. Count the configured prop locations after adding or removing entries.
</Warning>

## Rewards

Server-authoritative rewards are configured in `guardLoot.items` and `boxLoot.items` inside `shared/cfg_server.lua`. Each entry uses:

| Field | Meaning |
| --- | --- |
| `name` | Exact `ox_inventory` item name |
| `minAmount` | Minimum quantity awarded when the roll succeeds |
| `maxAmount` | Maximum quantity awarded when the roll succeeds |
| `chance` | Independent percentage chance from `0` to `100` |

Multiple crate rewards can be issued because each item rolls independently. See [Items & Rewards](/resources/bl_warehouse/items-and-rewards) for the included defaults.

## Dispatch

Set `dispatch.enabled = false` in `shared/cfg_client.lua` to disable alerts. The `dispatch` table in `shared/cfg_server.lua` configures the optional `daybreak-police` resource name, alert text, jobs, blip, duration, and priority.

The robbery continues normally when `daybreak-police` is not running. Supporting another dispatch resource requires a compatible adapter or a code change before escrow upload.

## Debugging

BL Warehouse 1.2.0 does not define a debug toggle in its current configuration files. Use the server console, F8 console, and temporary development values for testing. Restart `bl_warehouse` after every configuration change and restore production values when verification is complete.
