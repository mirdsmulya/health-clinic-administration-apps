export default function dataReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_DATA':
      return [...state,
        Object.assign({}, action.data)
      ];
      default:
        return state;
  }
}
