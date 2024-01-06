import { useIsomorphicLayoutEffect } from "framer-motion"
import { useMemo, useState } from "react"

type UseMeasureResult = Pick<
  DOMRectReadOnly,
  "x" | "y" | "top" | "left" | "width" | "height"
>

type TUseMeasure<T extends Element> = [(elem: T) => void, UseMeasureResult]

const defaultState: UseMeasureResult = {
  height: 0,
  left: 0,
  top: 0,
  width: 0,
  x: 0,
  y: 0,
}

const useMeasure = <T extends Element = Element>(): TUseMeasure<T> => {
  const [elem, setElem] = useState<T | null>(null)
  const [rect, setRect] = useState<UseMeasureResult>(defaultState)

  const observer = useMemo(
    () =>
      new ResizeObserver(entries => {
        if (entries[0]) {
          const { x, y, width, height, top, left } = entries[0].contentRect
          setRect({ x, y, width, height, top, left })
        }
      }),
    [],
  )

  useIsomorphicLayoutEffect(() => {
    if (!elem) return
    observer.observe(elem)
    return () => observer.disconnect()
  }, [elem])

  return [setElem, rect]
}

export default useMeasure
