import React, { useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="flex w-full lg:justify-between flex-col items-center gap-4 md:flex-row">
        <div className="">
          <input
            type="text"
            placeholder="Type to search by title"
            onChange={(e) => setSearch(e.target.value)}
            className="md:p-4 p-3 border border-gray-300 rounded-md mr-2 focus:outline-0"
          ></input>
          <button
            className="button bg-pri-color h-full md:p-4 p-3 rounded-md text-white"
            type="button"
            onClick={(e) => props.Search(search)}
          >
            {" "}
            Search
          </button>
        </div>
        <div className="w-auto flex justify-end">
          <select
            className=" w-auto border p-2 h-auto rounded-xl"
            name="sort"
            id="sort"
            onChange={(e) => props.sort(e.target.value)}
          >
            <option>Sort By</option>
            <option value="asc">Ascending</option>
            <option value="dsc">Descending</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Search;
