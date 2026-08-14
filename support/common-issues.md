---
title: "Common Issues"
description: "Fast checks for common FiveM resource setup problems."
icon: "triangle-alert"
---

# Common Issues

## Resource not found

Confirm the resource folder is below the server's `resources` directory, its manifest is at the expected folder root, and the `ensure` name matches the folder name.

## Dependency starts too late

Place confirmed dependencies before the Brocks Scripts resource in `server.cfg`, then restart the server and review the startup sequence.

## Error after editing a config

Restore the last working file or compare it with a clean copy. Look for mismatched quotes, commas, braces, or an incorrect value type.

## No visible interaction

Check the server console and F8 console first. Then verify the configured framework or interaction integration is running and supported by the installed release.

## Changes appear ignored

Make sure you edited the active resource copy, saved the file, and restarted the affected resource. Search the resources directory for duplicate copies.

## Still stuck?

Use the [BL Warehouse troubleshooting guide](/resources/bl-warehouse/troubleshooting) for resource setup checks or prepare a complete [support request](/support/getting-support).
