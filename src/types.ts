export interface HalftoneSettings {
  colorMode: 'default' | 'light'
  useTint: boolean
  tintColor: string
  scale: number
  gamma: number
  saturation: number
  brightness: number
  background: boolean
  fillPattern: boolean
  patternOpacity: number
  reveal: boolean
  revealDelay: number
  revealDuration: number
  sparkleIntensity: number
  sparkleSpeed: number
}

export const DEFAULT_SETTINGS: HalftoneSettings = {
  colorMode: 'default',
  useTint: false,
  tintColor: '#FF6200',
  scale: 14,
  gamma: 1.5,
  saturation: 1,
  brightness: 1,
  background: false,
  fillPattern: false,
  patternOpacity: 0.5,
  reveal: false,
  revealDelay: 0,
  revealDuration: 2,
  sparkleIntensity: 0.4,
  sparkleSpeed: 2,
}
