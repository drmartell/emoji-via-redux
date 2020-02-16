const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

const actionMap = {
  DRINK_COFFEE: 'coffees',
  EAT_SNACK:    'snacks',
  TAKE_NAP:     'naps',
  STUDY:        'studies'
};

const reducer = (state = initialState, { type }) => {
  const actionTarget = actionMap[type];
  return actionTarget ? ({ ...state, [actionTarget]: state[actionTarget] + 1 }) : state;
};

export default reducer;
