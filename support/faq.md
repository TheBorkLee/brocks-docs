---
title: "FAQ"
description: "Frequently asked questions about Brocks Scripts documentation and support."
icon: "circle-help"
---

# Frequently Asked Questions

## Where do I start?

Begin with [Getting Started](/getting-started/getting-started), then open the installation page for your resource.

## What does BL Warehouse require?

Version 1.2.0 requires Qbox (`qbx_core`), QBCore (`qb-core`), or ESX (`es_extended`), plus `ox_lib`, `ox_target`, `ox_inventory`, and OneSync. See the complete [requirements](/resources/bl_warehouse/overview#requirements).

## What does BL Trucking require?

Version 2.2.0 requires `oxmysql` and OneSync. The framework (Qbox, QBCore, ESX, or standalone) is auto-detected, and `ox_target`/`qb-target` and `ox_lib` are optional. See the complete [requirements](/resources/bl_trucking/overview#requirements).

## Do I need to import SQL for BL Trucking?

No. BL Trucking creates and upgrades its `bl_trucking_*` tables on start. See [Installation](/resources/bl_trucking/installation).

## How do I set up BL Trucking routes?

Grant the `bl_trucking.admin` ACE permission, then use `/truckeradmin` in game. See [Admin Setup](/resources/bl_trucking/admin-setup).

## Does BL Warehouse support my framework or inventory?

BL Warehouse 1.2.0 supports Qbox, QBCore, and ESX. Alternative inventory or target resources are not supported out of the box. See [Framework Setup](/resources/bl_warehouse/framework-setup).

## Do I need to import SQL?

No. BL Warehouse 1.2.0 does not include or require SQL. Register its items in `ox_inventory/data/items.lua` instead.

## Why did my config change not apply?

Confirm you edited and saved the active copy, restart the resource, check for syntax errors, and ensure a duplicate resource is not running.

## Are there public exports or events?

No [exports](/developers/exports) or [events](/developers/events) have been documented yet.

## What should I include in a support request?

Use the complete checklist on [Getting Support](/support/getting-support). Remove all private information before posting.
