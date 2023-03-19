import { useState } from 'react';

import Card from './Card';

const Cards = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      // returns you a list of all courses from API response
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses = [...allCourses, course];
        })
      })
      return allCourses;
    }
    else {
      // returns specific category data
      return courses[category];
    }

  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourses().map((course) => {
          return (
            <Card
              key={course.id}
              {...course}
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}
            />)
        })
      }
    </div>
  )
}

export default Cards