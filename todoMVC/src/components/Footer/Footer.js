import React from "react";
import {Filters} from "./Filters";
import {TodoCount} from "./TodoCount";
import './index.css'

const Footer = ({showContent, leftItemsCount, clearComplete, filterTypes, anyComplete}) => {
    const handleClearComplete = () => {
        clearComplete()
    }
    return (
        <footer className='footer'>
            <TodoCount leftItemsCount={leftItemsCount}/>
            <Filters filterTypes={filterTypes} showContent={showContent}/>
            <button className='clear-completed' hidden={anyComplete ? '' : 'hidden'} onClick={handleClearComplete}>
                Clear completed
            </button>
        </footer>
    )
}
export default Footer;