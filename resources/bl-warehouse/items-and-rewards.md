---
title: "Items & Rewards"
description: "Prepare inventory items and reward configuration for BL Warehouse."
icon: "package"
---

# Items & Rewards

## Overview

Item and reward details must match both the BL Warehouse release and the inventory integration configured on your server. This page intentionally does not assume a particular inventory system.

## Adding Required Items

`[ADD THE CONFIRMED REQUIRED ITEM LIST HERE]`

For every confirmed item, record its exact internal name, label, weight, stack behavior, and any metadata required by your selected inventory.

## Inventory Setup

Add items using the documentation for the inventory integration your server actually uses. Inventory-specific instructions should be added here after the configured integration is confirmed.

`[ADD INVENTORY-SPECIFIC REGISTRATION INSTRUCTIONS HERE]`

## Reward Configuration

Use only the reward structure present in the installed BL Warehouse config. Verify exact item names and value units, and test changes on a development server.

<Warning>
Do not copy an example reward table from another resource. An invalid structure can prevent the resource from loading or rewards from being issued.
</Warning>

## Custom Items

Before adding a custom item:

1. Register it correctly with your configured inventory.
2. Confirm its internal name matches exactly, including capitalization where relevant.
3. Add any required image or metadata using that inventory's instructions.
4. Reference it only in a supported BL Warehouse reward field.
5. Restart affected resources and test the complete flow.

## Troubleshooting Missing Items

- Check both server and F8 consoles.
- Confirm the item exists in the active inventory's item registry.
- Verify spelling and capitalization in every reference.
- Confirm the inventory resource starts before BL Warehouse.
- Check for duplicate or malformed item definitions.
- Restart the inventory and BL Warehouse after changes.
- Reconnect if the inventory caches item definitions for a player session.
