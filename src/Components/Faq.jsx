import React from 'react'

export default function Faq({faqData, faqIndex,
     currentId, setCurrentId}) {

        const faqHandler =(qno) => {
            setCurrentId(qno);
            console.log(qno);
        }
  return (
    <>
         <div className='faq-part' id='column1'>   
             <h2 className='faqquestions' onClick={ () =>faqHandler(faqData.qno) }>{ faqIndex+1 }. {faqData.question} <span> { (currentId == faqData.qno) ?'-' : '+' } </span></h2>
             <p className={`${  (currentId == faqData.qno) ?'' : 'display' } `}> {faqData.answer}</p>
         </div>
    </>
  )
}
