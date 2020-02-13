const initialState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0
};

// const actionMap = {
//   DRINK_COFFEE: 'coffees',
//   EAT_SNACK:    'snacks',
//   TAKE_NAP:     'naps',
//   STUDY:        'studies'
// };

// const constructAction = actionType => {
//   const actionKey = actionMap[actionType];
//   if(!actionKey) return;
//   state => ({ ...state, [actionKey]: state[actionType] + 1 });
// };

// const reducer = (state = initialState, { type }) =>
//   constructAction(type)(state) || state;

// export default reducer;

const actionMap = {
  DRINK_COFFEE: state => ({ ...state, coffees: state.coffees + 1 }),
  EAT_SNACK:    state => ({ ...state, snacks: state.snacks + 1 }),
  TAKE_NAP:     state => ({ ...state, naps: state.naps + 1 }),
  STUDY:        state => ({ ...state, studies: state.studies + 1 })
};
  
export default function reducer(state = initialState, action) {
  return actionMap[action.type]?.(state) || state;
}
