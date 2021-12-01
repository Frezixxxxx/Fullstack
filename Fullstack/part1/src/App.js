
import React,{useState} from 'react'
import './App.css';
const Header=(props)=>{
  return (<div>
    <h1>{props.name}</h1>
  </div>)
}
const Hello=(props)=>{
  const name=props.name
  const age=props.age
  const bornYear=()=>new Date().getFullYear()-age
  console.log(bornYear())
  console.log(new Date().getFullYear())
  return(
    <div>
      <p>
        Hello {name}, you are {age} years old.
      </p>
      <p>
        So you are probably born in {bornYear()}
      </p>
    </div>
  )
}
const Content=(props)=>{
  
  return(
    <div>
      <Part name={props.content[0].name} exercises={props.content[0].exercises}/>
      <Part name={props.content[1].name} exercises={props.content[1].exercises}/>
      <Part name={props.content[2].name} exercises={props.content[2].exercises}/>
    </div>
  )
}
const Part=(props)=>{
  
  return(
    <div>
      <p>{props.name} {props.exercises}</p>
      
    </div>
  )
}
const Total=(props)=>{
 
  return(
    <div>
      
    <p>{props.content[3].name}   {props.content[3].exercises}</p>
    </div>
  )
}
  


  const App = () => {
    const[counter, setCounter]=useState(0)
    const handleClick=()=>{
      console.log('clicked')
      //setCounter(counter+1)
    }
    /*
    setTimeout(
      ()=>setCounter(counter+1),
      1000
    )
    */
    //console.log('rendering...'+{counter})
    return (
      <div>{counter}
      <button onClick={()=>setCounter(counter+1)}>
        plus
      </button>
      <button onClick={()=>setCounter(0)}>zero</button>
      </div>
    )
  }



/*
    const course={
      name: 'Half Stack application development',
      parts:[
      {
        name:'Fundamentals of React',
        exercises:10
      },{
        name:'Using props to pass data',
        exercises:7
      },{
        name:'State of a component',
        exercises:14
      },{
        name:'Number of exercises',
        exercises:31
      }
    ]
    }
    

    
    return(
    <div>
      <Header name={course.name} />
      <Content content={course.parts} />
      <Total content={course.parts}/>
      <Hello name="Josh" age={10*2}/>
    
    
    </div>
    )
  }
  */

export default App;
