# Architecture Overview

This ADR describes the modular structure adopted for the initial calibration panel prototype. The goal is to keep features cohesive and easy to evolve independently.

## Directory Structure

```
src/
  features/
    overlay/       # drawing detections, tracks and regions
    metrics/       # live metrics display
    timeline/      # mini timeline histogram
  store.ts         # shared Zustand store
  types.ts         # shared message types
  App.tsx          # root component
```

Each feature folder contains its own React components and can grow with additional helpers or local state.

## Rationale

- **Separation of Concerns**: overlay rendering, metrics, and timeline are independent pieces. Placing them under `features/` clarifies ownership and reduces coupling.
- **Scalability**: new capabilities (e.g. playback) can be introduced as new feature folders without affecting existing code.
- **Shared State**: only minimal global state lives in `store.ts` using Zustand. Features subscribe to the parts they need.

This layout is intentionally simple while supporting incremental complexity as the application evolves.
