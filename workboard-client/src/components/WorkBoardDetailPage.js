import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from 'axios';

function WorkBoardDetailPage({ match }) {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    axios.get(`/api/workboards/${match.params.id}`).then(res => setTasks(res.data.tasks));
  }, [match.params.id]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const newTasks = [...tasks];
    const [movedTask] = newTasks.splice(result.source.index, 1);
    movedTask.status = result.destination.droppableId;
    newTasks.splice(result.destination.index, 0, movedTask);
    setTasks(newTasks);

    axios.put(`/api/tasks/${movedTask.id}`, movedTask);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {['ToDo', 'In Progress', 'Completed'].map(status => (
        <Droppable droppableId={status} key={status}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h2>{status}</h2>
              {tasks.filter(task => task.status === status).map((task, index) => (
                <Draggable key={task.id} draggableId={String(task.id)} index={index}>
                  {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      {task.title}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
}

export default WorkBoardDetailPage;
