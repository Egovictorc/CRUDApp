import React from 'react';
import PropTypes from 'prop-types';


const Table = ({ table, delet, handleEdit })=> {

    return (
        <table className="table">
            <thead className="table__head">
                <tr className="table__th">
                    <td className="table__column">S/N</td>
                    <td className="table__column">Name</td>
                    <td className="table__column">Surname</td>
                    <td className="table__column">Actions</td>
                </tr>
            </thead>

            <tbody>{ table.length ? (
                table.map( (el, index) =>  (
                    <tr className="table__row" key={index}>
                        <td className="table__column"> {index + 1} </td>
                        <td className="table__column"> {el.name} </td>
                        <td className="table__column"> {el.surname} 
                        </td>
                        <td className="table__column">
                            <button className="table__button table__button--edit" onClick={ ()=> handleEdit(el.id) }>edit</button>
                        <button className="table__button table__button--delete" onClick={ ()=> delet(el.id)}>delete</button>
                        </td>
                    </tr>
                ))): (
                    <tr className="table__row">
                        <td className="table__column" colspan="4"> No item</td>
                    </tr>)}
            </tbody>
        </table>
    )
}

Table.propTypes = {
    table: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
    }))
}
export default Table;