import { ENUM_STRIPE_SKINS } from '../props/spriteProps'
import { Player } from './Player/Player';

import './styles.css'

export const App = () => {
  return (
    <div className="zone-container"> 
      <Player skin={ENUM_STRIPE_SKINS.m1} />
    </div>
  );
};
 