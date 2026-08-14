---
title: "Troubleshooting"
description: "General FiveM troubleshooting checks for a BL Warehouse installation."
icon: "wrench"
---

# Troubleshooting

These checks address common FiveM setup problems and do not imply that BL Warehouse has a known product-specific error.

## Resource Doesn't Start

1. Check the server console for the first `bl-warehouse` error.
2. Verify the folder is named `bl-warehouse` and contains `fxmanifest.lua` at its root.
3. Confirm `ensure bl-warehouse` exists in `server.cfg`.
4. Verify the resource start order and restart the server.

## Missing Dependency

- Confirm `qbx_core`, `ox_lib`, `ox_target`, and `ox_inventory` are installed and current.
- Confirm every dependency folder name and version.
- Start all four dependencies before `bl-warehouse`.
- Resolve the first missing export or resource error shown in the console.

## Script Error

- Read the complete server console error, including its file and line number.
- Check the F8 console for a client-side error.
- Restore a clean configuration to determine whether an edit introduced the issue.
- Check for configuration syntax errors such as missing commas, braces, or quotes.

## Interaction Not Appearing

- Confirm `ox_target` is running before `bl-warehouse`.
- Review both consoles for errors.
- Verify the relevant configuration and location data against the included files.
- Test with the correct player state or job only if the release documents such requirements.

## Items Not Working

- Confirm exact item names exist in the configured inventory.
- Verify `ox_inventory` starts before BL Warehouse.
- Check inventory registration files for syntax errors.
- Review [Items & Rewards](/resources/bl-warehouse/items-and-rewards).

## Database Errors

- Confirm you selected the correct database.
- Import SQL only if the release includes and requires it.
- Check the database connector console output.
- Verify database credentials privately; never include them in a public support request.
- Restore from a backup if an import or migration failed.

## Configuration Changes Not Applying

- Save the correct file in the active resource folder.
- Restart the resource after configuration changes.
- Check for configuration syntax errors.
- Ensure an old or duplicate copy of the resource is not starting instead.
- Clear only the caches recommended by your server platform or resource instructions.

## Getting Support

If the issue remains, capture the first relevant server and F8 console errors and follow the [support request checklist](/support/getting-support).
