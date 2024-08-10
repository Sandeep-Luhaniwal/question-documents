import React from 'react'
import { QUESTION_ANSWER_LIST } from '../utils/helper'
import SubHeading from './common/SubHeading'
import Paragraph from './common/Paragraph'

const Document = () => {
    return (
        <div className='container mx-auto px-4'>
            <h1 className='text-4xl lg:text-5xl text-center py-6 font-bold'>Web Development Question</h1>
            {QUESTION_ANSWER_LIST.map((obj, i) => {
                return (
                    <div>
                        <SubHeading headingtext={`Q:- ${i + 1} ${obj.title}`} />
                        <Paragraph className={"mb-4"} paragraphtext={`Ans :- ${obj.description}`} />
                    </div>
                )
            })}
        </div>
    )
}

export default Document
