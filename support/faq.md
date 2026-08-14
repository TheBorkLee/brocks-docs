---
title: "FAQ"
description: "Frequently asked questions about Brocks Scripts documentation and support."
icon: "circle-help"
---

# Frequently Asked Questions

## Where do I start?

Begin with [Getting Started](/getting-started/getting-started), then open the installation page for your resource.

## What does BL Warehouse require?

Version 1.1.0 requires Qbox through `qbx_core`, `ox_lib`, `ox_target`, `ox_inventory`, and OneSync. See the complete [requirements](/resources/bl-warehouse/overview#requirements).

## Does BL Warehouse support my framework or inventory?

BL Warehouse 1.1.0 supports Qbox, ox_inventory, and ox_target. QBCore, ESX, and alternative inventory or target resources are not supported out of the box. See [Framework Setup](/resources/bl-warehouse/framework-setup).

## Do I need to import SQL?

No. BL Warehouse 1.1.0 does not include or require SQL. Register its items in `ox_inventory/data/items.lua` instead.

## Why did my config change not apply?

Confirm you edited and saved the active copy, restart the resource, check for syntax errors, and ensure a duplicate resource is not running.

## Are there public exports or events?

No [exports](/developers/exports) or [events](/developers/events) have been documented yet.

## What should I include in a support request?

Use the complete checklist on [Getting Support](/support/getting-support). Remove all private information before posting.
