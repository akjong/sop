# TypeScript Coding SOP

## Dev Tools

* [Biome](https://github.com/biomejs/biome) - formatter, linter, CLI, LSP.

## Runtime

priority order:

1. [Bun](https://bun.sh) - zig, jscore powered node.js compatible(not full) runtime.
2. [tsx](https://github.com/privatenumber/tsx) - node.js full-compatible runtime.

## Dockerfile

* bun: oven/bun:1-slim
* tsx: node:20-bookworm-slim

## Memory allocator

jemalloc

## logging

* [pino](https://github.com/pinojs/pino): json format.

## Config file

* yaml or toml
