import React, { useState } from 'react';
import './faq.css'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';

function FAQItem(props) {
  const [isAnswerVisible, setAnswerVisible] = useState(false);
  

  const toggleAnswerVisibility = () => {
    setAnswerVisible(!isAnswerVisible);
  };

  return (
  
 
                <div className="question-content" key={props.id} onClick={toggleAnswerVisibility}>
                        <div className="questionnaire" >
                            <h5 className="question" > {props.question} </h5>
                            {isAnswerVisible ? (<FaChevronUp onClick={toggleAnswerVisibility} />) : (<FaChevronDown onClick={toggleAnswerVisibility} />)}
                        </div>
                        {isAnswerVisible && ( <p className="answer">{props.answer}</p> )}
                </div>



  
  );
}

export default FAQItem;
