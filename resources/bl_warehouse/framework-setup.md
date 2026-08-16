---
title: "Framework Setup"
description: "Framework setup for BL Warehouse 1.2.0 on Qbox, QBCore, and ESX."
icon: "plug"
---

# Framework Setup

BL Warehouse 1.2.0 supports Qbox, QBCore, and ESX. Set `framework` in `shared/cfg_server.lua` to the matching case-sensitive value before starting the resource.

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
ensure bl_warehouse
```

Qbox job names used for the police requirement are configured in `police.jobs` inside `shared/cfg_server.lua`. The defaults are `police`, `sasp`, and `bcso`.

## QBCore

**Support status:** Supported

Set `framework = 'qbcore'` and replace `ensure qbx_core` in the start order with `ensure qb-core`.

## ESX

**Support status:** Supported

Set `framework = 'esx'` and replace `ensure qbx_core` in the start order with `ensure es_extended`.

<Warning>
The selected framework must already be started when `bl_warehouse` starts. Alternative inventory and target integrations require custom development.
</Warning>

## Optional Integrations

| Resource | Status | Behavior |
| --- | --- | --- |
| `dialog` | Optional | Provides the NPC conversation; ox_lib context is used as a fallback |
| Configured dispatch resource | Optional | Receives alerts through the adapter in `shared/cfg_server.lua` |

Neither optional resource is included. The robbery remains usable without them.

## Verification Checklist

- Confirm OneSync is enabled.
- Confirm all four required resources start before `bl_warehouse`.
- Verify `warehouse_blueprints` and every reward item exist in `ox_inventory`.
- Temporarily set `police.amount = 0` on a development server.
- Start and complete a robbery while checking the server and F8 consoles.
- Restore production police, timer, and cooldown values afterward.
