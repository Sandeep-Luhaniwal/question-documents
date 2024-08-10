import React from 'react'

const Paragraph = ({
    className,
    right,
    center,
    small,
    white,
    paragraphtext,
}) => {
    return (
        <p className={`${className && className} ${center ? 'mx-auto text-center' : right ? 'ml-auto mr-0 text-right' : 'ml-0 mr-auto text-left'} ${small ? 'text-sm md:text-base' : 'text-sm sm:text-base md:text-lg'} ${white ? 'text-white' : 'text-black'} font-normal`}
        >
            {paragraphtext}
        </p>
    )
}

export default Paragraph