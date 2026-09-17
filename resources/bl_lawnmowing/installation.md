---
title: "Installation"
description: "Installation for BL Lawn Mowing 1.0.0."
---

# Installation

## 1. Install the resource

Copy the `bl_lawnmowing` folder into your server's resources directory. Keep the folder name unchanged.

Required dependencies:

- One supported framework: `qbx_core`, `qb-core`, or `es_extended`.
- `ox_lib` and `ox_target`.
- OneSync enabled.

No SQL import is required. Progression is stored in framework metadata.

> The included trailer replaces `trailersmall` globally. Remove any competing replacement. Do not start the former `Utility-Trailer-Long-Empty` wrapper separately.

## 2. Configure your server

| Setting | Location | Action |
| --- | --- | --- |
| Framework | `shared/cfg_server.lua` | Select `qbox`, `qbcore`, or `esx`. |
| Job access | `shared/cfg_server.lua` | Leave open to everyone or require a job and grade. |
| Economy & progression | `shared/cfg_server.lua` | Review payment caps, XP, and level bonuses. |
| Vehicle models | `shared/cfg_shared.lua` | Confirm all configured models are available. |
| Depot & lawns | `shared/cfg_client.lua` | Review spawn points, return area, and customer boundaries. |
| Fuel & keys | `shared/cfg_client.lua` | Select the key adapter and adjust vehicle setup if needed. |

Restart the resource after editing its configuration.

## 3. Set the start order

Qbox example:

```cfg
ensure ox_lib
ensure qbx_core
ensure ox_target
ensure bl_lawnmowing
```

For QBCore, replace `qbx_core` with `qb-core`. For ESX, replace it with `es_extended`. Follow each dependency's own installation instructions and start your selected key resource before `bl_lawnmowing`.

## Vehicle keys

Set `vehicleKeys` in `shared/cfg_client.lua`:

| Value | Behavior |
| --- | --- |
| `auto` | Detects Qbox keys, then QBCore keys, then Renewed keys; otherwise uses none. |
| `qbx_vehiclekeys` | Uses the Qbox vehicle-key adapter. |
| `qb-vehiclekeys` | Uses the QBCore vehicle-key adapter. |
| `Renewed-Vehiclekeys` | Uses the Renewed vehicle-key adapter. |
| `custom` | Calls the editable custom grant/removal functions. |
| `none` | Disables key integration. |

Built-in adapters use server exports after equipment validation. Verify access to both the truck and mower with your installed key-resource version. Qbox's QBCore key compatibility bridge is not required.

The server assigns unique truck and mower plates using a persistent counter. The first two alphanumeric characters of `truckPlate` form the truck prefix.

Custom adapters run client-side. Implement any additional server-side disconnect cleanup required by your custom key system.

## Fuel & vehicle setup

Edit `setupVehicle(vehicle, role)` in `shared/cfg_client.lua` when your server requires a fuel, mileage, or vehicle-state export. It runs for the truck, trailer, and mower; `role` identifies which vehicle is being initialized.

The default setup fills the native fuel level and removes dirt.

## Optional foreman dialog

Install [LE Development Dialog](https://github.com/LE-Development/dialog) with the resource name `dialog`. Edit the conversation in `client/dialog.lua`.

The dialog resource may start before or after this resource. If it is absent or its `OpenDialog` export throws an error, the foreman falls back to an ox_lib context menu.

## Compatibility notes

- Work vehicles spawn client-side. Entity lockdown that blocks client-created script entities can prevent the rig from spawning.
- The trailer replacement applies to the entire server.
- Mower attachment is applied by the client. Server checks validate contract ownership, equipment registration, grass distance, driver seat, health, and return proximity; they are not a general anti-cheat guarantee.

## Verify your installation

- [ ] Start a workday with clear depot spawn points.
- [ ] Enter the truck and mower; confirm keys and fuel work.
- [ ] Load, transport, and unload the mower.
- [ ] Follow the GPS, mow a lawn, and try both trailer decisions.
- [ ] Drive the complete rig into the return area and press E.
- [ ] Confirm payment occurs once and progression persists after reconnecting.
- [ ] Cancel a workday, disconnect during one, and restart the resource.
- [ ] Delete each work vehicle during a test shift and confirm automatic cancellation and cleanup.

## Next steps

Review [Configuration](/resources/bl_lawnmowing/configuration) or [Troubleshooting](/resources/bl_lawnmowing/troubleshooting).
