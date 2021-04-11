import { useEffect, useState, useCallback } from 'react';

export function useDraggable(elementId) {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  const move = useCallback((e) => {
    const pos = {
      x: e.clientX,
      y: e.clientY,
    };

    setPosition(pos);
  }, [])

  useEffect(() => {
    const handle = document.getElementById(elementId)
    handle.addEventListener("mousedown", function(e) {
      e.preventDefault()
      handle.style.pointerEvents = "none"
  
      document.body.addEventListener("mousemove", move);
      document.body.addEventListener("mouseup", () => {
        document.body.removeEventListener("mousemove", move);
        handle.style.pointerEvents = "initial"
      })
    })
  
    return () => {
      document.body.removeEventListener("mousedown", move);
      document.body.removeEventListener("mouseup", move);
      document.body.removeEventListener("mousemove", move);
    };
  }, [move])

  return {
    position
  }
}

