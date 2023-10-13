import React,{useState} from 'react'
import './Questions.scss'
import newBornQuestions from '../../assets/doc/newBornQuestions.json'


function Questions({name, questionsData}){

    const [answers, setAnswers] = useState(new Array(9).fill(null));

    const handleAnswerChange = (questionIndex, answer) => {
      const newAnswers = [...answers];
      newAnswers[questionIndex] = answer;
      setAnswers(newAnswers);
      questionsData(answers)
      
      console.log("answers" +answers)
    };




    return(    <div>
        <h2>Let us know more about {name}</h2>
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className="question">
            <p className="questions__text">Question {i + 1}: {newBornQuestions[i]}</p>
            <label className="questions__text">
              <input
                type="radio"
                name={`question-${i}`}
                value="Yes"
                checked={answers[i] === 'Yes'}
                onChange={() => handleAnswerChange(i, 'Yes')}
              />
              Yes
            </label>
            <label className="questions__text">
              <input
                type="radio"
                name={`question-${i}`}
                value="No"
                checked={answers[i] === 'No'}
                onChange={() => handleAnswerChange(i, 'No')}
              />
              No
            </label>
          </div>
        ))
        }
        {/* <div className="summary">
          <h3>Summary {answers}</h3>
          
          {/* {answers.map((answer, i) => (
            <p key={i}>
              Question {i + 1}: {answer || 'Not answered'}
            </p>
          ))} */}
        {/* </div>  */}
      </div>)

}

export default Questions