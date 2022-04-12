import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import "./jira.css";
function JiraPage() {
  const simulateData = () => {
    return [...Array(5).keys()].map((val) => {
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

  const [todo,setTodo] = useState([
    {
      id: 0,
      title: 'Dev front end',
      description: 'Dev front end',
      status: '70%',
      start: '2022-04-03'
    },
    {
      id: 1,
      title: 'Dev front end 2',
      description: 'Dev front end',
      status: '70%',
      start: '2022-04-03'
    }
  ]);
  const [process,setProcess] = useState([]);
  const [done,, setDone] = useState([]);
  return (
    <>
      <h2 className="text-center">Re-schedule Your schedule</h2>
      <div className="jira-page">
        <div className="drop">
          <h2>To do</h2>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="todo">
              {(dropProvided) => (
                <ul
                  className="drag-zone"
                  {...dropProvided.droppableProps}
                  ref={dropProvided.innerRef}
                >
                  {todo.map((subject) => (
                    <Draggable
                      key={subject.id}
                      draggableId={subject.title}
                      index={subject.id}
                    >
                      {(provided) => (
                        <li
                          className="noselect task"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          {subject.title}
                        </li>
                      )}
                    </Draggable>
                  ))}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="drop">
          <h2>Process</h2>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="process">
              {(dropProvided) => (
                <ul
                  className="drag-zone"
                  {...dropProvided.droppableProps}
                  ref={dropProvided.innerRef}
                >
                  {process.map((subject) => (
                    <Draggable
                      key={subject.Id}
                      draggableId={subject.Title}
                      index={subject.Id}
                    >
                      {(provided) => (
                        <li
                          className="noselect"
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
          <h2>Done</h2>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="process">
              {(dropProvided) => (
                <ul
                  className="drag-zone"
                  {...dropProvided.droppableProps}
                  ref={dropProvided.innerRef}
                >
                  {process.map((subject) => (
                    <Draggable
                      key={subject.Id}
                      draggableId={subject.Title}
                      index={subject.Id}
                    >
                      {(provided) => (
                        <li
                          className="noselect"
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
    </>
  );
}

export default JiraPage;
