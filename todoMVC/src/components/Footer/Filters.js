import React, {useEffect} from "react";
import {FILTERS_TYPES} from "../../utils/constants";
import {setFilterTypes} from "../../actions";
import {useDispatch, useSelector} from "react-redux";

const Filters = () => {
    const state = useSelector((state) => state.todoList)
    const dispatch = useDispatch()

    const handleClick = (filterTypes) => {
        setFilterTypes(dispatch, filterTypes)
    }

    return (
        <ul className='filters'>
            {Object.keys(FILTERS_TYPES).map((key) => (
                <li key={key}>
                    <a href={'#/'} className={state.filterType === key ? 'selected' : null}
                       onClick={() => handleClick(key)}
                    >
                        {FILTERS_TYPES[key]}
                    </a>
                </li>
            ))}
        </ul>
    )
}
export {Filters};
