---
title: "BL Trucking"
description: "BL Trucking for BL Trucking 2.2.0."
---

# BL Trucking

A contract trucking job for **Qbox, QBCore, ESX, and standalone servers**. Drivers take jobs from a dispatcher, collect a loaded truck at the depot, deliver it to a drop-off, and bring the truck back to get paid. Everything is set up in-game from one admin menu, so no config editing is needed to get running.

**Documented version:** 2.2.0

## Features

- Shared contract board with urgent contracts, deadlines, and pay by distance or a fixed amount per route.
- Box trucks and trailers. Box-truck jobs are unloaded by the driver with a forklift; trailer jobs are hitched at the depot and dropped at the bay.
- No ground markers. Ghosts show where to park and where pallets go, and admins place every spot by lining up a see-through truck, ped, forklift, or pallet.
- Reputation ranks that unlock better-paying cargo and bigger trucks.
- Truck ownership: every driver starts in a company truck, then buys their own (with a pay bonus), sells it back, or takes one out for personal use.
- Tablet UI with contracts, current job, garage, logbook, and leaderboard.
- One admin menu (`/truckeradmin`) to build routes step by step and to edit trucks, trailers, cargo, ranks, pay, and timing without touching a file.
- Automatic vehicle-key integration for the truck and the forklift.
- Server-authoritative pay, cargo condition, positions, and truck ownership.

## Requirements

| Component | Requirement |
| --- | --- |
| Database | [oxmysql](https://github.com/overextended/oxmysql) |
| Networking | OneSync enabled |
| Framework | Qbox, QBCore, ESX, or standalone; auto-detected |
| Interactions | Optional: `ox_target` or `qb-target`. A built-in **E** prompt is used otherwise. |
| Progress bar | Optional: `ox_lib`. A built-in bar is used otherwise. |
| Vehicle keys | Optional; see [installation](/resources/bl_trucking/installation#vehicle-keys) |

The framework is only used for the player's identity, name, and money. No inventory integration is needed.

The database tables are created and upgraded automatically on start.

## How a job plays

1. Third-eye the **dispatcher** to open the tablet, pick a contract and a truck (a company truck, or one you own), then accept.
2. Your loaded truck spawns at the depot. For trailer jobs, back up to the trailer and hitch it.
3. Drive to the drop-off. A see-through truck (or trailer) shows where to park in the bay.
   - **Trailer:** third-eye the **foreman** to drop it off.
   - **Box truck:** third-eye the **foreman** to check in. The truck's rear opens and the pallets are set down behind it. Get in the **forklift** (outlined), press **E** next to a pallet to pick it up, drive it to a see-through pallet at the unload spot, and press **E** to set it down. Repeat until every pallet is unloaded.
4. Drive back to the depot (a ghost truck shows the spot), park, and third-eye the truck to **check it in and get paid**.

Every route starts at the depot. The truck comes loaded, so there is no pickup stop.

Use `/canceldelivery` to abandon a job. Wrecking the truck or trailer fails it.

## Payment

The payout is built from the contract snapshot on the server and shown to the driver as an itemized receipt:

| Line | Effect |
| --- | --- |
| Base pay | The contract pay: the route's fixed amount, or base pay plus the cargo's per-mile rate. Urgent contracts pay more but give less time. |
| Damage | Reduces pay by cargo condition, but never below the minimum condition payout (default 30%). |
| On time / late | An on-time bonus (default +25%) or a late penalty (default keeps 75%). |
| Undamaged cargo | A bonus when cargo condition is at or above the threshold (default +10% at 95%). |
| Truck bonus | The pay bonus of an owned truck. |
| Company truck fee | Taken from the payout when using a company truck. Defaults to 0. |

Money is paid to the account set in `Config.MoneyAccount` (default `bank`).

## Reputation and trucks

Reputation is earned on every delivery from a base amount plus an amount per mile. Urgent contracts and on-time deliveries earn more, and late ones earn less. Each rank unlocks cargo types and trucks.

The default ranks are Company Driver, Regular, Owner-Operator, Heavy Hauler, and Hazmat Expert.

The **Garage** app lets drivers buy, sell, and take out trucks. A lost or wrecked truck can be recovered for a fee. Selling refunds a fraction of the price (default 50%), and one driver can own a limited number of trucks (default 5). Everything at the tablet requires standing at the dispatcher.

## Quick links

- [Installation](/resources/bl_trucking/installation)
- [Admin Setup](/resources/bl_trucking/admin-setup)
- [Configuration](/resources/bl_trucking/configuration)
- [Troubleshooting](/resources/bl_trucking/troubleshooting)
