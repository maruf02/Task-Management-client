import moment from "moment";
import React from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../useAxiosPublic/useAxiosPublic";
import Swal from "sweetalert2";

const UpdateTask = () => {
  const task = useLoaderData();
  const { _id, name, date, priority, desc } = task;
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const task = {
      desc: data.desc,
    };
    // console.log(task);

    axiosPublic.put(`/tasksheet/${_id}`, task).then((res) => {
      //   console.log(res.data);
      if (res.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Update succesfully`,
          showConfirmButton: false,
          timer: 2500,
        });
      }
      navigate("/dashboard/dashHome");
    });
  };
  return (
    <div>
      <div className="container mx-auto h-full w-full rounded-lg bg-gradient-to-r from-[#556b69] to-[#496b49]">
        {/* add submit task  */}
        <div className="container mx-auto  w-full h-full ">
          <div className="container mx-auto -b-4 py-5 text-center text-4xl text-green-600 font-bold">
            Add Your Task
          </div>
          <div className=" container mx-auto   py-5 text-center text-4xl text-green-600 font-bold">
            <div className="container mx-auto flex flex-col  w-full lg:w-2/3 h-full rounded-lg p-4 bg-gradient-to-r from-[#556b69] to-[#496b49]">
              {/* jobb add form */}
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full my-6">
                    <label className="label">
                      <span className="label-text text-white">Task Title*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Task Name"
                      defaultValue={name}
                      readOnly
                      className="input input-bordered  w-full input-accent text-white bg-transparent"
                    />
                  </div>
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text text-white bg-transparent ">
                        Deadline:
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Task Name"
                      defaultValue={moment(date).format("DD MMM,YY")}
                      readOnly
                      className="input input-bordered  w-full input-accent text-white bg-transparent"
                    />
                  </div>
                  <div className="flex gap-6">
                    <div className="form-control w-full my-6">
                      <label className="label">
                        <span className="label-text text-white">Priority*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Task Name"
                        defaultValue={priority}
                        readOnly
                        className="input input-bordered  w-full input-accent text-white bg-transparent"
                      />
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
                      defaultValue={desc}
                      className="textarea textarea-bordered h-24 text-white bg-transparent textarea-accent"
                      placeholder="Description"
                    ></textarea>
                  </div>

                  <button className="btn btn-accent mt-5">
                    Update Description
                  </button>
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

export default UpdateTask;
