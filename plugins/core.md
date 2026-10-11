---
layout: page
title: Core
permalink: /plugins/core.html
---

MCHarvest Core is the gateway between your Minecraft server and the MCHarvest central server.
Install it whenever you use any other MCHarvest plugin.

## What it does

* Opens the single connection from your Minecraft server to the central server.
* Lets every other MCHarvest plugin send its requests through that connection, whatever layer the plugin is in.
* Signs every request with your central server token and never follows redirects, so the token only goes to the server you configured.
* Sends requests in the background, so a slow central server never freezes your game.

## Supported servers

One jar works on SpigotMC, PaperMC and Folia. When the server starts, Core detects which one it is running on and uses the matching task scheduler, including Folia's region-aware scheduling.

## Installation

1. Download the `MCHarvestCoreEngine` jar.
2. Put it in your server's `plugins` folder and start the server once.
3. Open `plugins/MCHarvestCore/config.yml`, set the central server address and token, then restart.

If the address is missing or the timeout is not a positive number, Core logs the problem and disables itself.

## Configuration

| Setting | What it controls | Default |
|---|---|---|
| `central-server.url` | Address of the MCHarvest central server | `http://localhost:3000` |
| `central-server.token` | Token the central server expects on every request | `change-me` |
| `central-server.timeout-seconds` | How long Core waits to connect and for each answer | `10` |

## Events

| Event | When it fires | Cancellable |
|---|---|---|
| Central request | Just before Core sends a request to the central server | Yes. Cancelling stops the request and the plugin that sent it is told it was cancelled. |

## For plugin developers

Other plugins compile against the Core API (`io.github.mcharvest:core-api`) and declare Core as a dependency in their plugin description. The API gives access to the central server gateway; Core handles the connection.
