import React, { useState } from 'react'
import Faq from './Faq'
import { faqData } from './data.js';


   
   export default function Home() {

    const [faq,setFaq] = useState(faqData);
    const [currentId, setCurrentId] = useState(faq[0].qno);


     return (
       <>
        <div className='head-part'>Faq Project</div>
        <div className='lines' id='row'>

          {
            faq.map((v,i) => {
              return(
                <Faq key={i} faqData ={ v } faqIndex = { i } 
                currentId = {currentId} setCurrentId = {setCurrentId}/>
              )
            })
          }

          
        </div>
       </>
     )
   }
 