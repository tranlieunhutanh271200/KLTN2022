import { useState } from "react";
import "./calendar.css";
const CalendarComponent = ({ isSelectRangeEnable = true ,selectRange, selectDay }) => {
  var dt = new Date();
  var month = dt.getMonth();
  var year = dt.getFullYear();
  const [currentMonth, setCurrentMonth] = useState(month + 1);
  const [range, setRange] = useState([]);
  const [isPress, setIspress] = useState(false);

  var daysInMonth = new Date(year, currentMonth, 0).getDate();
  const [day,setDay] = useState(dt.getDate());
  const monthChange = (isIncrease) => {
    let thisMonth = currentMonth;
    if (isIncrease) {
      setCurrentMonth(currentMonth < 12 ? (thisMonth += 1) : 1);
    } else {
      setCurrentMonth(currentMonth > 1 ? (thisMonth -= 1) : 12);
    }
  };
  const fillRange = (start, stop) => {
    let arr = [];
    if (start < stop) {
      for (let i = start + 1; i <= stop; i++) {
        arr.push(i);
      }
    } else {
      for (let i = stop; i < start; i++) {
        arr.push(i);
      }
    }
    return arr;
  };
  const reset = () => {
    setCurrentMonth(month + 1);
  };
  const select = (index) => {
    setIspress(true);
    if (range.length === 0) {
      setRange([...range, index]);
    } else {
      setRange([index]);
    }
  };
  const move = (index) => {
    if (isPress) {
      let temp = fillRange(range[0], index);
      setRange([...range, ...temp]);
    }
  };
  const release = (index) => {
    setRange([...range, index]);
    setIspress(false);
  };
  const submit = (e) => {
    e.preventDefault();
    if (range.length > 1) {
      if (selectRange) {
        selectRange(range);
      }
    } else {
      if (selectDay) {
        selectDay(range[0]);
      }
    }
  };
  return (
    <div className="calendar_group">
      <div className="indicator">
        <div>
          <ion-icon
            onClick={() => monthChange(false)}
            name="chevron-back-outline"
          ></ion-icon>
        </div>
        <label onClick={reset}>
          {currentMonth} / {year}
        </label>
        <div>
          <ion-icon
            onClick={() => monthChange(true)}
            name="chevron-forward-outline"
          ></ion-icon>
        </div>
      </div>
      <div className="days">
        {[...Array(daysInMonth).keys()].map((val) => 
         isSelectRangeEnable ? (<div
            key={val}
            onMouseDown={() => select(val + 1)}
            onMouseEnter={() => move(val + 1)}
            onMouseUp={() => release(val + 1)}
            className={`day select ${
              val + 1 === day && month + 1 === currentMonth ? "today" : ""
            } ${
              range.find((r) => r === val + 1) !== undefined ? "inrange" : ""
            }`}
          >
            {val + 1}
          </div>) :  (<div
            key={val}
            onClick={() => {setDay(val + 1); selectDay(val+1)}}
            className={`day ${
              val + 1 === day && month + 1 === currentMonth ? "today" : ""
            } ${
              range.find((r) => r === val + 1) !== undefined ? "inrange" : ""
            }`}
          >
            {val + 1}
          </div>)
        )}
      </div>
      {isSelectRangeEnable && <div className="footer">
        <button onClick={(e) => submit(e)}>Select</button>
      </div>}
    </div>
  );
};

export default CalendarComponent;
