import moment from "moment";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useUserEmail from "../../useUserEmail";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosPublic from "../../useAxiosPublic/useAxiosPublic";

const AddTask = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [users, refetch] = useUserEmail();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    const task = {
      name: data.name,
      email: users.email,
      date: selectedDate ? selectedDate.toISOString() : null,
      priority: data.category,
      desc: data.desc,
    };
    console.log(task);

    axiosPublic.post("/tasksheet", task).then((res) => {
      if (res.data.insertedId) {
        reset();
        setSelectedDate(null);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to your Worksheet`,
          showConfirmButton: false,
          timer: 2500,
        });

        refetch();
      }
    });
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <div className="container mx-auto h-full w-full rounded-lg bg-gradient-to-r from-[#556b69] to-[#496b49]">
        {/* add submit task  */}
        <div className="container mx-auto border w-full h-full ">
          <div className="container mx-auto border-b-4 py-5 text-center text-4xl text-green-600 font-bold">
            Add Your Task
          </div>
          <div className=" container mx-auto border  py-5 text-center text-4xl text-green-600 font-bold">
            <div className=" flex flex-col  w-full lg:w-2/3 h-full rounded-lg p-4 bg-gradient-to-r from-[#556b69] to-[#496b49]">
              {/* jobb add form */}
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full my-6">
                    <label className="label">
                      <span className="label-text text-white">Task Name*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Task Name"
                      {...register("name", { required: true })}
                      required
                      className="input input-bordered  w-full input-accent text-white bg-transparent"
                    />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text text-white bg-transparent ">
                        Deadline:
                      </span>
                    </label>
                    <ReactDatePicker
                      name="date"
                      className="w-full text-2xl border rounded-lg text-white bg-transparent input-accent"
                      placeholderText="Select a date"
                      required={!selectedDate}
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="MMMM d, yyyy"
                      minDate={moment().toDate()}
                    />
                  </div>
                  <div className="flex gap-6">
                    <div className="form-control w-full my-6">
                      <label className="label">
                        <span className="label-text text-white">Priority*</span>
                      </label>
                      <select
                        defaultValue="default"
                        {...register("category", { required: true })}
                        className="select select-bordered w-full text-white bg-green-800 input-accent"
                      >
                        <option disabled value="default">
                          Select a Task Priority
                        </option>
                        <option value="Low">Low</option>
                        <option value="Moderate">Moderate</option>
                        <option value="High">High</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-white">
                        Task Description:
                      </span>
                    </label>
                    <textarea
                      {...register("desc")}
                      className="textarea textarea-bordered h-24 text-white bg-transparent textarea-accent"
                      placeholder="Description"
                    ></textarea>
                  </div>

                  <button className="btn btn-accent mt-5">Add Task</button>
                </form>
              </div>
              {/* jobb add form */}
            </div>
          </div>
        </div>
        {/* add submit task  */}
      </div>
    </div>
  );
};

export default AddTask;
