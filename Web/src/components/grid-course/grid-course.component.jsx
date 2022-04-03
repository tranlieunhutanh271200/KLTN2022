import { useRouteMatch } from "react-router-dom";
import { Link } from "react-router-dom";
import "./grid-course.css";
const courseInit = {
  id: 0,
  title: "",
  cover: "",
};
const GridCourseComponent = ({ courses = [courseInit], moveTo = "#" }) => {
  return (
    <div className="courses_component">
      {courses.map((course) => (
        <Link
          to={moveTo.replace("{id}", course.id)}
          key={course.id}
          className="course"
        >
          <div className="body">
            <div className="course_title">
              <h3>{course.title}</h3>
            </div>
            <div className="course_body">
              <p>{course.cover}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default GridCourseComponent;
