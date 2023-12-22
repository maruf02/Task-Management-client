import React from "react";

const ViewTask = ({ work }) => {
  const { _id, name, email, category, hours, date, note } = work;
  return (
    <div>
      <div className="border p-3 rounded-lg my-5 hover:bg-lime-800">
        <div className="flex flex-col md:flex-row gap-6  py-2">
          <p className="text-3xl text-green-500 font-bold">Task Name: {name}</p>
          <p className="text-2xl text-blue-500 font-semibold pt-1">
            Priority: {category}
          </p>
        </div>
        <div>
          <p>Description: {note}</p>
        </div>
        <div className="flex flex-col md:flex-row gap-5 pt-1 text-white">
          <p>Submit Date: {date} </p>
          <p>Hours: {hours} </p>
        </div>

        <div className="flex flex-row gap-6 justify-end ">
          <Link to={`/dashBoard/taskUpdate/${email}/${_id}`}>
            <button className="btn btn-outline btn-accent p-2  ">Start</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
