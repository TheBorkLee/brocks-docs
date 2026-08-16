---
title: "BL Warehouse"
description: "Overview, requirements, compatibility, and quick links for BL Warehouse 1.2.0."
icon: "warehouse"
---

# BL Warehouse

BL Warehouse is an instanced warehouse robbery for Qbox, QBCore, and ESX servers. Players obtain a warehouse location, breach a randomized entrance, fight networked guards, search crates, and escape with configurable rewards.

**Documented version:** `1.2.0`

## Features

- Ten randomized warehouse entrances
- Instanced interior using OneSync routing buckets
- Server-created networked security guards
- Randomized searchable crates and configurable loot tables
- Configurable police requirement, global cooldown, robbery timer, start item, guards, rewards, and messages
- Server-authoritative entry, distance, routing bucket, item, loot, and duplicate-loot validation
- Optional NPC dialog and police dispatch integrations
- Cleanup on completion, timeout, disconnect, resource stop, and restart

## Compatibility

BL Warehouse 1.2.0 supports:

- Qbox through `qbx_core`, QBCore through `qb-core`, or ESX through `es_extended`
- `ox_inventory`
- `ox_target`
- `ox_lib`

Select the framework in `shared/cfg_server.lua`. Alternative inventory and target resources are not supported out of the box. The optional `dialog` and dispatch integrations are not required for the robbery to run.

## Requirements

- One supported framework: `qbx_core`, `qb-core`, or `es_extended`
- `ox_lib`
- `ox_target`
- `ox_inventory`
- OneSync enabled

<Warning>
Start all four required resources before `bl_warehouse`. Use current versions compatible with your Qbox server.
</Warning>

## Quick links

<CardGroup cols="2">
  <Card title="Installation" icon="download" href="/resources/bl_warehouse/installation">Install and verify the resource.</Card>
  <Card title="Configuration" icon="sliders-horizontal" href="/resources/bl_warehouse/configuration">Prepare the included configuration.</Card>
  <Card title="Items & Rewards" icon="package" href="/resources/bl_warehouse/items-and-rewards">Plan inventory and reward setup.</Card>
  <Card title="Framework Setup" icon="plug" href="/resources/bl_warehouse/framework-setup">Review framework placeholders.</Card>
  <Card title="Full Config" icon="file-code-2" href="/resources/bl_warehouse/full-config">See the future config reference structure.</Card>
  <Card title="Troubleshooting" icon="wrench" href="/resources/bl_warehouse/troubleshooting">Work through common FiveM checks.</Card>
</CardGroup>
