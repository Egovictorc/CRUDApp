import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset, delet, currentUser, addUser } from '../actionCreators/actionCreator';

const mapStateToProps = state => {
    const newState = state;
    return { ...newState}
}
const mapDispatchToProps = { increment, decrement, reset, delet, currentUser, addUser}


const Form = (props) => {

    const handleInput = (e)=> {
        if(!props.isEditing){
        console.log(e.target.name, e.target.value)
        let { name, value } = e.target
        console.log('name:', [name])
        props.currentUser(name, value)
    }
    }

    const addUser = (e)=> {
        e.preventDefault();
        if (props.current.name && props.current.surname) {   
        props.addUser(props.current)
        props.reset()
        }    
    }
 
    return (
        <form onSubmit={addUser} className="form">
            <div className="form__group">
                <label htmlFor="name" className="form__label">name: </label>
                    <input  type="text" id="name" className="form__input" name="name" onChange={handleInput} value={props.current.name} placeholder="Enter name" />
                    </div>

            <div className="form__group">
                <label htmlFor="surname" className="form__label"> surname: </label>
                    <input  type="text" name="surname" id="surname" className="form__input" onChange={handleInput} value={props.current.surname} placeholder="Enter Surname"/>
                    
            </div>

            <button className="form__button ">save</button>
        </form>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);