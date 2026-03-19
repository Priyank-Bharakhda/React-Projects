import { React, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [userdata, SetUserdata] = useState([]);
  const [index, setIndex] = useState(1);
  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=14`
    );
    SetUserdata(response.data);
    // console.log(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index]
  );
  

  let printuser = <h3 className="text-amber-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading.. </h3>;

  if (userdata.length > 0) {
    printuser = userdata.map(function (elem, idx) {
      return (
        <>
          <div key={idx}>
            <a href={elem.url} target="_blank">
              <div>
                <div className="h-40 w-44 rounded-2xl overflow-hidden">
                  <img
                    src={elem.download_url}
                    className="h-full object-cover w-full"
                    alt=""
                  />
                </div>
                <h1>{elem.author}</h1>
              </div>
            </a>
          </div>
        </>
      );
    });
  }

  return (<>
    <div className="bg-black h-screen text-white overflow-auto p-4">
      <div className="flex flex-wrap h-[80%] gap-4 ">
        {printuser}
      </div>
      <div className="flex gap-5 justify-center p-3 items-center">
        <button
          className="py-2 px-4 bg-amber-700 rounded-2xl active:scale-95 hover:bg-amber-400 cursor-pointer"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              SetUserdata([])
            }
          }}
        >
          Prev
        </button>
        <h1>Page {index}</h1>
        <button
          className="py-2 px-4 bg-amber-700 rounded-2xl active:scale-95 hover:bg-amber-400 cursor-pointer"
          onClick={() => {
            setIndex(index + 1);
            SetUserdata([])
          }}
        >
          Next
        </button>
      </div>
    </div>
    </>
  );

}

export default App;
