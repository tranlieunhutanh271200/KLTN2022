import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import GridCourseComponent from "../../components/grid-course/grid-course.component";
import { loadCustomize } from "../../redux/actions/Customize/customize.action";
import "./learn.css";

const LearnPage = () => {
  const { location } = useHistory();
  const temp = [
    {
      id: 1,
      title: "Math 1",
      cover: "this is the cover",
    },
    {
      id: 2,
      title: "Math 1",
      cover: "this is the cover",
    },
    {
      id: 3,
      title: "Math 1",
      cover: "this is the cover",
    },
    {
      id: 4,
      title: "Math 1",
      cover: "this is the cover",
    },
    {
      id: 5,
      title: "Math 1",
      cover: "this is the cover",
    },
  ];
  const [filter,setFilter] = useState(1);
  const [timeline, setTimeline] = useState([2021,2020,2019])
  const [selectedTimelines, setSelectedTimelines] = useState([timeline[0]]);
  const [courses, setCourse] = useState(temp)
  const filterCourses = () => {

  }
  useEffect(() => {
    filterCourses();
  },[selectedTimelines])

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCustomize("display: flex"));
  }, [filter])
  return (
    <div className="learning-page">
      <div className="learning-nav">
        <div className="course-filter">
          <select defaultValue={'1'} onChange={(e) => setFilter(parseInt(e.target.value))} name="type" id="type">
            <option value="1">
              Newest to oldest
            </option>
            <option value="2">
              Timeline
            </option>
          </select>
          {filter === 1 && <ul>
            <li>Current</li>
            <li>Old</li>
          </ul>}
          {
            filter === 2 && <ul>
              {timeline.map((year) => 
             <span key={year}> <li><input onChange={(e) => {if(e.target.checked) {setSelectedTimelines([...selectedTimelines, year])} else setSelectedTimelines([...selectedTimelines.filter(y => y != year)])}} defaultChecked={selectedTimelines.includes(year)} type='checkbox'></input> {year}</li></span>)}
            </ul>
          }
        </div>
      </div>
      <div className="learning-area">
        <GridCourseComponent
          courses={courses}
          moveTo={`${location.pathname}/{id}/detail`}
        ></GridCourseComponent>
      </div>
    </div>
  );
};

export default LearnPage;
