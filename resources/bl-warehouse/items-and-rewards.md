---
title: "Items & Rewards"
description: "Register the BL Warehouse start item and configure ox_inventory rewards."
icon: "package"
---

# Items & Rewards

BL Warehouse 1.1.0 uses `ox_inventory`. The required start item and every configured reward must exist in `ox_inventory/data/items.lua`.

## Adding the Required Item

Add the included start item definition to `ox_inventory/data/items.lua`:

```lua
['warehouse_blueprints'] = {
    label = 'Warehouse Blueprints',
    weight = 100,
    stack = true,
    close = true,
    description = 'Plans marking a warehouse worth hitting.'
},
```

The matching server configuration is:

```lua
requiredItem = {
    name = 'warehouse_blueprints',
    amount = 1,
    removeOnUse = true,
},
```

Set `removeOnUse` to `false` if the item should not be consumed when a robbery begins. `amount` controls how many are required.

## Inventory Setup

1. Stop the server before editing inventory definitions.
2. Add `warehouse_blueprints` to `ox_inventory/data/items.lua`.
3. Confirm each configured reward exists in the same inventory item registry.
4. Check the item file for commas, braces, and duplicate keys.
5. Start `ox_inventory` before `bl-warehouse`, then reconnect and test.

## Default Rewards

The version 1.1.0 config contains these defaults:

| Source | Item | Amount | Chance |
| --- | --- | --- | --- |
| Dead guard | `black_money` | `250`–`750` | `100%` |
| Searchable crate | `black_money` | `100`–`500` | `100%` |
| Searchable crate | `lockpick` | `1` | `25%` |

Each item in a crate rolls independently, so a single crate can award more than one configured reward. Each robbery selects between three and six searchable crates by default.

<Warning>
`black_money` and `lockpick` must be valid items on your server. Rename the reward entries in `shared/cfg_server.lua` if your inventory uses different internal names.
</Warning>

## Reward Configuration

Guard rewards are in `guardLoot.items`; crate rewards are in `boxLoot.items`.

```lua
{
    name = 'your_item_name',
    minAmount = 1,
    maxAmount = 3,
    chance = 25,
},
```

- `name` must exactly match the `ox_inventory` item key.
- `minAmount` and `maxAmount` define the random quantity range.
- `chance` is an independent percentage roll from `0` to `100`.

## Custom Items

Before adding a custom reward:

1. Register the item in `ox_inventory/data/items.lua`.
2. Confirm its exact internal name and capitalization.
3. Add its image or metadata following the ox_inventory item format used by your server.
4. Add the reward entry to `guardLoot.items` or `boxLoot.items`.
5. Restart `ox_inventory` and `bl-warehouse`, then test on a development server.

## Troubleshooting Missing Items

- Check the server and F8 consoles for inventory errors.
- Verify spelling and capitalization in the item registry and reward config.
- Confirm `ox_inventory` starts before `bl-warehouse`.
- Check for duplicate or malformed item definitions.
- Reconnect after restarting the affected resources.
- Confirm the player has enough inventory capacity for the configured reward.
