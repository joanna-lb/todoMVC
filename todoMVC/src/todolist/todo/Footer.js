import React, {useEffect} from "react";

const Footer = ({showContent, leftItemsCount, clearComplete, currentContent, anyComplete}) => {
    useEffect(() => {
    }, [anyComplete]);

    const handleClearComplete = () => {
        clearComplete()
    }
    const handleClick = (current) => {
        showContent(current)

    }
    return (
        <footer className='footer'>
            <span
                className='todo-count'>
                <strong>{leftItemsCount}</strong>
                <span> item</span>
                <span> left</span>
            </span>
            <ul className='filters'>
                <li><a href='#/all' className={currentContent === 'All' ? 'selected' : null}
                       onClick={() => handleClick('All')}>All</a></li>
                <li><a href='#/active' className={currentContent === 'Active' ? 'selected' : null}
                       onClick={() => handleClick('Active')}>Active</a></li>
                <li><a href='#/complete' className={currentContent === 'Complete' ? 'selected' : null}
                       onClick={() => handleClick('Complete')}>Completed </a></li>
            </ul>
            <button className='clear-completed' hidden={anyComplete ? '' : 'hidden'} onClick={handleClearComplete}>
                Clear completed
            </button>
        </footer>
    )
}
export default Footer;