import { useState, useCallback } from "react";

const DIRECTIONS = {
  down: 0,
  left: 1,
  right: 2,
  up: 3,
};

function getModifier(stepSize) {
  return (
    {
      down: { x: 0, y: stepSize },
      left: { x: -stepSize, y: 0 },
      right: { x: stepSize, y: 0 },
      up: { x: 0, y: -stepSize }
    }
  );
}

export function useWalk(maxSteps, stepSize) {
  const [position, setPosition] = useState({x: 0, y: 0});
  const [dir, setDir] = useState(0)
  const [step, setStep] = useState(0)

  const move = useCallback((dir) => {
    setPosition({
      x: position.x + getModifier(stepSize)[dir].x,
      y: position.y + getModifier(stepSize)[dir].y
    })
  }, [position.x, position.y, stepSize])

  const walk = useCallback((dir) => {
    setDir(prev => {
      if(DIRECTIONS[dir] === prev) move(dir)
      return DIRECTIONS[dir];
    });
    setStep(prev => prev < maxSteps -1 ? prev + 1 : 0)
  }, [move, maxSteps])

  return { walk, dir, step, position }
}
