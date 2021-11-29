
import React from 'react'
import './App.css';
const Header=(props)=>{
  return (<div>
    <h1>{props.name}</h1>
  </div>)
}
const Content=(props)=>{
  console.log(props.content[0])
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
  console.log(props)
  return(
    <div>
      
    <p>{props.content[3].name}   {props.content[3].exercises}</p>
    </div>
  )
}
  


  const App = () => {
    
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
    
    
    
    </div>
    )
  }

export default App;
