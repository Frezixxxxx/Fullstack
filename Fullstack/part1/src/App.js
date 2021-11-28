
import React from 'react'
import './App.css';
const Header=(props)=>{
  return (<div>
    <h1>{props.name}</h1>
  </div>)
}
const Content=(props)=>{
  return(
    <div>
      <Part name={props.name[0]} number={props.number[0]}/>
      <Part name={props.name[1]} number={props.number[1]}/>
      <Part name={props.name[2]} number={props.number[2]}/>
    </div>
  )
}
const Part=(props)=>{
  return(
    <div>
      <p>{props.name} {props.number}</p>
    </div>
  )
}
const Total=(props)=>{
  return(
    <div>
<p>{props.name} {props.number}</p>
    </div>
  )
}
  


  const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
    
    return(
    <div>
      <Header name={course} />
      <Content name={[part1,part2,part3]} number={[exercises1,exercises2,exercises3]} />
      <Total name="Number of exercises " number={exercises1+exercises2+exercises3}/>
    
    
    
    </div>
    )
  }

export default App;
