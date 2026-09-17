---
title: "Troubleshooting"
description: "Troubleshooting for BL Lawn Mowing 1.0.0."
---

# Troubleshooting

| Symptom | Check |
| --- | --- |
| Resource does not start | Folder name, selected framework, dependency start order, and server console. |
| Rig does not spawn | Clear spawn points, valid vehicle models, OneSync, and entity-lockdown settings. |
| Truck or mower cannot be used | Selected key adapter, key-resource start order, and fuel integration. |
| Return is rejected | Drive the work truck into the return polygon with all equipment healthy and nearby, and the mower secured. |
| Progression does not persist | Framework metadata support and server errors. |
| Trailer looks wrong | Another resource may be replacing `trailersmall`. |

### Payment & progression logs

| Log | Required action |
| --- | --- |
| `PAYMENT REVIEW REQUIRED` | Review the framework transaction before compensating the player. An adapter may have credited money before throwing; the contract ends to prevent another payment. |
| `PROGRESSION REVIEW REQUIRED` | Payment succeeded, but the progression save threw an error. Review the recorded progress and repair metadata as needed; do not pay the shift again. |

A rejected payment returns the contract to the equipment-return stage. Correct the account configuration and retry. A progression-load failure prevents payment until the record can be loaded.

## Get support

Include your framework, key resource, relevant configuration changes, steps to reproduce the issue, and client/server console errors. See [Getting Support](/support/getting-support) for the support channel.
