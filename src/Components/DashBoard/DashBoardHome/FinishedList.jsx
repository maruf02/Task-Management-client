import moment from "moment";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../useAxiosPublic/useAxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const FinishedList = () => {
  const [finisheds, setFinished] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const fetchData = async () => {
      const todoResponse = await axiosPublic.get(
        `/tasksheett/finished/${user.email}`
      );
      setFinished(todoResponse.data);
      setLoading(false);
    };
    fetchData();
  }, [axiosPublic, user.email]);

  const handledelete = async (todoID) => {
    const res = await axiosPublic.delete(`/tasksheet/${todoID}`);
    if (res.data.deletedCount) {
      const updatedTodos = finisheds.filter((todo) => todo._id !== todoID);
      setFinished(updatedTodos);
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
      {/* complete list */}
      <div className=" h-full rounded-lg">
        <div className=" border-b-4 py-5 text-center text-3xl text-green-600 font-bold">
          Finished Task
        </div>
        <div>
          {loading ? (
            <>
              <span className="loading loading-spinner text-accent text-4xl text-center"></span>
            </>
          ) : (
            <>
              {finisheds.map((todo) => (
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
                        <button className="bg-green-700 text-center rounded-lg font-semibold px-3">
                          Finished
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
      {/* complete list */}
    </div>
  );
};

export default FinishedList;
