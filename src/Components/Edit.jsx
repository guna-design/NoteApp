import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { NotesTaken } from "../Context/Notedata";

function Edit() {
  const params = useParams();
  const { data, setData } = useContext(NotesTaken);

  const [initialValues, setInitialValues] = useState({
    title: "",
    note: "",
  });

  const getData = (index) => {
    let newValues = { ...initialValues };
    newValues.title = data[index].title;
    newValues.note = data[index].note;
    setInitialValues(newValues);
  };

  useEffect(() => {
    if (Number(params.id) < data.length) {
      getData(Number(params.id));
    } else {
      navigate("/home");
    }
  }, []);
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
        <div className="bg-white h-64 sm:ml-72 sm:mr-12 pl-10  my-10 w-auto rounded-xl shadow-xl ">
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
                className="placeholder:text-2xl py-10 w-72 outline-none bg-transparent"
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
                className="placeholder:text-xl  w-full outline-none bg-transparent resize-none "
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

export default Edit;
