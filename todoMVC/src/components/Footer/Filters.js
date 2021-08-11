import React, {useState} from "react";
import {FILTERS_TYPES} from "../../utils/constants";
import {setFilterTypes} from "../../redux/action";
import {connect} from "react-redux";


const Filters = ({filterType, setFilterTypes}) => {

    const handleClick = (filterTypes) => {
        setFilterTypes(filterTypes)
    }

    return (
        <ul className='filters'>
            {Object.keys(FILTERS_TYPES).map((key) => (
                <li key={key}>
                    <a href={'#/'} className={filterType === key ? 'selected' : null}
                       onClick={() => handleClick(key)}
                    >
                        {FILTERS_TYPES[key]}
                    </a>
                </li>
            ))}
        </ul>
    )
}
export default connect(
    state => ({todos: state.todos, filterType: state.filterType}),
    {setFilterTypes}
)(Filters);
