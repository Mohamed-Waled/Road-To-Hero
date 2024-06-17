import { MutableRefObject, useEffect, useRef } from "react";

function useCloseOutSide(
  handler: () => void
): MutableRefObject<HTMLElement | undefined> {
  const ref = useRef<HTMLElement>();

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return ref;
}

export default useCloseOutSide;
