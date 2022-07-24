const Header = (props) => {
  return(
    <div>
      <h1> {props.name} </h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p> {props.part} {props.exercise} </p>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part = {props.p1} exercise = {props.e1}/>
      <Part part = {props.p2} exercise = {props.e2}/>
      <Part part = {props.p3} exercise = {props.e3}/>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p> Number of exercises {props.e1 + props.e2 + props.e3} </p>
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

  return (
    <div>
      <Header name = {course}/>
      <Content p1 = {part1} e1 = {exercises1}
               p2 = {part2} e2 = {exercises2}
               p3 = {part3} e3 = {exercises3}/>
      <Total e1 = {exercises1} e2 = {exercises2} e3 = {exercises3}/>
    </div>
  )
}

export default App
