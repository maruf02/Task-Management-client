import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";
import moment from "moment";

const OngoingList = ({ pongoings }) => {
  const [ongoings, setOngoing] = useState(pongoings);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      const todoResponse = await axiosPublic.get(
        `/tasksheett/ongoing/${user.email}`
      );
      setOngoing(todoResponse.data);
      setLoading(false);
    };
    fetchData();
  }, [axiosPublic, user.email]);

  const handleFinish = async (todoID) => {
    const res = await axiosPublic.put(`/tasksheet/${todoID}/ongoing`);
    if (res.data.modifiedCount > 0) {
      const updatedTodos = ongoings.filter((ongoing) => ongoing._id !== todoID);
      setOngoing(updatedTodos);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Mark As Finished!!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  const handledelete = async (todoID) => {
    const res = await axiosPublic.delete(`/tasksheet/${todoID}`);
    if (res.data.deletedCount) {
      const updatedTodos = ongoings.filter((todo) => todo._id !== todoID);
      setOngoing(updatedTodos);
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
      {/* ongoing list */}
      <div className=" h-full rounded-lg">
        <div className=" border-b-4 py-5 mb-5 text-center text-3xl text-green-600 font-bold">
          Ongoing Task
        </div>
        <div>
          {loading ? (
            <>
              <span className="loading loading-spinner text-accent text-4xl text-center"></span>
            </>
          ) : (
            <>
              {ongoings.map((todo) => (
                <div key={todo._id}>
                  <div className="card w-full my-2 bg-primary text-primary-content">
                    <div className="card-body">
                      <h2 className="card-title">{todo.name}</h2>
                      <p>Priority: {todo.priority}</p>
                      <p>Deatils: {todo.desc}</p>

                      <hr />
                      <div className="card-actions justify-end">
                        <p>
                          deadline: {moment(todo.date).format("DD MMM, YYYY")}
                        </p>
                        <button
                          onClick={() => handleFinish(todo._id)}
                          className="bg-green-700 text-center rounded-lg font-semibold px-3"
                        >
                          Finish?
                        </button>
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
      {/* ongoing list */}
    </div>
  );
};

export default OngoingList;
