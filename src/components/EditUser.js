import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actionCreators/actionCreator';


const mapStateToProps = state => {
    const newState = {...state};
    return  newState 
}

const mapDispatchToProps = {saveEdit: actions.saveEdit, increment: actions.increment, decrement: actions.decrement, reset: actions.reset, delet: actions.delet, currentUser: actions.currentUser, addUser: actions.addUser, edit: actions.edit}

// const EditUser = ( { isEditing, saveEdit, current, currentUser }) => {
const EditUser = ( { reset, isEditing, saveEdit, current, currentUser }) => {

const handleChange = (e)=> {
    const {name, value} = e.target
    const index = current.id
    currentUser(name, value, index)
}

const handleSave = (e)=>{
    e.preventDefault();
    if (current.name && current.surname ) {
    const id = current.id;
    saveEdit(id)
    reset()
    } else {
    const warn = document.getElementById("form__warn");
    warn.style.display="block";
    }
}
const handleCancel = (e)=> {
    e.preventDefault();
    reset();
}

    return (
        <div>
            <form onSubmit={handleSave} className="form">
            <div className="form__group">
                <label htmlFor="name" className="form__label">name: </label>
                    <input type="text" id="name" className="form__input" name="name" value={current.name} onChange={handleChange} placeholder="please enter name" />
            </div>

            <div className="form__group">
                <label htmlFor="surname" className="form__label"> surname: </label>
                    <input type="text" name="surname" id="surname" className="form__input" value={current.surname}  onChange={handleChange} placeholder="please enter surname" />    
            </div>
            {/* validate input for name and surname */}
            <p id="form__warn" className="form__warn--name" style={ {display: "none", color: "red", fontSize: "1rem", textTransform: "Lowercase"} }> * Please enter name / surname</p>
            
            <button className="form__button form__button--save">save</button>
            <button className="form__button form__button--cancel" onClick={handleCancel}>cancel</button>
        </form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);