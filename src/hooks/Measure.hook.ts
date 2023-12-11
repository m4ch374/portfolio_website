import {
  RefObject,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react"

const useMeasure = <T extends HTMLElement>(ref: RefObject<T>) => {
  const [width, setWidth] = useState<number>(ref.current?.clientWidth || 0)
  const [height, setHeight] = useState<number>(ref.current?.clientHeight || 0)

  const onResize = useCallback(() => {
    setWidth(ref.current?.clientWidth || width)
    setHeight(ref.current?.clientHeight || height)
  }, [height, ref, width])

  useLayoutEffect(() => {
    setWidth(ref.current?.clientWidth || width)
    setHeight(ref.current?.clientHeight || height)
  }, [height, ref, width])

  useEffect(() => {
    setWidth(ref.current?.clientWidth || width)
    setHeight(ref.current?.clientHeight || height)
  }, [height, ref, width])

  useEffect(() => {
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [onResize])

  return { width, height }
}

export default useMeasure
