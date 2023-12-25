import React, { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import moment from "moment";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const ToDoList = () => {
  const [todos, setTodo] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const TodoCount = todos.filter((todo) => todo.Read === "new").length;

  useEffect(() => {
    const fetchData = async () => {
      const todoResponse = await axiosPublic.get(
        `/tasksheett/todo/${user.email}`
      );
      setTodo(todoResponse.data);
      setLoading(false);
    };
    fetchData();
  }, [axiosPublic, user.email]);
  //   Swal.fire(`Available ${TodoCount}`);
  //   console.log(TodoCount);
  useEffect(() => {
    if (TodoCount > 0) {
      if (!loading) {
        Swal.fire(`Available New Task, New: ${TodoCount}`);
      }
    } else {
      if (!loading) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "No New Task!!",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  }, [TodoCount, loading]);

  const handleRead = async (todoId) => {
    const res = await axiosPublic.put(`/tasksheet/${todoId}/read`);
    if (res.data.modifiedCount > 0) {
      const updatedTodos = todos.map((todo) =>
        todo._id === todoId ? { ...todo, Read: "old" } : todo
      );
      setTodo(updatedTodos);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Mark As Read!!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleStart = async (todoID) => {
    const res = await axiosPublic.put(`/tasksheet/${todoID}/start`);
    if (res.data.modifiedCount > 0) {
      const updatedTodos = todos.filter((todo) => todo._id !== todoID);
      setTodo(updatedTodos);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Mark As Ongoing!!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  const handleEdit = async (todoID) => {
    const res = await axiosPublic.get(`/tasksheet/${todoID}`);
    // console.log(res.data);
    Swal.fire({
      title: "Update Task details?",
      html: `
      <label for="description" class="swal2-input-label">Description</label>
      <textarea id="description" class="swal2-textarea">${res.data.desc}</textarea>
    `,
      // icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: `"Your file has been deleted.",`,
          icon: "success",
        });
      }
    });
  };

  const handledelete = async (todoID) => {
    const res = await axiosPublic.delete(`/tasksheet/${todoID}`);
    if (res.data.deletedCount) {
      const updatedTodos = todos.filter((todo) => todo._id !== todoID);
      setTodo(updatedTodos);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Data Deleted!!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      {/* to-do list */}
      <div className=" h-full rounded-lg">
        <div className=" border-b-4 py-5 mb-5 text-center text-3xl text-green-600 font-bold">
          To-Do Task
          {TodoCount > 0 && (
            <button className="text-xl text-blue-800 bg-green-500 rounded-3xl px-2 mx-3">
              New({TodoCount})
            </button>
          )}
        </div>
        <div>
          {loading ? (
            <>
              <span className="loading loading-spinner text-accent text-4xl text-center"></span>
            </>
          ) : (
            <>
              {todos.map((todo) => (
                <div key={todo._id}>
                  <div className="card w-full my-2 bg-primary text-primary-content">
                    <div className="card-body">
                      <h2 className="card-title">
                        {todo.name}
                        <sup className="text-red-800s">
                          {todo.Read === "new" && (
                            <button onClick={() => handleRead(todo._id)}>
                              {todo.Read}
                            </button>
                          )}
                        </sup>
                      </h2>
                      <p>Priority: {todo.priority}</p>
                      <p>Deatils: {todo.desc}</p>

                      <hr />
                      <div className="card-actions justify-end">
                        <p>
                          deadline:
                          {moment(todo.date).format("DD MMM,YY")}
                        </p>
                        <button
                          onClick={() => handleStart(todo._id)}
                          className="bg-green-700 text-center rounded-lg font-semibold px-3"
                        >
                          start?
                        </button>
                        <Link to={`/dashboard/updateTask/${todo._id}`}>
                          <button className="bg-green-700 text-center rounded-lg font-semibold px-3">
                            Edit?
                          </button>
                        </Link>
                        <button
                          onClick={() => handledelete(todo._id)}
                          className="bg-red-700 text-center rounded-lg font-semibold px-3"
                        >
                          delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
      {/* to-do list */}
    </div>
  );
};

export default ToDoList;
