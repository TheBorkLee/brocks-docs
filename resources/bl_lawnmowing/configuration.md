---
title: "Configuration"
description: "Configuration for BL Lawn Mowing 1.0.0."
---

# Configuration

All configuration files below remain editable in the escrowed resource. Restart `bl_lawnmowing` after changes.

| File | What to configure |
| --- | --- |
| `cfg_shared.lua` | Vehicle models and truck plate prefix |
| `cfg_client.lua` | Depot, lawns, grass density, interactions, fuel, and keys |
| `cfg_server.lua` | Framework, job access, economy, progression, and security |
| `dialog.lua` | Optional foreman conversation |

## Settings to review

| Setting | Location | Action |
| --- | --- | --- |
| Framework | `shared/cfg_server.lua` | Select `qbox`, `qbcore`, or `esx`. |
| Job access | `shared/cfg_server.lua` | Leave open to everyone or require a job and grade. |
| Economy & progression | `shared/cfg_server.lua` | Review payment caps, XP, and level bonuses. |
| Vehicle models | `shared/cfg_shared.lua` | Confirm all configured models are available. |
| Depot & lawns | `shared/cfg_client.lua` | Review spawn points, return area, and customer boundaries. |
| Fuel & keys | `shared/cfg_client.lua` | Select the key adapter and adjust vehicle setup if needed. |

Restart the resource after editing its configuration.

## Adding a lawn

Add a `CreateLawn` entry to `lawns` in `cfg_client.lua`. Replace these example coordinates with the actual yard boundary:

```lua
CreateLawn({
    label = 'New Customer Lawn',
    pay = nil,     -- Use the configured base pay and per-patch rate.
    patches = nil, -- Calculate the patch count from usable polygon area.
    points = {
        vec3(0.0, 0.0, 30.0),
        vec3(10.0, 0.0, 30.0),
        vec3(10.0, 10.0, 30.0),
        vec3(0.0, 10.0, 30.0),
    },
    excludedAreas = {
        { coords = vec3(5.0, 5.0, 30.0), radius = 1.5 },
    },
}),
```

Trace boundary points in perimeter order. Use excluded circles around obstacles, and leave enough room for the mower along edges. Test each new lawn in-game to confirm it can reach the completion threshold.
