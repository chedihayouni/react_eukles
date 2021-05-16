import React, { useEffect, useState } from 'react';
import { useTodos } from '../../store/hooks/todo.hooks';
import Formsy from 'formsy-react';
import TextFieldFormsy from '../../common/FormsyTextField';
import EditDialog from './EditDialog';
import moment from "moment";

const Dashboard = () => {

  const { loadPendingToDos, todos, error, addToDo, loadToDo, todo, finishToDo, editToDo } = useTodos();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    loadPendingToDos();
  }, []);


  let areaForm;
  const handleSubmit = (form) => {
    addToDo(form);
    areaForm.reset();
  };

  const handleEdit = (form) => {
    editToDo(form, todo.id);
    setIsModalOpen(false);
  };

  return (
    <div className="container py-5">
      <div className="add-todos mb-5">
        <h1 className="text-center mb-4">Add a To Do</h1>
        <Formsy
          method="post"
          onSubmit={handleSubmit}
          ref={(form) => (areaForm = form)}
        >
          <div className="form-group">
            <label htmlFor="addTodo">Add a New To Do</label>
            <div className="d-flex">
              <TextFieldFormsy
                id="title"
                className="form-control mr-3"
                type="text"
                name="title"
                label="Title"
                validations={{
                  minLength: 3,
                }}
                validationErrors={{
                  minLength: "At least 3 characters",
                }}
                variant="outlined"
                required
              />
              <TextFieldFormsy
                id="description"
                className="form-control mr-3"
                type="text"
                name="description"
                label="Description"
                validations={{
                  minLength: 3,
                }}
                validationErrors={{
                  minLength: "At least 3 characters",
                }}
                variant="outlined"
                required
              />
              <TextFieldFormsy
                id="date"
                className="form-control mr-3"
                type="date"
                name="date"
                variant="outlined"
                label="Date"
                InputLabelProps={{ shrink: true }}
                required
              />
              <button type="submit" className="btn btn-primary mt-2">
                Add
                </button>
            </div>
          </div>
        </Formsy>
      </div>

      {error && (
        <div className="alert alert-warning" role="alert">
          {error}
        </div>
      )}

      <div className="todos">
        <h1 className="text-center mb-4">Open To Dos</h1>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            {todos.map((element) => (
              <tr key={element.id}>
                <td>{element.title}</td>
                <td>{element.description}</td>
                <td>{element.status}</td>
                <td>{moment(element.date).format('YYYY-MM-DD')}</td>
                <td>
                  <button
                    className="btn btn-danger mr-3"
                    onClick={() => finishToDo(element.id)}
                  >
                    Close
                  </button>
                  <button className="btn btn-primary mr-3" onClick={() => { loadToDo(element.id); setIsModalOpen(!isModalOpen); }}>Edit</button>
                  <EditDialog
                    todo={todo}
                    handleEdit={handleEdit}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}


export default Dashboard;
