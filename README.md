# Care Profiler Viewer

This project implements a prototype for the **Panel de Calibración** as described in the design document. It uses React, TypeScript and Vite.

The codebase is organized by feature under `src/features`. Each feature contains
its own components so they can evolve independently. See `docs/2025-06-08-adr-modular-architecture.md` for details.

## Development

Dependencies cannot be installed in this environment, but the project is structured to use:

- React + TypeScript
- Zustand for state management
- react-konva for canvas overlays

Run the following commands in an environment with internet access to install dependencies and start the dev server:

```bash
npm install
npm run dev
```

The application expects a WebSocket server sending messages with topics `inference.tap` and `tracker.tap`.
