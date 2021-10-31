import { useMemo } from 'react';
import { Sprite } from 'components/Sprite/Sprite';
import { buttonToAction } from 'helpers/buttonToAction';

export const Actor = ({ sprite, data, action=buttonToAction.PLAYER_ACTIONS.idle, position={x: 0, y: 0}, step = 0, dir = 0 }) => {
  const { h, w } = data;
  
  const spriteImage = useMemo(() => {
    return [sprite, action].join('_')
  }, [sprite, action])

  return (
    <Sprite 
      image={spriteImage}
      position={position}
      data={{
        x: step * w,
        y: dir * h,
        w, 
        h,
      }}
    />
  )
}