import React from "react";

const BenifiteSection = () => {
  return (
    <div className="py-10">
      <div className="mx-auto  ">
        <p className="text-center text-base font-semibold leading-7 text-primary-500">
          Benefits:
        </p>
        <h2 className="text-center font-display text-3xl font-bold tracking-tight text-lime-500 md:text-4xl underline">
          Benefit to use this System
        </h2>
        <ul className="mt-16 grid grid-cols-1 gap-6 text-center text-black md:grid-cols-2 lg:grid-cols-4">
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530438/ddos-protection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">Developers:</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              <ul>
                <li>
                  Helps developers organize their tasks, projects, and deadlines
                  efficiently.
                </li>

                <li>
                  Enhances productivity by providing a centralized platform for
                  task tracking and management.
                </li>
                <li>
                  Facilitates collaboration among development teams by providing
                  a shared space for task assignments, updates, and discussions.
                </li>
              </ul>
            </p>
          </li>
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530442/port-detection.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">
              Corporate Entities:
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              <ul>
                <li>
                  Streamlines workflows by providing a systematic approach to
                  task management, reducing redundancy and optimizing processes.
                </li>
                <li>
                  Helps in resource allocation by providing insights into task
                  timelines, allowing organizations to allocate resources
                  effectively.
                </li>
                <li>
                  Enables management to have a comprehensive overview of ongoing
                  projects, helping in decision-making and strategic planning.
                </li>
              </ul>
            </p>
          </li>
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <img
              src="https://www.svgrepo.com/show/530444/availability.svg"
              alt=""
              className="mx-auto h-10 w-10"
            />
            <h3 className="my-3 font-display font-medium">Professionals:</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              <ul>
                <li>
                  Enhances time management by providing a clear overview of
                  tasks and deadlines, allowing professionals to prioritize
                  effectively.
                </li>
                <li>
                  Helps professionals prioritize tasks based on urgency and
                  importance, leading to better time utilization.
                </li>
                <li>
                  Ensures that individual tasks align with broader professional
                  and organizational goals.
                </li>
              </ul>
            </p>
          </li>
          <li className="rounded-xl bg-slate-300 px-6 py-8 shadow-sm">
            <a href="/pricing" className="group">
              <img
                src="https://www.svgrepo.com/show/530440/machine-vision.svg"
                alt=""
                className="mx-auto h-10 w-10"
              />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
                Banking Sector:
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
                <ul>
                  <li>
                    Assists in meeting regulatory requirements by providing a
                    structured approach to task and process management.
                  </li>
                  <li>
                    Aids in identifying and mitigating risks associated with
                    various tasks and projects.
                  </li>
                  <li>
                    Improves client servicing by ensuring that tasks related to
                    customer interactions, transactions, and support are managed
                    efficiently.
                  </li>
                </ul>
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BenifiteSection;
