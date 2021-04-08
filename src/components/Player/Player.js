import { Actor } from '../Actor/Actor';
import { useKeyPress } from "../../hooks/use-key-press/useKeyPress";
import { useWalk } from "../../hooks/use-walk/useWalk"
export const Player = ({ skin }) => {
  const { dir, step, walk, position } = useWalk(3, 16)
  const data = {
    h: 32,
    w: 32
  };

  useKeyPress((e) => {
    walk(e.key.replace("Arrow", "").toLowerCase());


    e.preventDefault();
  })

  return <Actor sprite={skin} data={data} step={step} dir={dir} position={position} />
};