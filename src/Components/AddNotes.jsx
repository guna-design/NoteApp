import React, { useContext } from "react";
import { NotesTaken } from "../Context/Notedata";
import { Formik } from "formik";

function AddNotes() {
  let { data, setData } = useContext(NotesTaken);

  return (
    <Formik
      initialValues={{
        title: "",
        note: "",
      }}
      onSubmit={(values, { resetForm }) => {
        let newArray = [...data];
        newArray.push(values);
        setData(newArray);
        resetForm();
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <div className="bg-white h-64 sm:ml-72 sm:mr-12 pl-10 my-10 w-auto rounded-xl shadow-xl ">
          <div className=" text-2xl font-bold text-blue-900 pt-12 ">
            Add a Note
          </div>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              if (values.title !== "" && values.note !== "") {
                handleSubmit();
              }
            }}
          >
            <div>
              <input
                type="text"
                className="placeholder:text-2xl py-10   outline-none bg-transparent"
                name="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Title"
              />
            </div>
            <div>
              <textarea
                type="text"
                className="placeholder:text-xl  w-full  outline-none bg-transparent  resize-none "
                name="note"
                value={values.note}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Take a note..."
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    if (values.title !== "" && values.note !== "") {
                      handleSubmit();
                    }
                  }
                }}
              />
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
}

{
  /* <div class="p-4 sm:ml-64">
   <div class="p-4  rounded-lg dark:border-gray-700">
   
      <div class="flex items-center px-8 h-48 mb-4 rounded-xl shadow-xl bg-gray-50 dark:bg-gray-800">
        
          
            <div className=" text-2xl font-bold text-blue-900 pt-12 ">
  Add a Note
  </div>
  <div>
    <input type="text" className='placeholder:text-2xl py-10 w-72 outline-none bg-transparent' placeholder='Title'/>
  </div>
  <div>
    <textarea type="text" className='placeholder:text-xl  w-full outline-none bg-transparent ' placeholder='Take a note...'/>
  </div>
       
      </div>
     
   
   </div>
</div>  */
}

export default AddNotes;
