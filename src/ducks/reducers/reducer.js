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

const reducer = (state = initialState, { type }) => ({ ...state, [actionMap[type]]: state[actionMap[type]] + 1 });

export default reducer;
