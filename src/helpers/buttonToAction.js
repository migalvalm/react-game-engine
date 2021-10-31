import { ENUM_BUTTON_TO_ACTION, ENUM_PLAYER_ACTIONS } from 'props/spriteProps';

export const buttonToAction = (button) => {
  return ENUM_PLAYER_ACTIONS[ENUM_BUTTON_TO_ACTION[button]]
}

buttonToAction.BUTTON_TO_ACTION = ENUM_BUTTON_TO_ACTION;
buttonToAction.PLAYER_ACTIONS = ENUM_PLAYER_ACTIONS;