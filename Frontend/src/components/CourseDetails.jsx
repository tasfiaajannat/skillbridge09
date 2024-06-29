/*import React from 'react';
import { useParams } from 'react-router-dom';
import content from './content.json'; // Assuming content.json is in the same directory

const CourseDetails = () => {
  const { id } = useParams();
  const course = content.find(course => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="course-details">
      <img src={course.image} alt={course.name} />
      <h1>{course.name}</h1>
      <h2>{course.title}</h2>
      <p>Price: {course.price === 0 ? 'Free' : `$${course.price}`}</p>
      <p>Category: {course.catagory}</p>
      <h3>Topics:</h3>
      <ul>
        {course.topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
*/