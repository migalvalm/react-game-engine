import { ENUM_STRIPE_SKINS } from 'props/spriteProps'
import { Player } from 'components/Player/Player';

import 'components/styles.css'

export const App = () => {
  return (
    <div className="zone-container"> 
      <Player skin={ENUM_STRIPE_SKINS.punk} />
    </div>
  );
};
 