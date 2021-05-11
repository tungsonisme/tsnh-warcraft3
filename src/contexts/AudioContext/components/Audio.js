import { forwardRef } from "react"

const Audio = forwardRef(({ src }, ref) => (
  <audio ref={ref} style={{ visibility: "hidden" }}>
    <source src={src} type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
))

export default Audio
