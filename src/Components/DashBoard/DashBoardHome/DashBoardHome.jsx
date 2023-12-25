import React, { useEffect } from "react";
import ToDoList from "./ToDoList";
import OngoingList from "./OngoingList";
import FinishedList from "./FinishedList";
import AOS from "aos";

const DashBoardHome = () => {
  // const [todos, setTodo] = useState([]);
  // const [ongoings, setOngoing] = useState([]);
  // const [finisheds, setFinished] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const axiosPublic = useAxiosPublic();
  // // const [users, refetch] = useUserEmail();
  // const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const todoResponse = await axiosPublic.get(
  //     //   `/tasksheett/${users.email}/todo`
  //     // );
  //     // setTodo(todoResponse.data);

  //     const ongoingResponse = await axiosPublic.get(
  //       `/tasksheett/ongoing/${user.email}`
  //     );
  //     setOngoing(ongoingResponse.data);

  //     const finishedResponse = await axiosPublic.get(
  //       `/tasksheett/finished/${user.email}`
  //     );
  //     setFinished(finishedResponse.data);

  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [axiosPublic, user.email]);

  // const fetchTodoData = async () => {
  //   try {
  //     const todoResponse = await axiosPublic.get(
  //       `/tasksheett/${users.email}/todo`
  //     );
  //     setTodo(todoResponse.data);
  //   } catch (error) {
  //     console.error("Error fetching TODO data:", error);
  //   }
  // };
  //
  // const fetchOngoingData = async () => {
  //   try {
  //     const ongoingResponse = await axiosPublic.get(
  //       `/tasksheett/${users.email}/ongoing`
  //     );
  //     setOngoing(ongoingResponse.data);
  //   } catch (error) {
  //     console.error("Error fetching ongoing data:", error);
  //   }
  // };

  // const fetchFinishedData = async () => {
  //   try {
  //     const finishedResponse = await axiosPublic.get(
  //       `/tasksheett/${users.email}/finished`
  //     );
  //     setFinished(finishedResponse.data);
  //   } catch (error) {
  //     console.error("Error fetching finished data:", error);
  //   }
  // };

  // useEffect(() => {
  //   setLoading(true);
  //   fetchTodoData();
  //   fetchOngoingData();
  //   fetchFinishedData().then(() => {
  //     setLoading(false);
  //     refetch();
  //   });
  // }, [axiosPublic, users.email, refetch]);

  // const TodoCount = todos.filter((todo) => todo.Read === "new").length;

  // const handleRead = async (todoId) => {
  //   const res = await axiosPublic.put(`/tasksheet/${todoId}/read`);
  //   if (res.data.modifiedCount > 0) {
  //     const updatedTodos = todos.map((todo) =>
  //       todo._id === todoId ? { ...todo, Read: "old" } : todo
  //     );
  //     setTodo(updatedTodos);
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: "Mark As Read!!",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   }
  // };

  // const handleStart = async (todoID) => {
  //   const res = await axiosPublic.put(`/tasksheet/${todoID}/start`);
  //   if (res.data.modifiedCount > 0) {
  //     // setOngoing(res.data);
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: "Mark As Ongoing!!",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   }
  // };
  // const handleFinish = async (todoID) => {
  //   const res = await axiosPublic.put(`/tasksheet/${todoID}/ongoing`);
  //   if (res.data.modifiedCount > 0) {
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: "Mark As Finished!!",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //     refetch();
  //   }
  // };
  // const handledelete = async (todoID) => {
  //   const res = await axiosPublic.delete(`/tasksheet/${todoID}`);
  //   console.log(res);
  //   if (res.data.deletedCount) {
  //     Swal.fire({
  //       position: "top-end",
  //       icon: "success",
  //       title: "Data Deleted!!",
  //       showConfirmButton: false,
  //       timer: 1500,
  //     });
  //   }
  // };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="3000"
      className="container mx-auto"
    >
      <div className="flex flex-col gap-5 border h-fit w-full rounded-lg bg-gradient-to-r from-[#556b69] to-[#496b49]">
        <div className=" border-b-4 py-5 text-center text-4xl text-green-600 font-bold">
          All Task List
        </div>

        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 h-full ">
          {/* to-do list */}
          {/* <div className=" h-full rounded-lg">
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
                            <sup className="text-red-800">
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
          </div> */}
          <ToDoList></ToDoList>
          {/* to-do list */}
          {/* ongoing list */}
          {/* <div className=" h-full rounded-lg">
            <div className=" border-b-4 py-5 mb-5 text-center text-3xl text-green-600 font-bold">
              To-Do Task
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
                              deadline:{" "}
                              {moment(todo.date).format("DD MMM, YYYY")}
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
          </div> */}
          <OngoingList></OngoingList>
          {/* ongoing list */}
          {/* complete list */}
          {/* <div className=" h-full rounded-lg">
            <div className=" border-b-4 py-5 text-center text-3xl text-green-600 font-bold">
              To-Do Task
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
                              deadline:{" "}
                              {moment(todo.date).format("DD MMM, YYYY")}
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
          </div> */}
          <FinishedList></FinishedList>
          {/* complete list */}
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
