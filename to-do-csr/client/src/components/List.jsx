import React from "react";
import { Link } from "react-router-dom";

const List = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Sl no</th>
              <th>Task</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task._id}>
                <td>{index + 1}</td>
                <td>{task.task}</td>
                <td>
                  <Link to={`/task/${task._id}`}>
                    <button className="list-update">Update</button>
                  </Link>
                </td>
                <td>
                  <button className="delete" onClick={() => onDelete(task._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default List;
