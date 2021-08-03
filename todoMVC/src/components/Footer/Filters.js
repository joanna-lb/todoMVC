import React from "react";
import {FILTERS_TYPES} from "../../utils/constants";

const Filters = ({filterTypes, showContent}) => {

    const handleClick = (filterTypes) => {
        showContent(filterTypes)
    }

    return (
        <ul className='filters'>
            {Object.keys(FILTERS_TYPES).map((key) => (
                <li key={key}>
                    <a href={'#/'} className={filterTypes === key ? 'selected' : null}
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
