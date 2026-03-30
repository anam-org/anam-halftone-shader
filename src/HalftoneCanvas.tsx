import { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import { HalftoneEngine } from './halftoneEngine'
import type { HalftoneSettings } from './types'

export interface HalftoneCanvasHandle {
  getCanvas: () => HTMLCanvasElement | null
  resetAnimation: () => void
}

interface Props {
  imageSrc: string | null
  settings: HalftoneSettings
}

const HalftoneCanvas = forwardRef<HalftoneCanvasHandle, Props>(
  ({ imageSrc, settings }, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const engineRef = useRef<HalftoneEngine | null>(null)

    useImperativeHandle(ref, () => ({
      getCanvas: () => canvasRef.current,
      resetAnimation: () => engineRef.current?.resetAnimation(),
    }))

    useEffect(() => {
      if (!canvasRef.current) return
      const engine = new HalftoneEngine(canvasRef.current)
      engineRef.current = engine
      return () => {
        engine.destroy()
        engineRef.current = null
      }
    }, [])

    useEffect(() => {
      engineRef.current?.setImage(imageSrc)
    }, [imageSrc])

    useEffect(() => {
      engineRef.current?.setSettings(settings)
    }, [settings])

    return <canvas ref={canvasRef} className="block w-full h-full" />
  }
)

HalftoneCanvas.displayName = 'HalftoneCanvas'

export default HalftoneCanvas
