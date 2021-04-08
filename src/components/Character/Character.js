import './Character.scss';

const CharacterShadow = ({src}) => {
  return (
    <img class="Character_shadow pixelart" src={src} alt="Shadow" />
  )
}

const CharacterModel = ({src}) => {
  return (
    <img class="Character_spritesheet pixelart" src={src} alt="Character" />
  )
}

export const Character = ({character}) => {
  return (
    <div className="Character">
      <CharacterShadow src={character.shadow} />
      <CharacterModel src={character.model} />
    </div>
  );
}

