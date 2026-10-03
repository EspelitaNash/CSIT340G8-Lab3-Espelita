const App = () => {
  const course = 'CSIT 340 - Information Technology Elective 2'
  const part1 = 'Application Development'
  const exercises1 = 3
  const part2 = 'Project Management'
  const exercises2 = 3
  const part3 = 'Industry electives'
  const exercises3 = 3

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1} {exercises1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App