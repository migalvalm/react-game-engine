import { useState } from 'react';

import { Actor } from 'components/Actor/Actor';
import { useKeyPress } from "hooks/useKeyPress";
import { useWalk } from "hooks/useWalk";
import { buttonToAction } from 'helpers/buttonToAction';

export const Player = ({ skin }) => {
  const { dir, step, walk, position } = useWalk(4, 16)
  const [action, setAction] = useState(buttonToAction.PLAYER_ACTIONS.idle)

  const data = {
    h: 44,
    w: 44
  };

  useKeyPress((e) => {
    walk(e.key.replace("Arrow", "").toLowerCase());

    setAction(buttonToAction(e.key.toLowerCase()))
    e.preventDefault();
  })

  return <Actor sprite={skin} action={action} data={data} step={step} dir={dir} position={position} />
};