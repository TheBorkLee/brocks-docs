---
title: "Framework Setup"
description: "Verified Qbox framework setup and unsupported framework status for BL Warehouse 1.1.0."
icon: "plug"
---

# Framework Setup

BL Warehouse 1.1.0 is built for Qbox. It does not contain a framework selector or built-in bridge for QBCore or ESX.

## Qbox

**Support status:** Supported

Required resources:

- `qbx_core`
- `ox_lib`
- `ox_target`
- `ox_inventory`
- OneSync enabled

Use this start order:

```ini
ensure ox_lib
ensure qbx_core
ensure ox_target
ensure ox_inventory
ensure bl-warehouse
```

Qbox job names used for the police requirement are configured in `police.jobs` inside `shared/cfg_server.lua`. The defaults are `police`, `sasp`, and `bcso`.

## QBCore

**Support status:** Not supported out of the box

BL Warehouse 1.1.0 calls Qbox functionality through `qbx_core` and expects its player and job behavior. Installing `qb-core` alone is not a supported setup.

## ESX

**Support status:** Not supported out of the box

There is no ESX adapter or config option in version 1.1.0.

<Warning>
Changing the framework, inventory, or target integration requires custom development and is outside the standard installation documented here.
</Warning>

## Optional Integrations

| Resource | Status | Behavior |
| --- | --- | --- |
| `dialog` | Optional | Provides the NPC conversation; ox_lib context is used as a fallback |
| `daybreak-police` | Optional | Receives dispatch calls when dispatch is enabled |

Neither optional resource is included. The robbery remains usable without them.

## Verification Checklist

- Confirm OneSync is enabled.
- Confirm all four required resources start before `bl-warehouse`.
- Verify `warehouse_blueprints` and every reward item exist in `ox_inventory`.
- Temporarily set `police.amount = 0` on a development server.
- Start and complete a robbery while checking the server and F8 consoles.
- Restore production police, timer, and cooldown values afterward.
