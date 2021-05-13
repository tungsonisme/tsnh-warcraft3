import { useEffect } from "react"

export const useClickAnyWhere = (callback) => {
  useEffect(() => {
    document.addEventListener("mousedown", callback)

    return () => {
      document.removeEventListener("mousedown", callback)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}
