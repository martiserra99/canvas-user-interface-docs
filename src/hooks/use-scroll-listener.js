import { useEffect } from "react"

function useScrollListener(listener) {
  useEffect(() => {
    listener()
    window.addEventListener("scroll", listener)
    return () => window.removeEventListener("scroll", listener)
  }, [listener])
}

export default useScrollListener
