import create from 'zustand'
import { InferenceMessage, TrackerMessage } from './types'

interface State {
  inference?: InferenceMessage
  tracker?: TrackerMessage
  frames: (InferenceMessage | TrackerMessage)[]
  setInference: (m: InferenceMessage) => void
  setTracker: (m: TrackerMessage) => void
}

export const useStore = create<State>((set) => ({
  inference: undefined,
  tracker: undefined,
  frames: [],
  setInference: (m) =>
    set((s) => ({ inference: m, frames: [...s.frames, m].slice(-720) })),
  setTracker: (m) =>
    set((s) => ({ tracker: m, frames: [...s.frames, m].slice(-720) })),
}))
