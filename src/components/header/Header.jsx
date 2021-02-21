import React from 'react'
import PropTypes from 'prop-types'
import { GitHub } from 'react-feather';

const HEADER_TYPES = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
/**
 * 
 * @param {*} props Generic Component to render Header tags
 */
const Header = (props) => {
    const { HeaderType = HEADER_TYPES[2], headingTxt, customClass } = props;

    return (
        <>
            <span className='Logo'>
                <GitHub size={40} alt='GitHub' />
            </span>
            <HeaderType className={customClass}>{headingTxt}</HeaderType>
        </>
    )
}

Header.propTypes = {
    // HEADER_TYPES is the level of header
    HeaderType: PropTypes.oneOf(HEADER_TYPES),
    // Header content to be rendered
    headingTxt: PropTypes.string,
    //class for header tag
    customClass: PropTypes.string
}

export default Header