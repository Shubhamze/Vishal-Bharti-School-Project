// src/components/Courses.jsx
import React from 'react';

const Courses = () => {
  return (
    <section id="courses" className="courses">
      <h2>Our Courses</h2>
      <div className="course-cards">

        <div className="course-card">
          <img className='course-img' src='' alt='course-image'></img>
          <h3>Science</h3>
          <p>Physics, Chemistry, Biology</p>
        </div>

        <div className="course-card">
        <img className='course-img' src='' alt='course-image'></img>
          <h3>Mathematics</h3>
          <p>Algebra, Geometry, Calculus</p>
        </div>

        <div className="course-card">
        <img className='course-img' src='' alt='course-image'></img>
          <h3>Literature</h3>
          <p>English Literature, History</p>
        </div>

      </div>
    </section>
  );
};

export default Courses;
