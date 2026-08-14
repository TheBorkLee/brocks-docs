---
title: "Installation"
description: "Install and verify BL Warehouse step by step."
icon: "download"
---

# Installation

Follow these steps on a development server before installing BL Warehouse in production.

## Requirements

- A working FiveM server
- Access to the server files and `server.cfg`
- The current BL Warehouse download
- `[ADD DEPENDENCIES HERE]`

<Warning>
Dependency names and versions have not yet been documented. Confirm them from the files included with your purchased release before continuing.
</Warning>

## Download Resource

Download BL Warehouse from the official purchase delivery page. Confirm you are using the latest version available to your account.

## Resource Placement

<Steps>
  <Step title="Extract the archive">Extract the download without changing its internal structure.</Step>
  <Step title="Locate the resource folder">Find the folder containing the resource manifest, such as `fxmanifest.lua`.</Step>
  <Step title="Move it into resources">Place `bl_warehouse` inside your server's `resources` directory or an appropriate category folder beneath it.</Step>
</Steps>

Verify that the manifest is not trapped inside an extra nested directory:

```text
resources/
└── [brocks]/
    └── bl_warehouse/
        ├── fxmanifest.lua
        └── ...
```

## Dependencies

Install and start each confirmed dependency before BL Warehouse.

```text
[ADD DEPENDENCIES HERE]
```

## Database Setup

Only import SQL if your BL Warehouse release includes a database file and its included instructions require that file to be imported. Use a backup and select the correct server database before importing anything.

<Note>
If no SQL file is included, do not create tables or import SQL based on guesses.
</Note>

## server.cfg

Add the resource after its confirmed dependencies:

```ini
ensure bl_warehouse
```

## First Startup

Start or restart the server and watch the server console from the beginning of resource startup. If your environment supports it, you may restart the resource after configuration changes:

```text
restart bl_warehouse
```

## Verification

- Confirm `bl_warehouse` reports as started.
- Check the server console for errors or missing dependencies.
- Join the server and check the F8 console.
- Test only the behavior documented by the files included with your release.
- Confirm configuration changes were saved and loaded.

## Next Steps

Continue to [Configuration](/resources/bl-warehouse/configuration), then review [Items & Rewards](/resources/bl-warehouse/items-and-rewards) and [Framework Setup](/resources/bl-warehouse/framework-setup) when those integrations are confirmed.
