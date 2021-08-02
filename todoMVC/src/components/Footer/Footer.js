import React, {useEffect} from "react";
import {Filters} from "./Filters";
import {TodoCount} from "./TodoCount";

const Footer = ({showContent, leftItemsCount, clearComplete, currentContent, anyComplete}) => {
    useEffect(() => {
    }, [anyComplete]);

    const handleClearComplete = () => {
        clearComplete()
    }
    return (
        <footer className='footer'>
            <TodoCount leftItemsCount={leftItemsCount}/>
            <Filters currentContent={currentContent} showContent={showContent}/>
            <button className='clear-completed' hidden={anyComplete ? '' : 'hidden'} onClick={handleClearComplete}>
                Clear completed
            </button>
        </footer>
    )
}
export default Footer;