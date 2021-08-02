import React from "react";
import {FILTERS_TYPES} from "../../utils/constants";

const Filters = ({currentContent, showContent}) => {

    const handleClick = (current) => {
        showContent(current)
    }

    return (
        <ul className='filters'>
            {Object.keys(FILTERS_TYPES).map((key) => (
                <li key={key}>
                    <a href={'#/'} className={currentContent === key ? 'selected' : null}
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
{/*<li><a href='#/all' className={currentContent === 'All' ? 'selected' : null}*/}
{/*       onClick={() => handleClick('All')}>All</a></li>*/}
{/*<li><a href='#/active' className={currentContent === 'Active' ? 'selected' : null}*/}
{/*       onClick={() => handleClick('Active')}>Active</a></li>*/}
{/*<li><a href='#/complete' className={currentContent === 'Complete' ? 'selected' : null}*/}
{/*       onClick={() => handleClick('Complete')}>Completed </a></li>*/}