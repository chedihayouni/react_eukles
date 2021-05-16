import React, { useEffect, useState } from 'react';
import { useTodos } from '../../store/hooks/todo.hooks';
import DeleteDialog from './DeleteDialog';
import moment from "moment";

const Archive = () => {

  const { loadDoneToDos, doneTodos, deleteToDo, openToDo } = useTodos();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    loadDoneToDos()
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Closed To Dos</h1>

      <table className="table">
        <tbody>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>date</th>
            <th>Action</th>
          </tr>
          {doneTodos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
              <td>{todo.status}</td>
              <td>{moment(todo.date).format('YYYY-MM-DD')}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-secondary mr-3"
                  onClick={() => openToDo(todo.id)}
                >
                  Open
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => { setIsOpen(!isOpen); }}
                >
                  Delete
                </button>
                <DeleteDialog
                  deleteToDo={deleteToDo}
                  setIsOpen={setIsOpen}
                  isOpen={isOpen}
                  todo={todo}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Archive;
