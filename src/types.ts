export interface Detection {
  person_id: number
  bbox: [number, number, number, number]
  keypoints: any[]
  confidence: number
  imov?: number
}

export interface InferenceMessage {
  topic: 'inference.tap'
  timestamp: number
  frame_id: number
  detections: Detection[]
}

export interface Region {
  occupied?: boolean
  crossed?: boolean
  confidence?: number
  bbox: [number, number, number, number]
  keypoints: [number, number][]
}

export interface Track {
  person_id: number
  bbox_smoothed: [number, number, number, number]
  keypoints: any[]
  stability?: number
}

export interface TrackerMessage {
  topic: 'tracker.tap'
  timestamp: number
  event?: string
  event_payload?: Record<string, unknown>
  regions: Record<string, Region>
  tracks: Track[]
}
