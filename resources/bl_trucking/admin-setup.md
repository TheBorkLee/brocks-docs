---
title: "Admin Setup"
description: "First-time setup and the admin menu for BL Trucking 2.2.0."
---

# Admin Setup

Open the admin menu with **/truckeradmin**. It needs the `bl_trucking.admin` ACE permission (see [Installation](/resources/bl_trucking/installation#_2-set-the-start-order-and-permission)).

The menu is the same window as the driver tablet. It warns before you lose unsaved changes, checks every field before saving, and checks that the vehicle spawn codes you type exist on your server.

## Placing spots

Every spot is placed the same way:

1. Click **Set spot**. A see-through ghost of the thing you are placing follows you: a truck, a worker, a forklift, or a pallet. Spots already set for the same place show as fainter ghosts so you can see the layout.
2. Line it up and use the arrow keys to turn it.
3. Press **G** to place it. Press **Backspace** to cancel.

## 1. Depot tab

| Spot | Purpose |
| --- | --- |
| **Dispatcher** | The worker drivers talk to. Put them next to the truck spot. Moving it updates for everyone at once. |
| **Truck spawn & return spot** | Where loaded trucks appear and where drivers bring them back to get paid. |
| **Trailer spawn spot** (optional) | Where trailers wait. If you skip it, trailers spawn 14 m behind the truck, facing the same way. |

## 2. Routes tab

Click **New route** for a short step-by-step flow:

1. **Drop-off**: pick an existing place or make a new one.
   - **Truck parking spot**: where the truck or trailer parks.
   - **Foreman spot** (optional): where the foreman stands.
   - For **box trucks**, also the **Forklift spot** (where the forklift waits) and the **Unload spot** (where pallets are set down, in rows of three going backwards, so leave room behind it). Trailer routes do not need these two.
2. **Cargo**: what is hauled, and whether it needs a trailer.
3. **Pay**: by distance, or a fixed amount.
4. **Review** and save. The route goes on the contract board immediately.

A route and its drop-off place are saved together or not at all. A place that no longer has any route is removed automatically.

Routes can be switched on and off from the list without deleting them. A route whose cargo or trailer was removed in Settings is flagged in the list and stays off the board until fixed.

Editing a shared drop-off place cannot take the forklift spots away from another box-truck route that needs them.

## 3. Settings

Everything under **Settings** is saved to the database and overrides the defaults in the config files.

| Tab | What you can edit |
| --- | --- |
| **Pay & Timing** | Contract pay, urgent contracts, deadlines and board size, box-truck pallets, truck ownership limits, and reputation earned. |
| **Trucks & Trailers** | Company trucks, trucks for sale (price, rank, pay bonus, trailer hitch), and the trailer list. |
| **Cargo** | Cargo types with icon, pay per mile, and the rank that unlocks each. |
| **Ranks** | Rank names and the reputation needed for each. The first rank always starts at 0. |

Numbers show their allowed range. Fields with a problem are highlighted when you save, instead of a bad row being silently dropped. Vehicle spawn codes are checked against the server on save.

To change how many pallets a box delivery has (default 3), use **Settings > Pay & Timing > Box-truck unloading**.

## 4. Done

Drivers now see the contract at the dispatcher's tablet.

## Admin actions are logged

Every admin change is printed to the server console with the admin's name and player id, for example `[bl_trucking] admin Name (id 3): moved depot to ...`. Admin saves run one at a time, so two admins saving at once cannot interleave.

## Next steps

Review [Configuration](/resources/bl_trucking/configuration) for the values that live in files, or [Troubleshooting](/resources/bl_trucking/troubleshooting).
