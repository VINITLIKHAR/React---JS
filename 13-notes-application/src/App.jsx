import React, { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(`Title: ${title} || Detail: ${detail}`);

    const copyTask = [...task];

    copyTask.push({ title, detail });
    setTask(copyTask);

    setTitle("");
    setDetail("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen lg:flex bg-black text-white overflow-hidden">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 items-start flex-col p-10 "
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>
        {/* FIRST INPUT */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 rounded outline-none"
          value={title}
          onChange={(e) => {
            // console.log(e.target.value);
            setTitle(e.target.value);
          }}
        />
        {/* DETAIL INPUT */}
        <textarea
          type="text"
          className="px-5 w-full h-32 font-medium py-2 flex items-start flex-row border-2 rounded outline-none"
          placeholder="Write Details Here..."
          value={detail}
          onChange={(e) => {
            // console.log(e.target.value)
            setDetail(e.target.value);
          }}
        />

        <button className="bg-white active:scale-95 font-bold w-full text-black px-5 py-2 rounded outline-none">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative h-52 w-40 bg-cover rounded-2xl flex justify-between flex-col items-start text-black pt-9 pb-4 px-4 bg-[url('https://imgs.search.brave.com/0URcI9QeB20KSXJcNsLG9ZSyWOYKDXMQXWO0HwVINbY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/NTg0LzQ2Mi9zbWFs/bC9ibGFuay1zcGFj/ZS13aGl0ZS1zdGlj/a3ktbm90ZS1wbmcu/cG5n')] p-4"
              >
                <div className="">
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-5 leading-tight font-medium text-gray-500">
                    {elem.detail}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 text-white py-1 text-xs rounded font-bold"
                >
                  DELETE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
