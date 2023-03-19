import Card from './Card';

const Cards = ({ courses }) => {
  let allCourses = [];

  // returns you a list of all courses from API response
  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses = [...allCourses, course];
      })
    })
    return allCourses;
  }

  return (
    <div>
      {
        getCourses().map((course) => {
          return <Card {...course} />
        })
      }
    </div>
  )
}

export default Cards