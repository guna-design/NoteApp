import React from "react";
import AddNotes from "./AddNotes";
import Notes from "./Notes";

function Dashboard() {
  return (
    <>
      <div className="w-full p-4 ">
        {" "}
        <AddNotes />
      </div>
      <div className=" pl-2">
        <Notes />
      </div>
    </>
  );
}

export default Dashboard;
