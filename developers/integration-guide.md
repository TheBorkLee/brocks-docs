---
title: "Integration Guide"
description: "A safe process for integrating Brocks Scripts resources with a FiveM server."
icon: "workflow"
---

# Integration Guide

Use this process when connecting a Brocks Scripts resource to a framework, inventory, notification system, or another server resource.

<Steps>
  <Step title="Confirm support">Check the current resource version and its documented integrations. Do not assume similarly named options are interchangeable.</Step>
  <Step title="Read both references">Review the Brocks Scripts documentation and the integration provider's documentation for compatible versions and required setup.</Step>
  <Step title="Back up and isolate">Save current configuration and test the integration on a development server.</Step>
  <Step title="Set the start order">Start base libraries and dependencies before the resources that consume them.</Step>
  <Step title="Configure exact values">Copy supported values from the installed config and preserve the expected spelling, capitalization, and types.</Step>
  <Step title="Test both sides">Inspect server and F8 consoles, then test the complete player flow affected by the integration.</Step>
</Steps>

## BL Warehouse 1.1.0 integration status

| Integration | Status | Notes |
| --- | --- | --- |
| Qbox (`qbx_core`) | Required | Framework integration |
| `ox_lib` | Required | Library, notifications, and fallback context UI |
| `ox_target` | Required | Player interactions |
| `ox_inventory` | Required | Start item, capacity checks, and rewards |
| OneSync | Required | Networked guards and routing bucket isolation |
| `dialog` | Optional | NPC conversation; ox_lib context is the fallback |
| `daybreak-police` | Optional | Dispatch through its `AddCall` export |

BL Warehouse does not provide public [exports](/developers/exports) or [events](/developers/events) in version 1.1.0.

## Dispatch adapters

Set `dispatch.enabled = false` in `shared/cfg_client.lua` when dispatch is not wanted. The included optional integration targets `daybreak-police`. Supporting a different dispatch system requires adapting the `AddCall` integration before escrow upload or providing a compatible adapter resource.

## Requesting a new integration

When asking about an integration, include the Brocks Scripts resource and version, the integration name and version, your framework and version, the desired behavior, and any relevant console output. Never include private credentials.
