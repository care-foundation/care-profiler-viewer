import { useStore } from '../../store'

export default function LiveMetricsPanel() {
  const tracker = useStore((s) => s.tracker)
  const fps = tracker ? 6 : 0
  const tracks = tracker ? tracker.tracks.length : 0
  return (
    <div style={{ padding: '8px', background: '#fff' }}>
      <div>FPS: {fps}</div>
      <div>Active Tracks: {tracks}</div>
    </div>
  )
}
