---
title: "Configuration"
description: "A safe workflow for configuring BL Warehouse."
icon: "sliders-horizontal"
---

# Configuration

## Configuration Overview

Open the configuration files included with your installed release and work through them in order. Make one focused change at a time, keep a backup, and test on a development server.

<Warning>
Configuration options shown in examples may differ from the installed version of BL Warehouse. Always reference the config files included with the resource.
</Warning>

The following is a **generic example of formatting only**. Its keys are not claimed to exist in BL Warehouse:

```lua
-- EXAMPLE ONLY — not a BL Warehouse configuration reference
ExampleConfig = {
    enabled = true,
    exampleValue = 10
}
```

## General Settings

Review the supplied config for global behavior and locale-related options. `[DOCUMENT CONFIRMED GENERAL SETTINGS HERE]`

## Framework

Select only an integration confirmed as supported by your installed version. `[ADD CONFIRMED FRAMEWORK OPTION AND VALUES HERE]`

## Interactions

Document the supported interaction or targeting integration here after verification. `[ADD CONFIRMED INTERACTION SETTINGS HERE]`

## Police Requirements

If the release provides police-related controls, document the exact job identifiers, counts, and behavior from the current config. `[ADD CONFIRMED POLICE SETTINGS HERE]`

## Cooldowns

Confirm the unit used by any cooldown value—seconds, minutes, or milliseconds—before changing it. `[ADD CONFIRMED COOLDOWN SETTINGS HERE]`

## Locations

Copy the existing location format from the included config. Preserve commas, braces, coordinate types, and required fields. `[ADD CONFIRMED LOCATION SCHEMA HERE]`

## Rewards

Configure only item names, amounts, chances, or other reward fields that exist in the released config. See [Items & Rewards](/resources/bl-warehouse/items-and-rewards).

## Debugging

Use a debug setting only if the installed config provides one. Disable it again on production unless the resource instructions say otherwise. `[ADD CONFIRMED DEBUG OPTION HERE]`

After every change, save the file, restart the resource, and check both the server console and F8 console for syntax or runtime errors.
