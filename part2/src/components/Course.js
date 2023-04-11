const Course = (props) => {
    const courses = props.courses
    console.log(courses);
    return(
      <>
        <h1>Web development curriculum</h1>
        {courses.map(course => {
          return (
            <div key={course.id}>
              <h2 key={course.id}>{course.name}</h2>
              {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
              <h4 key={course.id+2}>total of {course.parts.reduce((result, part) => result+part.exercises, 0)} exercises</h4>
            </div>
          )})}
      </>
    )
  }

export default Course;