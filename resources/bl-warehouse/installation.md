---
title: "Installation"
description: "Install and verify BL Warehouse 1.1.0 on a Qbox server."
icon: "download"
---

# Installation

Follow these steps on a development server before installing BL Warehouse in production.

## Requirements

- A working Qbox FiveM server with OneSync enabled
- Access to the server files and `server.cfg`
- The current BL Warehouse download
- `qbx_core`
- `ox_lib`
- `ox_target`
- `ox_inventory`

<Warning>
BL Warehouse is built for Qbox and the listed ox resources. QBCore, ESX, and alternative inventory or target systems are not supported out of the box.
</Warning>

## Download Resource

Download BL Warehouse from the official purchase delivery page. Confirm you are using the latest version available to your account.

## Resource Placement

<Steps>
  <Step title="Extract the archive">Extract the download without changing its internal structure.</Step>
  <Step title="Locate the resource folder">Find the folder containing the resource manifest, such as `fxmanifest.lua`.</Step>
  <Step title="Move it into resources">Place `bl-warehouse` inside your server's `resources` directory or an appropriate category folder beneath it.</Step>
</Steps>

Verify that the manifest is not trapped inside an extra nested directory:

```text
resources/
└── [brocks]/
    └── bl-warehouse/
        ├── fxmanifest.lua
        └── ...
```

## Dependencies

Install and start each required dependency before BL Warehouse:

```ini
ensure ox_lib
ensure qbx_core
ensure ox_target
ensure ox_inventory
ensure bl-warehouse
```

## Inventory Item

Add the required start item to `ox_inventory/data/items.lua`:

```lua
['warehouse_blueprints'] = {
    label = 'Warehouse Blueprints',
    weight = 100,
    stack = true,
    close = true,
    description = 'Plans marking a warehouse worth hitting.'
},
```

Confirm every reward in `shared/cfg_server.lua` also exists in `ox_inventory`. The version 1.1.0 defaults use `black_money` and `lockpick`; rename them in the config if your server uses different item names.

## Database Setup

BL Warehouse 1.1.0 does not include or require an SQL file. Inventory items are registered in `ox_inventory/data/items.lua` instead.

<Note>
Do not create tables or import third-party SQL for this resource.
</Note>

## server.cfg

Add the resource after its dependencies. A complete verified start order is:

```ini
ensure ox_lib
ensure qbx_core
ensure ox_target
ensure ox_inventory
ensure bl-warehouse
```

## First Startup

Start or restart the server and watch the server console from the beginning of resource startup. If your environment supports it, you may restart the resource after configuration changes:

```text
restart bl-warehouse
```

## Verification

- Confirm `bl-warehouse` reports as started.
- Check the server console for errors or missing dependencies.
- Join the server and check the F8 console.
- Add `warehouse_blueprints` to your inventory and confirm all configured reward items exist.
- Temporarily set the police requirement to `0` and shorten the timer and cooldown on a development server.
- Verify entry, guards, crate rewards, exit, timeout, disconnect behavior, and resource restart cleanup.
- Restore production configuration values after testing.

## Next Steps

Continue to [Configuration](/resources/bl-warehouse/configuration), then review [Items & Rewards](/resources/bl-warehouse/items-and-rewards) and [Framework Setup](/resources/bl-warehouse/framework-setup) when those integrations are confirmed.
