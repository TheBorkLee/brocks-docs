---
title: "BL Pedspawns"
description: "Install and configure the free BL Pedspawns resource."
icon: "users"
---

# BL Pedspawns

BL Pedspawns is a free standalone FiveM resource that suppresses ambient NPCs inside configurable zones while protecting player, mission, and networked peds by default.

**Current version:** `1.1.0`  
**Price:** Free  
**Framework:** Standalone

## Features

- Unlimited configurable cleanup zones
- Ambient scenario blocking for each zone
- Protection for scripted and network-owned NPCs
- One ped-pool scan per cleanup pass, regardless of zone count
- Automatic scenario-blocker cleanup on resource stop
- No framework dependencies

## Installation

1. Download or clone [`bl_pedspawns`](https://github.com/TheBorkLee/bl_pedspawns).
2. Place the folder in your server resources.
3. Add `ensure bl_pedspawns` to `server.cfg`.
4. Configure zones and restart the resource.

## Configuration

```lua
Config.Zones = {
    {
        name = 'Yellow Jack',
        coords = vec3(1986.72, 3049.67, 46.21),
        radius = 75.0,
    },
}
```

| Setting | Purpose |
| --- | --- |
| `Config.Debug` | Logs invalid zones and the loaded zone count to F8. |
| `Config.ClearInterval` | Delay between cleanup passes in milliseconds. |
| `Config.IgnoreMissionPeds` | Protects NPCs created by other scripts. |
| `Config.IgnoreNetworkedPeds` | Protects server-owned and networked NPCs. |
| `Config.Zones` | Names, centers, and radii for cleanup areas. |

<Tip>
Keep both protection settings enabled unless you deliberately want to remove scripted or networked NPCs. Lower cleanup intervals react faster but require more client time.
</Tip>

## Download

<Card title="Download on GitHub" icon="github" href="https://github.com/TheBorkLee/bl_pedspawns">Source code, releases, and issue tracking.</Card>
