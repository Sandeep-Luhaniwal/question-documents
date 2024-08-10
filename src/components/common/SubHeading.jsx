import React from 'react'
const SubHeading = ({
    headingtext,
    className,
    center,
    right,
    white,
}) => {
    return (
        <h2
            className={`${className && className} ${center ? 'mx-auto text-center' : right ? 'ml-auto mr-0 text-right' : 'ml-0 mr-auto text-left'} ${white ? 'text-white' : 'text-black'} text-2xl md:text-3xl font-semibold `}
        >
            {headingtext}
        </h2>
    )
}

export default SubHeading
