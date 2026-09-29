---
title: "Configuration"
description: "Configuration for BL Trucking 2.2.0."
---

# Configuration

Most settings are edited in-game from **/truckeradmin > Settings**. What is saved there wins over the files below, and is stored in the `bl_trucking_settings` table. The files provide defaults. Restart `bl_trucking` after editing them.

| File | What's in it |
| --- | --- |
| `config/config.lua` | Language, debug, framework/target/progress/keys overrides, admin permission and command, default spots, delivery timings and models, money, ranks, company trucks, contract economy |
| `config/cargo.lua` | Default cargo types: name, icon, pay per mile, rank |
| `config/vehicles.lua` | Default trucks for sale and the trailer list |
| `locales/en.lua` | All in-world text |

## General

| Setting | Default | Notes |
| --- | --- | --- |
| `Config.Locale` | `'en'` | Which file in `locales/` to use. |
| `Config.Framework` | `'auto'` | `qbox`, `qbcore`, `esx`, or `standalone`. |
| `Config.Target` | `'auto'` | `ox_target`, `qb-target`, or `standalone`. |
| `Config.Progress` | `'auto'` | `ox_lib` or `standalone`. |
| `Config.Keys` | `'auto'` | See [vehicle keys](/resources/bl_trucking/installation#vehicle-keys). |
| `Config.AdminPermission` | `'bl_trucking.admin'` | ACE permission for the admin menu. |
| `Config.AdminCommand` | `'truckeradmin'` | The admin menu command. |
| `Config.InteractKey` | `38` (E) | Standalone interaction key, used when no target resource is detected. |
| `Config.AdminCaptureKey` | `47` (G) | Places a spot from the admin menu. |
| `Config.HistoryDays` | `90` | Logbook entries older than this are deleted on start. `0` keeps them forever. |

## Depot and dispatcher

`Config.Dispatch` and `Config.Garage` hold the default spots. Admins move them in **/truckeradmin > Depot**, which overrides these.

| Setting | Default | Notes |
| --- | --- | --- |
| `Config.Dispatch.model` / `scenario` / `blip` | Dock worker, clipboard | The dispatcher's ped, animation, and map blip. |
| `Config.Garage.returnRadius` | `25.0` | A truck taken out for personal use parks back in within this range of the depot. |
| `Config.Garage.parkTime` | `3` | Seconds to park it. |
| `Config.Garage.recoveryFee` | `500` | Fee to recover a truck wrecked or lost while out. Editable in Settings. |

## Delivery

| Setting | Default | Notes |
| --- | --- | --- |
| `Config.Delivery.paperworkTime` | `3` | Seconds handing paperwork to the foreman. |
| `Config.Delivery.unloadTime` | `12` | Seconds to unhitch a trailer. |
| `Config.Delivery.returnTime` | `6` | Seconds to check the truck in at the depot. |
| `Config.Delivery.bayRadius` | `20.0` | How close the truck or trailer must be parked to the drop-off spot. |
| `Config.Delivery.depotRadius` | `15.0` | How close to the depot to check the truck in. |
| `Config.Delivery.cancelCommand` | `'canceldelivery'` | Command that abandons the current job. |
| `Config.Delivery.foremanModel` / `forkliftModel` / `palletModel` | Dock worker, `forklift`, `prop_boxpile_07d` | Models used at the drop-off. |
| `Config.Delivery.pallets` | `3` | Pallets per box-truck delivery. Editable in Settings. |
| `Config.Delivery.forkTip` | `1.9` | How far ahead of the forklift's centre the tip of the forks is. |
| `Config.Delivery.palletOnForks` | `x 0.0, y 1.5, z -0.2, rot 0.0` | Where a carried pallet sits on the forklift. Adjust if it floats or clips. |

## Money and trucks

| Setting | Default | Notes |
| --- | --- | --- |
| `Config.MoneyAccount` | `'bank'` | Where payouts go and truck purchases come from (`bank` or `cash`). |
| `Config.CurrencySymbol` | `'$'` | Shown in the UI. |
| `Config.SellBackRate` | `0.5` | Fraction of the price refunded when selling a truck. |
| `Config.MaxTrucks` | `5` | Trucks one driver can own. |
| `Config.Rental` | `mule2` / `hauler` | Company trucks every driver starts with: one for box jobs, one for trailer jobs, each with a `fee` taken from the payout (default 0). |

Pick company truck models your server does not block. Qbox's `qbx_entitiesblacklist` blocks `mule`, for example.

### Trucks for sale

`config/vehicles.lua` lists the trucks drivers can buy. Each entry has a `model` (spawn code), `label`, `price`, `tier` (the rank that unlocks it), `payBonus` (a fraction of contract pay on every contract), and `hasTrailerHitch`.

| Truck | Price | Rank | Pay bonus | Trailer hitch |
| --- | --- | --- | --- | --- |
| Mule Box Truck | 8,000 | 2 | 10% | No |
| Pounder | 22,000 | 3 | 15% | No |
| Hauler Custom | 45,000 | 3 | 10% | Yes |
| Phantom Wedge | 65,000 | 4 | 20% | Yes |
| Packer | 95,000 | 5 | 25% | Yes |

A truck with a trailer hitch can only take trailer contracts, and one without can only take box-truck contracts.

The `Config.Trailers` list holds the trailers a route can use: Dry Van Trailer, Big Goods Trailer, and Fuel Tanker by default.

### Cargo

`config/cargo.lua` holds the cargo types. `tier` is the rank that unlocks it. Which trailer, if any, a job uses is set per route.

| Cargo | Pay per mile | Rank |
| --- | --- | --- |
| General Freight | 45 | 1 |
| Retail Goods | 60 | 2 |
| Electronics | 90 | 3 |
| Heavy Machinery | 120 | 4 |
| Hazardous Materials | 160 | 5 |

## Reputation

| Setting | Default | Notes |
| --- | --- | --- |
| `Config.Reputation.tiers` | 0 / 250 / 750 / 1500 / 3000 | Rank names and the reputation each needs. |
| `Config.Reputation.base` | `10` | Reputation per delivery... |
| `Config.Reputation.perMile` | `8` | ...plus this per mile. |
| `Config.Reputation.urgentMultiplier` | `1.5` | Urgent contracts. |
| `Config.Reputation.onTimeMultiplier` | `1.25` | On-time deliveries. |
| `Config.Reputation.lateMultiplier` | `0.5` | Late deliveries. |

## Contract board

| Setting | Default | Notes |
| --- | --- | --- |
| `boardSize` | `8` | Contracts on the board at once. One contract is made per route; with more routes than slots, a random pick is used. |
| `refreshMinutes` | `10` | Unclaimed contracts are replaced this often. |
| `basePay` | `150` | Flat pay on top of the cargo's per-mile rate. Ignored for routes with a fixed pay. |
| `urgentChance` | `0.2` | Chance a contract is urgent. |
| `urgentMultiplier` | `1.5` | Urgent contracts pay more... |
| `urgentDeadlineFactor` | `0.75` | ...but give less time. |
| `deadlineSpeedMph` | `35` | The deadline is the distance at this average speed... |
| `deadlineBufferMinutes` | `6` | ...plus this long for getting the truck, unloading, and so on. |
| `onTimeBonus` | `0.25` | Of contract pay. |
| `lateMultiplier` | `0.75` | Late deliveries keep this fraction of pay. |
| `pristineBonus` | `0.10` | Of contract pay, when cargo condition is at least `pristineThreshold`. |
| `pristineThreshold` | `95` | Condition percentage that counts as undamaged. |
| `minConditionPayout` | `0.3` | Wrecked cargo still pays at least 30% of the contract. |

All of these are prefixed with `Config.Contracts.` in the file.

## Debug mode

Debug is off by default. To turn it on, add this to `server.cfg` (the `r` matters, it sends the setting to players too) and restart the resource:

```cfg
setr bl_trucking_debug 1
```

While it is on, failure messages include details (for example a destroyed truck reports its health and position), and problems with the keys script are printed to the console.

## Language

Copy `locales/en.lua` to `locales/<code>.lua`, translate the values, add the file to `shared_scripts` in `fxmanifest.lua`, and set `Config.Locale = '<code>'`. Missing keys fall back to English.

The tablet and admin screens are currently English only.

## Commands and permissions

| Command | Purpose |
| --- | --- |
| `/truckeradmin` | Admin menu. Requires ACE `bl_trucking.admin` (`Config.AdminPermission`). |
| `/canceldelivery` | Abandon the current job (`Config.Delivery.cancelCommand`). |

## Security

Nothing that pays money or changes ownership is decided by the client:

- Pay, ranks, and truck bonuses are computed on the server from the contract snapshot.
- A delivery only counts if the server sees the player and the truck at the drop-off, and later at the depot. Cargo condition is capped by the truck's real health.
- Entities a client reports are only tracked, and later deleted, if that client owns them.
- Buying, selling, recovering, and accepting contracts are locked per player and claim atomically, so quick double-clicks cannot double-spend or double-claim a contract.
- Every admin action re-checks the ACE permission on the server. Admin input is validated and bounded, and positions must be inside the GTA map. Saved settings are checked again when loaded.
- Callbacks are rate limited per player and refuse oversized argument lists.
- The tablet can only run this resource's own callbacks and a single server event.
- Everything in the UI that comes from players is escaped, and the UI loads nothing from outside the game (fonts and icons are bundled).

## Third-party assets

Bundled so the UI works without internet access; no action needed.

- [Font Awesome Free](https://fontawesome.com/license/free) 6.5.1: icons CC BY 4.0, fonts SIL OFL 1.1, code MIT.
- [Barlow](https://github.com/jpt/barlow) and Barlow Condensed: SIL Open Font License 1.1.
