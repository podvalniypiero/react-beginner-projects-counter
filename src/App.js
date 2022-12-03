import './index.scss';
import React from 'react';

const questions = [
  {
    title: 'React - is ... ?',
    variants: ['a Library', 'a Framework', 'an Application', 'a Philosophy', 'a special template made for JS developers'],
    correct: 0,
  },
  {
    title: 'React Component - is ... ',
    variants: ['an Application', 'a part of page or application –––– an independent and reusable bits of code', 'a special Library', 'a kind of magic'],
    correct: 1,
  },

  {
    title: 'What is JSX?',
    variants: [
      `That's a simple HTML`,
      'JSX is a kind of js functions',
      'JSX is a damaged HTML file',
      'JSX is an extension of the JavaScript language which provides a way to structure component rendering using syntax similar to HTML',
      'JSX is an extension of the JavaScript language which provides a way to use React library properly'
    ],
    correct: 3,
  },
  {
    title: 'Why React Hooks are used?',
    variants: [
      `React Hooks allow you to assemble your project properly and quickly`,
      'With Hooks, you can extract stateful logic from a component so it can be tested independently and reused ',
      'React Hooks make it easy to share components from one project to another'
      
    ],
    correct: 1,
  }
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2> You answered {correct} question(s) out of {questions.length} correctly</h2>
      
      <a href='/'><button>Try again</button></a>
    </div>
  );
}

function Game({step,question,onClickVariant}) {
  const percentStep = Math.round((step/questions.length)*100);
  console.log(percentStep);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentStep}%` }} className="progress__inner"></div> 
      </div>
      <h1>{question.title}</h1>
      <ul>
        {
          question.variants.map((text,index) => 
            (
            <li onClick={() => onClickVariant(index)} key={text}>
              {text}
            </li>
            ))
        }
      </ul>
    </>
  );
}

function App() {
  const[step,setStep] = React.useState(0);
  const question = questions[step];

  const [correct, setCorrect] = React.useState(0);

  const onClickVariant = (index) => {
    console.log(step,index);
    setStep(step+1);

    if (index === question.correct) {
      setCorrect(correct+1);
    }
  }
  return (
    
    <div className="App">
      {
        step !== questions.length ? (<Game step={step} question={question} onClickVariant={onClickVariant}/>) : (<Result correct={correct} />) 
      }
      
    </div>
  );
}

export default App;
