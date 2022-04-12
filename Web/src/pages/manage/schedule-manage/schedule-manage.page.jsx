import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import "./schedule-manage.css";
function ScheduleManagePage() {
  const simulateData = () => {
    return [...Array(3).keys()].map((val) => {
      return {
        Id: val,
        Title: `Toan ${val}`,
      };
    });
  };
  const onDragStart = () => {
    /*...*/
  };
  const onDragUpdate = () => {
    /*...*/
  };
  const onDragEnd = (result) => {
    // the only one that is required
    // const items = Array.from(characters);
    // const [reorderedItem] = items.splice(result.source.index, 1);
    // items.splice(result.destination.index, 0, reorderedItem);

    // updateCharacters(items);
    console.log(result.source);
  };
  const [monday, setMonday] = useState([...simulateData()]);
  const [tuesday, setTuesDay] = useState([...simulateData()]);
  const [wednesday, setWednesday] = useState([...simulateData()]);
  const [thursday, setThursday] = useState([...simulateData()]);
  const [friday, setFriday] = useState([...simulateData()]);
  const [saturday, setSaturday] = useState([...simulateData()]);
  console.log(monday);
  return (
    <div className="schedule-manage">
      <div className="drop">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="monday">
            {(dropProvided) => (
              <ul
                className="drag-zone"
                {...dropProvided.droppableProps}
                ref={dropProvided.innerRef}
              >
                {monday.map((subject) => (
                  <Draggable
                    key={subject.Id}
                    draggableId={subject.Title}
                    index={subject.Id}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {subject.Title}
                      </li>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="drop">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tuesday">
            {(dropProvided) => (
              <ul
                className="drag-zone"
                {...dropProvided.droppableProps}
                ref={dropProvided.innerRef}
              >
                {tuesday.map((subject) => (
                  <Draggable
                    key={subject.Id}
                    draggableId={subject.Title}
                    index={subject.Id}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {subject.Title}
                      </li>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="drop">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tuesday">
            {(dropProvided) => (
              <ul
                className="drag-zone"
                {...dropProvided.droppableProps}
                ref={dropProvided.innerRef}
              >
                {tuesday.map((subject) => (
                  <Draggable
                    key={subject.Id}
                    draggableId={subject.Title}
                    index={subject.Id}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {subject.Title}
                      </li>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="drop">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tuesday">
            {(dropProvided) => (
              <ul
                className="drag-zone"
                {...dropProvided.droppableProps}
                ref={dropProvided.innerRef}
              >
                {tuesday.map((subject) => (
                  <Draggable
                    key={subject.Id}
                    draggableId={subject.Title}
                    index={subject.Id}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {subject.Title}
                      </li>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="drop">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tuesday">
            {(dropProvided) => (
              <ul
                className="drag-zone"
                {...dropProvided.droppableProps}
                ref={dropProvided.innerRef}
              >
                {tuesday.map((subject) => (
                  <Draggable
                    key={subject.Id}
                    draggableId={subject.Title}
                    index={subject.Id}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {subject.Title}
                      </li>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="drop">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="tuesday">
            {(dropProvided) => (
              <ul
                className="drag-zone"
                {...dropProvided.droppableProps}
                ref={dropProvided.innerRef}
              >
                {tuesday.map((subject) => (
                  <Draggable
                    key={subject.Id}
                    draggableId={subject.Title}
                    index={subject.Id}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {subject.Title}
                      </li>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <div className="drop">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="wednesday">
            {(dropProvided) => (
              <ul
                className="drag-zone"
                {...dropProvided.droppableProps}
                ref={dropProvided.innerRef}
              >
                {wednesday.map((subject) => (
                  <Draggable
                    key={subject.Id}
                    draggableId={subject.Title}
                    index={subject.Id}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {subject.Title}
                      </li>
                    )}
                  </Draggable>
                ))}
                {dropProvided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default ScheduleManagePage;
