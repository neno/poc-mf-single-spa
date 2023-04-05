# Introduction

This is the Monorepo for the Lighting Volt app which consists of several Micro Frontends using Module Federation for runtime dependency sharing.
Every Micro Frontend is a separate package in the `packages` directory and is used as a service.

## Micro Frontends

- bff: Backend for Frontend
- host: Host application including all Micro Frontends
- Components as Micro Frontends:
  - volt_button (VoltButton)

# Getting Started

## Prerequisites

You need Node.js version 16.20.0

We recommend using a Node Version Manager (NVM) to install and manage Node.js versions.

## Installation and setup

In the root directory, run the following command to install all dependencies:

```bash
yarn install
```

Run the Micro Frontends in development mode:

```bash
yarn start
```

This will open a browser window for every Micro Frontend and the host application.

In the host application (http://localhost:33330), you can check the interaction of the host, the shared store and the component(s)
