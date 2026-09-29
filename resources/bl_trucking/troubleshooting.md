---
title: "Troubleshooting"
description: "Troubleshooting for BL Trucking 2.2.0."
---

# Troubleshooting

Turn on [debug mode](/resources/bl_trucking/configuration#debug-mode) first for anything involving vehicles. Failure messages then include details, and keys-script problems are printed to the console.

| Symptom | Check |
| --- | --- |
| The board is empty | Make a route on the **Routes** tab and make sure it is switched on. A route whose cargo or trailer was removed in Settings stays off the board. |
| Nothing happens at the dispatcher | Check the admin **Depot** tab. The dispatcher spawns where it was set, or at the default in `config/config.lua`. |
| Third-eye does not show | Start `ox_target` or `qb-target` before this resource, or use the built-in **E** prompt with `Config.Target = 'standalone'`. |
| "The server did not answer" in the tablet or admin menu | The server is busy, or the player is clicking faster than the rate limit allows. Try again in a moment. |
| Saving vehicles says a code does not exist | The code is not a vehicle on this server. Check the spelling, or make sure the resource that adds that vehicle is started. |

## Vehicles

### "...was deleted right after spawning"

Another resource is blocking that vehicle model. Qbox's `qbx_entitiesblacklist` (active when `qbx:bucketLockdownMode` is `inactive`) blocks `mule`, for example. Change the model in **/truckeradmin > Settings > Trucks & Trailers**, or remove it from that resource's blacklist.

### "...was destroyed"

Turn on debug mode, reproduce it, and read the message. `health 0` means something destroyed it. A very low last number (z) means it fell through the map, so move the depot spot.

### A truck or trailer "failed to load"

The spawn code in Settings is wrong. Use a valid GTA vehicle model name.

### The forklift or truck won't start, or is locked

See [vehicle keys](/resources/bl_trucking/installation#vehicle-keys). Turn on debug mode and watch the console for "vehicle keys ... failed". If your keys script is not detected, set `Config.Keys = 'custom'` and fill in the two functions.

### A carried pallet floats or sits inside the forklift

Adjust `Config.Delivery.palletOnForks` (x/y/z offset and rotation) and `Config.Delivery.forkTip` in `config/config.lua`.

## Deliveries

| Symptom | Check |
| --- | --- |
| Delivery is refused at the drop-off | The server must see both the driver and the truck (or trailer) near the drop-off spot. Park within the bay and try again. |
| The job ended right after accepting | Delivering faster than the server's minimum drive time cancels the job. |
| Payout is lower than expected | Check the receipt lines: cargo damage, a late delivery, or a company truck fee reduce pay. |
| A truck cannot be sold or recovered | Trucks out on a contract cannot be sold or recovered, and only stored trucks can be sold. |

## Database

The tables are created and upgraded automatically on start. If they are missing, check that `oxmysql` is started before `bl_trucking` and that the database user can create tables. `sql/install.sql` can be run by hand for reference installs.

Trucks still marked "out" after a restart are returned to the garage automatically, since no truck survives a restart.

## Get support

Include your framework, keys resource, target resource, relevant configuration changes, steps to reproduce the issue, and client and server console errors. See [Getting Support](/support/getting-support) for the support channel.
