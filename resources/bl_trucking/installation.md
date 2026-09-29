---
title: "Installation"
description: "Installation for BL Trucking 2.2.0."
---

# Installation

## 1. Install the resource

Copy the `bl_trucking` folder into your server's resources directory. Keep the folder name unchanged.

Required:

- [oxmysql](https://github.com/overextended/oxmysql).
- OneSync enabled.

Optional: `ox_target` or `qb-target` for third-eye interaction, and `ox_lib` for the progress bar. Without them, the resource uses a built-in **E** prompt and progress bar.

## 2. Set the start order and permission

Start `bl_trucking` after `oxmysql` and your framework, and give admins the menu permission:

```cfg
ensure oxmysql
ensure bl_trucking

add_ace group.admin bl_trucking.admin allow
```

The permission name is `Config.AdminPermission` in `config/config.lua`.

## 3. Start the server

The database tables (`bl_trucking_*`) are created and upgraded automatically on start. `sql/install.sql` is included for reference only.

The console prints the detected framework and vehicle-keys mode, then `[bl_trucking] ready`.

## 4. First-time setup

Follow [Admin Setup](/resources/bl_trucking/admin-setup) to place the dispatcher and depot and to create your first route. The contract board stays empty until at least one route exists.

## Vehicle keys

`Config.Keys` in `config/config.lua` controls how job vehicles are keyed to the driver:

| Value | Behavior |
| --- | --- |
| `auto` | Detects `qbx_vehiclekeys`, `qb-vehiclekeys`, `Renewed-Vehiclekeys`, or `p_vehiclekeys`; otherwise uses none. |
| `qbx_vehiclekeys` | Uses the Qbox vehicle-key exports. |
| `qb-vehiclekeys` | Uses the QBCore vehicle-key exports. |
| `Renewed-Vehiclekeys` | Uses the Renewed vehicle-key exports. |
| `p_vehiclekeys` | Uses its Qbox-compatible exports. |
| `custom` | Calls `Config.KeysGive` and `Config.KeysRemove`, which you fill in. |
| `none` | Disables key integration. |

The driver is keyed to the truck and the forklift when they first get in, and the keys are taken back when the job ends. Only the driver's own job vehicles are ever keyed, once each.

The engine of a job vehicle is also started for the driver, so a server with no keys script at all works too.

A driver who disconnects mid-job keeps a key item for a truck that no longer exists with item-based keys scripts. It is harmless.

For `custom`, fill in both functions in `config/config.lua`:

```lua
Config.Keys = 'custom'
Config.KeysGive = function(src, vehicle, plate) end   -- src: player id, vehicle: entity, plate: string
Config.KeysRemove = function(src, vehicle, plate) end
```

## Framework, target, and progress overrides

All three default to `'auto'`, which detects what is running. Override them in `config/config.lua` if detection picks the wrong one:

| Setting | Values |
| --- | --- |
| `Config.Framework` | `qbox`, `qbcore`, `esx`, `standalone` |
| `Config.Target` | `ox_target`, `qb-target`, `standalone` |
| `Config.Progress` | `ox_lib`, `standalone` |

## Escrow

`config/*.lua`, `locales/*.lua`, `bridge/*.lua`, and `sql/*.sql` stay readable and editable in the escrowed resource. Restart `bl_trucking` after editing them.

## Verify your installation

- [ ] The console shows the framework bridge, the vehicle-keys mode, and `[bl_trucking] ready`.
- [ ] `/truckeradmin` opens for an admin and is refused for everyone else.
- [ ] The dispatcher is standing at the depot and third-eye (or **E**) opens the tablet.
- [ ] A route exists and its contract appears on the board.
- [ ] Accept a contract: the loaded truck spawns, and you can get in and drive it.
- [ ] Deliver the load and return the truck; payment arrives once.
- [ ] Cancel a job with `/canceldelivery` and confirm its vehicles are removed.

## Uninstalling

Stop the resource. The `bl_trucking_*` tables are left in your database; drop them yourself if you want them gone.

## Next steps

Continue with [Admin Setup](/resources/bl_trucking/admin-setup), then review [Configuration](/resources/bl_trucking/configuration).
