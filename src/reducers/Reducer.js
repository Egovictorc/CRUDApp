import React from "react";

const initialValue = { id: 0, name: "", surname: "", isEditing: false };
const initState = {
  count: 1,
  table: [
    { id: 1, name: "uche", surname: "Nwafor" },
    { id: 2, name: "emeka", surname: "Okeke" },
    { id: 3, name: "nkiru", surname: "Ozor" }
  ],
  isEditing: false,
  current: { ...initialValue },
  willWarn: false,
};

const reducer = (state = initState, action) => {
  console.log(state);
  switch (action.type) {
    case "EDIT":
    const iden = action.id;
    const cur = state.table.filter( el => el.id === iden)
    return {
      ...state,
      isEditing: !state.isEditing,
      current: cur[0]
    }
    
    case "RESET":
      return { ...state,
        isEditing: false,
        willWarn: false,
        current: {...initialValue} };

    case "DELET":
      return { ...state, table: state.table.filter(el => el.id !== action.id) };

    case "ADDUSER":
    const current = action.current;
    current.id = state.table.length + 1;
      return {
        ...state,
        table: [...state.table, current]
      };

    case "CURRENTUSER":
    const { name, value, index } = action.payload;
      return {
        ...state,
        current: { ...state.current,
          [name] : value,
          id: index,
        }
      };

      case "SAVEEDIT":
      const saveId = action.id;
      return {
        ...state,
        table: state.table.map( el => (el.id !== saveId) ? (el): (state.current) )
      }
      case "WARN":
      return Object.assign({}, state, { willWarn: true})
    default:
      return state;
  }
};

export default reducer;
