import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Character } from './components/Character/Character';
import { defaultCharacter } from './props/characterProps';


ReactDOM.render(
  <React.StrictMode>
    <Character character={defaultCharacter} />
  </React.StrictMode>,
  document.getElementById('root')
);

