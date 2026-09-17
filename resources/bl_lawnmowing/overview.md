---
title: "BL Lawn Mowing"
description: "BL Lawn Mowing for BL Lawn Mowing 1.0.0."
---

# BL Lawn Mowing

A landscaping job for **Qbox, QBCore, and ESX**. Collect your equipment, work through customer lawns, and return to the depot for payment and progression.

**Documented version:** 1.0.0

## Features

- Open-ended solo workdays: continue to another customer or finish after each lawn.
- Fifteen configurable polygon lawns with generated grass and distance-based prop streaming.
- Work truck, utility trailer, and mower with loading, unloading, and equipment return.
- Persistent XP, levels, pay bonuses, and work statistics stored in framework metadata.
- Optional job and minimum-grade requirements.
- Configurable fuel, vehicle setup, and vehicle-key integrations.
- Optional foreman dialog with an ox_lib menu fallback.
- Compact UI for mowing progress, instructions, payment, and XP.
- Server-side contract ownership, grass-distance, equipment, and payout checks.

## Requirements

| Component | Requirement |
| --- | --- |
| Framework | `qbx_core`, `qb-core`, or `es_extended` |
| Library | `ox_lib` |
| Interactions | `ox_target` |
| Networking | OneSync enabled |
| Vehicle keys | Optional; see [installation](/resources/bl_lawnmowing/installation#vehicle-keys) |
| Foreman dialog | Optional [LE Development Dialog](https://github.com/LE-Development/dialog) |

No SQL import is required.

> **Included trailer:** this resource replaces `trailersmall` server-wide. Remove conflicting replacements and do not start a separate trailer wrapper.

## How a workday works

1. Speak with the foreman and start working.
2. Collect the mower and secure it to the trailer.
3. Follow the GPS to the customer, unload, and mow the lawn.
4. Return the mower to the trailer and choose **Next Customer** or **End Day**.
5. To finish, drive the complete rig into the depot return area and press **E**.

If all lawns are occupied, the job waits for an available customer. After completing at least one lawn, you can choose **End Day** at the trailer while waiting.

Use `/cancellawn` to cancel without payment. Cancelling removes the assigned equipment and forfeits the current workday's progress.

## Payment & progression

Payment and XP are awarded when the completed workday is returned successfully.

- The default payout cap is **$50,000 per workday**, including reputation bonuses.
- Additional customers can still earn XP after the payout cap is reached.
- XP, levels, completed lawns, completed shifts, and earnings use framework metadata.
- The player's level at payment determines the reputation pay bonus.

XP is calculated as:

```text
floor((completed lawns × xpPerLawn + shiftCompletionXp) × xpMultiplier)
```

Configure rates and limits in `cfg_server.lua`. Waiting for a customer pauses the inactivity timeout; missing-equipment and depot-blocking cleanup still apply.

## Quick links

- [Installation](/resources/bl_lawnmowing/installation)
- [Configuration](/resources/bl_lawnmowing/configuration)
- [Troubleshooting](/resources/bl_lawnmowing/troubleshooting)
