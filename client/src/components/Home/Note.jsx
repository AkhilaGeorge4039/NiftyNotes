import React from "react";

function Note(props) {
  return (
    <>
      {
        props.notesVal && props.notesVal?.data?.map((res) => {
          return (
            <div key={res._id} className={`w-5/12 p-7 rounded-lg ${res.color}  ${res.shared ? 'shared': ''} ` } style={ {background: res.color}}>
              <h3 className=" font-semibold text-3xl mb-3">{res.title}</h3>
              <p>{res.description}</p>
              <div className="button-div gap-3 flex flex-wrap justify-end mt-10">
                <button className=" bg-black/50 py-3 px-4 rounded inline-flex gap-2 font-bold text-white" onClick={(e) => props.updateNode(res.title, res.description, res.color, res._id)}>
                  Edit{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </button>
                <button className=" bg-black/50 py-3 px-4 rounded inline-flex gap-2 font-bold text-white" onClick={(e)=>props.delete(res._id)}>
                  Delete
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          )
        })
      }
    </>
  );
}

export default Note;
