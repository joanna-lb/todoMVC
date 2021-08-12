import React, {useState} from "react";
import {FILTERS_TYPES} from "../../utils/constants";
import {connect} from "react-redux";


const Filters = ({changeShowContent}) => {
    const[filterType,setFilterType]=useState('All')

    const handleClick = (filterType) => {
    changeShowContent(filterType)
        setFilterType(filterType)
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
    state => ({todos: state.todos})
)(Filters);
