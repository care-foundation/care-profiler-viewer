import { useEffect } from 'react'
import OverlayCanvas from './features/overlay/OverlayCanvas'
import LiveMetricsPanel from './features/metrics/LiveMetricsPanel'
import MiniTimeline from './features/timeline/MiniTimeline'
import { useStore } from './store'
import { InferenceMessage, TrackerMessage } from './types'

function useWebSocket(url: string) {
  const setInf = useStore((s) => s.setInference)
  const setTrk = useStore((s) => s.setTracker)

  useEffect(() => {
    const ws = new WebSocket(url)
    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if (data.topic === 'inference.tap') {
        setInf(data as InferenceMessage)
      } else if (data.topic === 'tracker.tap') {
        setTrk(data as TrackerMessage)
      }
    }
    return () => ws.close()
  }, [url, setInf, setTrk])
}

export default function App() {
  useWebSocket('ws://localhost:8080')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <OverlayCanvas />
      <LiveMetricsPanel />
      <MiniTimeline />
    </div>
  )
}
