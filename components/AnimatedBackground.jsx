import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import { useCallback } from "react"

export default function AnimatedBackground() {
  const init = useCallback(async engine => {
    await loadFull(engine)
  }, [])

  return (
    <Particles init={init}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        fpsLimit: 60,
        particles: {
          number: { value: 30, density: { enable: true, area: 800 } },
          color: { value: "#0ea5a4" },
          shape: { type: "circle" },
          opacity: { value: 0.2 },
          size: { value: { min: 1, max: 4 } },
          move: { enable: true, speed: 0.6, direction: "none", outModes: { default: "out" } }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" }
          },
          modes: { repulse: { distance: 100 }, push: { quantity: 2 } }
        },
        detectRetina: true
      }} />
  )
}
