import { useState, useCallback } from "react";

const DIRECTIONS = {
  s: 0,
  d: 1,
  a: 2,
  w: 3,
};

function getModifier(stepSize) {
  return (
    {
      s: { x: 0, y: stepSize },
      d: { x: -stepSize, y: 0 },
      a: { x: stepSize, y: 0 },
      w: { x: 0, y: -stepSize }
    }
  );
}

export const useWalk = (maxSteps=4, stepSize=16) => {
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
