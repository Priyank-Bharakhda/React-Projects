import { React, useState } from "react";
import "./App.css";
import { X } from "lucide-react";

function App() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");

  const [Task, setTask] = useState([
    {
      Title: "Title",
      Description: "Description",
    },
    {
      Title: "Notes",
      Description: "Notes Description",
    },
  ]);

  const Submithandler = (e) => {
    e.preventDefault();
    // console.log("Form Submited");
    const copytask = [...Task];

    copytask.push({ Title, Description });

    setTask(copytask);
    // console.log(copytask);

    setTitle("");
    setDescription("");
  };

  const Delete = (idx) => {
    const copyTask = [...Task];
    // console.log(idx);
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };
  return (
    <>
      <div className="lg:flex w-full h-screen">
        <div className="p-4  lg:w-1/2">
          <h1 className="font-bold text-lg">Form Handling</h1>
          <div className=" p-4  rounded-2xl mt-4">
            <form
              onSubmit={(e) => {
                Submithandler(e);
              }}
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  value={Title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  className="border px-4 py-2 rounded-2xl "
                  placeholder="Enter a Title"
                />
              </div>
              <div className="flex flex-col pt-2">
                <textarea
                  value={Description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  type="text"
                  className="border p-2 px-4 py-2 h-30 rounded-2xl"
                  placeholder="Enter a Description"
                />
              </div>
              <div className="flex flex-col pt-2">
                <button className="p-2 border hover:bg-blue-400 bg-blue-900 rounded-3xl">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="p-4 lg:w-1/2">
          <h1 className="font-bold text-lg">Form data</h1>
          <div className="mt-4 gap-4 flex flex-wrap overflow-y-auto h-150">
            {Task.map(function (elem, idx) {
              return (
                <div
                  className="border flex flex-col h-50  w-75 rounded-2xl bg-cover p-2"
                  key={idx}
                >
                  <div className="flex justify-end">
                    <button
                      className="flex  hover:bg-red-700 rounded cursor-pointer justify-end bg-red-400  "
                      onClick={() => {
                        Delete(idx);
                      }}
                    >
                      <X />
                    </button>
                  </div>
                  <div className="p-2">
                    <div className="text-2xl font-bold text-amber-300">
                      {elem.Title}
                    </div>
                    <div className="text-xl ">{elem.Description}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
