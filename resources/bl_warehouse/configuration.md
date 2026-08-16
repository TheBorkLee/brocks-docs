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

Set `dispatch.enabled = false` in `shared/cfg_client.lua` to disable alerts. To enable alerts, open the `dispatch` table in `shared/cfg_server.lua`, set `resource` to the exact folder name of your dispatch resource, and replace the `send` function with the server export or event shown in that dispatch resource's documentation.

### Adding a server export

If your dispatch provides a server-side export, call it inside `send`. Replace the resource name, export name, and fields with the exact API supplied by your dispatch:

```lua
dispatch = {
    resource = 'your-dispatch',
    title = 'Security Alert',
    code = '10-90',
    message = 'Security alarm triggered at a warehouse.',
    jobs = { 'police', 'sasp' },
    sprite = 473,
    color = 1,
    scale = 1.2,
    length = 2,
    priority = 1,
    send = function(data)
        exports['your-dispatch']:YourServerExport({
            coords = data.coords,
            title = data.title,
            code = data.code,
            message = data.message,
            jobs = data.jobs,
            blip = data.blip,
        })
    end,
}
```

Do not copy `YourServerExport` literally. It is a placeholder for the export documented by your dispatch resource. Some dispatches accept the complete `data` table instead:

```lua
send = function(data)
    exports['your-dispatch']:AddCall(data)
end,
```

### Adding an event

For a server event, trigger the documented event from the same function:

```lua
send = function(data)
    TriggerEvent('your-dispatch:server:createAlert', data)
end,
```

If the dispatch API only works on the client, relay the alert to the player who triggered it. `data.source` contains that player's server ID:

```lua
send = function(data)
    TriggerClientEvent('your-dispatch:client:createAlert', data.source, data)
end,
```

The adapter provides `source`, `coords`, `title`, `code`, `message`, `jobs`, `blip`, `length`, and `priority`. Your dispatch may use different field names or require a different table structure, so map these values to its documented payload rather than guessing.

<Warning>
The `send` function runs on the server. Do not paste a client-only export into it. Use the client-event relay example when your dispatch has no server API.
</Warning>

Start the configured dispatch before `bl_warehouse` when `resource` is set. Set `resource = nil` if no startup check is needed. Adapter errors print in the server console without interrupting the robbery.

## Debugging

BL Warehouse 1.2.0 does not define a debug toggle in its current configuration files. Use the server console, F8 console, and temporary development values for testing. Restart `bl_warehouse` after every configuration change and restore production values when verification is complete.
