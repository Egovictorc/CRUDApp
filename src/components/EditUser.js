import React from 'react';
import { connect } from 'react-redux';



import { increment, decrement, saveEdit, reset, delet, currentUser, addUser, edit } from '../actionCreators/actionCreator';
const mapStateToProps = state => {
    const newState = {...state};
    return  newState 
}

const mapDispatchToProps = {saveEdit, increment, decrement, reset, delet, currentUser, addUser, edit}

// const EditUser = ( { isEditing, saveEdit, current, currentUser }) => {
const EditUser = ( { reset, isEditing, saveEdit, current, currentUser }) => {

const handleChange = (e)=> {
    const {name, value} = e.target
    const index = current.id
    currentUser(name, value, index)
}

const handleSave = (e)=>{
    e.preventDefault();
    const id = current.id;
    saveEdit(id)
    reset()
    console.log(isEditing)
}

    return (
        <div>
            <form onSubmit={handleSave} className="form">
            <div className="form__group">
                <label htmlFor="name" className="form__label">name: </label><br />
                    <input type="text" id="name" className="form__input" name="name" value={current.name} onChange={handleChange}/>
                    </div>

            <div className="form__group">
                <label htmlFor="surname" className="form__label"> surname: </label> <br />
                    <input type="text" name="surname" id="surname" className="form__input" value={current.surname}  onChange={handleChange}/>    
            </div>

            <button className="form__button form__button--save">save</button>
            <button className="form__button form__button--cancel">cancel</button>
        </form>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUser);