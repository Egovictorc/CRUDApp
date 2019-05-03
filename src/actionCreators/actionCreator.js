import React from 'react';
import { bindActionCreators } from 'redux';

const increment = () => {
    return {type: "INCREMENT"}
}
const decrement = ()=> {
    return {type: "DECREMENT"}
}
const reset = ()=> {
    return {type: "RESET"}
}

const delet = (id)=> {
    return {type: "DELET", id: id}
}
// const currentUser = (id)=> {
//     return {type: "CURRENTUSER", id: id}
// }
const addUser = (current)=> {
    return {type: "ADDUSER", current: current}
 }
const currentUser = (name, value, index)=> {
    return {type: "CURRENTUSER", payload: { name, value, index }}
}

const edit = (id)=> {
    return {type: "EDIT", id: id}
}

const saveEdit = (id)=> {
    return {type: "SAVEEDIT", id: id}
}

export { increment, decrement, reset, delet, currentUser, addUser, edit, saveEdit};