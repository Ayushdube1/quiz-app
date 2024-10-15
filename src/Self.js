import React, { useRef, useState } from 'react'
import './Self.css'
import {data} from './assets/data' 

export default function Self() {
  let [index,setIndex] = useState(0);
  let [question,setQuestion] = useState(data[index]);
  let [lock,setLock] = useState(false);
  let [score,setScore] = useState(0);
  let [result,setResult] = useState(false);

  let option1= useRef(null);
  let option2= useRef(null);
  let option3= useRef(null);
  let option4= useRef(null);
  let option_array= [option1,option2,option3,option4];

  let checkAns =(e,ans)=>{
    if(lock===false){
      if(question.ans===ans){
        e.target.classList.add("correct");
        setLock(true);
        setScore(score+1);

      }
      else{
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans-1].current.classList.add("correct");
      }
    }
      
  }

  return (
    <div className ="container">
      <h1>Quiz App</h1>
      <hr/>
      <h2>{index+1}.{question.question}</h2>
      <ul>
        <li ref ={option1} onClick ={(e)=>{checkAns(e,1)}} >{question.option1}</li>
        <li ref ={option2} onClick ={(e)=>{checkAns(e,2)}}>{question.option2}</li>
        <li ref ={option3} onClick ={(e)=>{checkAns(e,3)}}>{question.option3}</li>
        <li ref ={option4} onClick ={(e)=>{checkAns(e,4)}}>{question.option4}</li>
      </ul>
      <button>Next</button>
      <div className="index">{index+1} of {data.length} questions.</div>
    </div>
  )
}
