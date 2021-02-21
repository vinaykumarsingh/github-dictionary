
import React from 'react'
import { Loader } from 'react-feather';

/**
 * Loading Component to show on pahe while API access 
 */
const Loading = () => {

    return (
        <div className='loadingContainer'>
            <Loader size={60} alt="loading..." />
        </div>
    )
}

export default Loading