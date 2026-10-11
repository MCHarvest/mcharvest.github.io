---
layout: home
title: MCHarvest
---

MCHarvest is a family of Minecraft server plugins that run on SpigotMC, PaperMC and Folia.
Each plugin covers one feature, and they work together through a shared central server.

## How the ecosystem fits together

* **Plugins** run on your Minecraft server. They never connect to a database.
* **The central server** is a separate REST service that does the heavy processing and stores all data.
* **MCHarvest Core** is the only plugin that talks to the central server. Every other MCHarvest plugin sends its requests through Core, so your Minecraft server keeps one connection instead of one per plugin.

A request travels from a plugin, through Core, to the central server, which reads or writes the database and sends the answer back the same way.

## Plugin layers

Plugins are grouped into layers. Plugins in the same layer never depend on each other, and a plugin can only optionally use plugins from the layer above it. Core is the exception: any plugin, in any layer, can use Core to reach the central server.

| Layer | Plugins |
|---|---|
| 0 | Agents |
| 1 | [Core](plugins/core.html), Identity, Economy |
| 2 | Clan, Guild, Party, Membership |
| 3 | Trade, Market, Voucher, Cosmetic |
| 4 | Quest, Achievement, Discord |

## Events

Every plugin announces its main actions as server events. Other plugins can listen to them and, where it makes sense, cancel the action, so plugins can change each other's behaviour without being tied together.
