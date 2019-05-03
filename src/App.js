import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset, delet, currentUser, edit } from './actionCreators/actionCreator';
import './css/style.css';
import Table from './components/Table';
import Form from './components/Form';
import EditUser from './components/EditUser';

const mapStateToProps = state => {
    const newState = state;
    return { ...newState}
}
const mapDispatchToProps = { edit, increment, decrement, reset, delet, currentUser}
// const mapDispatchToProps = dispatch => {
//     return {
//         increment: ()=> dispatch({type: "INCREMENT"}),
//         decrement: ()=> dispatch({type: "DECREMENT"}),
//         reset: ()=> dispatch({type: "RESET"})
//     }
// }

const App = (props)=> {
console.log(props)

const handleDelete = (id)=> {
    console.log(id)
    props.delet(id)
}

const handleEdit = (id)=> {
    //Change editing state
    props.edit(id)
    
}

const handleClick = (id)=> {
    //props.edit(id)
    props.increment()
}
const handleAddUser = ()=> {
    props.addUser()
}

    return (
        <div className="container">
            <h1 className="header">CRUD APP</h1>
            {(props.isEditing) ? <EditUser 
            /> : <Form 
            />
            }
            <Table table={props.table}
            handleEdit={handleEdit} 
            delet={handleDelete} />
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(App);