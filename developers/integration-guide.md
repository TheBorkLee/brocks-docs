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

## BL Warehouse integration status

`[ADD CONFIRMED INTEGRATIONS AND SUPPORTED VERSIONS HERE]`

No public [exports](/developers/exports) or [events](/developers/events) have been documented yet.

## Requesting a new integration

When asking about an integration, include the Brocks Scripts resource and version, the integration name and version, your framework and version, the desired behavior, and any relevant console output. Never include private credentials.
