---
title: "BL Hairties"
description: "Install and configure the free BL Hairties resource."
icon: "scissors"
---

# BL Hairties

BL Hairties is a free, session-only hair toggle for FiveM freemode characters. Using a hair tie hides the current hairstyle; using it again restores the exact drawable, texture, and colors saved before it was tied.

**Current version:** `1.1.0`  
**Price:** Free  
**Framework:** Qbox-compatible client resource

## Features

- Restores the complete original hair variation and tint
- Protects appearance-menu changes from being overwritten
- Supports male and female freemode models
- Configurable bald drawables, animation, notifications, and monitoring
- No database writes or permanent appearance changes

## Requirements

- `ox_lib`
- `ox_inventory`

## Installation

1. Download or clone [`bl_hairties`](https://github.com/TheBorkLee/bl_hairties).
2. Place the folder in your server resources.
3. Copy `install/hairtie.png` to `ox_inventory/web/images/hairtie.png`.
4. Add the item below to `ox_inventory/data/items.lua`.
5. Start the resource after its dependencies.

```lua
['hairtie'] = {
    label = 'Hair Tie',
    weight = 5,
    stack = true,
    close = true,
    consume = 0,
    client = {
        export = 'bl_hairties.useHairTie'
    }
},
```

```ini
ensure ox_lib
ensure ox_inventory
ensure bl_hairties
```

## Configuration

| Setting | Purpose |
| --- | --- |
| `Config.Debug` | Logs hairstyle and state details to F8. |
| `Config.ItemName` | Item name accepted by the inventory export. |
| `Config.NotificationTitle` | Title used by ox_lib notifications. |
| `Config.BaldHair` | Bald drawable for each freemode model. |
| `Config.Animation` | Enables the tie/untie animation. |
| `Config.AnimationDictionary` | GTA animation dictionary to load. |
| `Config.AnimationName` | Animation clip to play. |
| `Config.AnimationDuration` | Animation duration in milliseconds. |
| `Config.MonitorInterval` | Delay between active appearance checks. |

<Warning>
Custom hair packs may change drawable IDs. Set both values in `Config.BaldHair` to the bald or hidden-hair drawable used by your server.
</Warning>

## Download

<Card title="Download on GitHub" icon="github" href="https://github.com/TheBorkLee/bl_hairties">Source code, releases, and issue tracking.</Card>
