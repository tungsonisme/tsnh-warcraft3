import { useEffect } from "react"

export const usePressAnyKey = (callback) => {
  useEffect(() => {
    document.addEventListener("keypress", callback)

    return () => {
      document.removeEventListener("keypress", callback)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
