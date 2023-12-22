import React from "react";
import ViewTask from "./ViewTask";

const DashBoardHome = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5 border h-full w-full rounded-lg bg-gradient-to-r from-[#556b69] to-[#496b49]">
        {/* add submit task  */}
        <div className="border w-full lg:w-1/3 h-full flex flex-col gap-5">
          <div className=" border-b-4 py-5 text-center text-4xl text-green-600 font-bold">
            Submit Your Task
          </div>
          <div className=" border  py-5 text-center text-4xl text-green-600 font-bold">
            <div className="flex flex-col lg:flex-row gap-10 w-full h-full rounded-lg p-4 bg-gradient-to-r from-[#556b69] to-[#496b49]">
              {/* jobb add form */}
              <div></div>
              {/* jobb add form */}
            </div>
          </div>
        </div>
        {/* add submit task  */}
        {/* show submitted task task */}

        {/* show submitted task task */}
        {/* show submitted task task */}
        <div className="overflow-x-auto w-full hidden lg:block ">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Category</th>
                <th>Hours</th>
                <th>Submitted Date</th>
              </tr>
            </thead>
            <tbody>
              {reversedWorkSheet.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.category}</td>
                  <td>{user.hours}</td>
                  <td>{user.date}</td>
                  <td>
                    <button
                      onClick={() => handleDetails(user)}
                      className="btn bg-green-500 text-white"
                    ></button>
                  </td>
                  <td>
                    <Link
                      to={`/dashBoard/taskUpdate/${user.email}/${user._id}`}
                    >
                      <button className="btn btn-outline btn-accent p-2  ">
                        Start
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* show submitted task task */}
        <div className="border w-full lg:w-2/3 h-full px-5 lg:hidden ">
          <div className=" border-b-4 py-5 text-center text-4xl text-green-600 font-bold">
            All Submitted Task
          </div>
          {reversedWorkSheet.map((work) => (
            <ViewTask key={work._id} work={work}></ViewTask>
          ))}
        </div>
        {/* show submitted task task */}
      </div>
    </div>
  );
};

export default DashBoardHome;
