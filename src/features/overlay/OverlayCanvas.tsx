import { Stage, Layer, Rect, Line, Circle } from 'react-konva'
import { useStore } from '../../store'
import { TrackerMessage, InferenceMessage } from '../../types'

function drawDetections(inference?: InferenceMessage) {
  if (!inference) return null
  return inference.detections.map((det) => (
    <Rect
      key={det.person_id}
      x={det.bbox[0]}
      y={det.bbox[1]}
      width={det.bbox[2]}
      height={det.bbox[3]}
      stroke="red"
    />
  ))
}

function drawTracks(tracker?: TrackerMessage) {
  if (!tracker) return null
  return tracker.tracks.map((t) => (
    <Rect
      key={t.person_id}
      x={t.bbox_smoothed[0]}
      y={t.bbox_smoothed[1]}
      width={t.bbox_smoothed[2]}
      height={t.bbox_smoothed[3]}
      stroke="green"
    />
  ))
}

function drawRegions(tracker?: TrackerMessage) {
  if (!tracker) return null
  return Object.entries(tracker.regions).map(([name, r]) => (
    <Line
      key={name}
      points={r.keypoints.flat()}
      closed
      stroke="blue"
      strokeWidth={2}
      opacity={0.5}
    />
  ))
}

export default function OverlayCanvas() {
  const inference = useStore((s) => s.inference)
  const tracker = useStore((s) => s.tracker)

  return (
    <Stage width={1280} height={720}>
      <Layer>
        {drawRegions(tracker)}
        {drawDetections(inference)}
        {drawTracks(tracker)}
      </Layer>
    </Stage>
  )
}
