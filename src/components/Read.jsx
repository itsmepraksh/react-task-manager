import { useContext, useEffect, useState } from "react";
import { dataContext } from "./Wrapper";
import { useForm } from "react-hook-form";

const Read = () => {
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState = { error },
  } = useForm({
    defaultValues: {
      taskName: "",
      taskDesc: "",
    },
  });

  const [task, setTask] = useContext(dataContext);
  const [editingTaskId, setEditingTaskId] = useState(null);

  useEffect(() => {
    if(editingTaskId){
      const taskToEdit =  task.find((taks)=> taks.taskId === editingTaskId)

      if(taskToEdit){
        setValue("taskName",taskToEdit.taskName)
        setValue("taskDesc",taskToEdit.taskDesc)
      }

    }else{
        reset()
      }
  }, [editingTaskId, task , setValue , reset])
  

  const editTask = (e) => {
    const idToEdit = e.target.id;
    setEditingTaskId(idToEdit);
  };

  const closeEdit = () => {
    setEditingTaskId(null);
  };

  const deleteTask = (e) => {
    const filterdTask = task.filter((item) => {
      return item.taskId != e.target.id;
    });

    let copyTask = [...task];
    copyTask = filterdTask;
    setTask(copyTask);
  };
  const renderTask = task.map(({ taskId, taskName, taskDesc }, idx) => {
    const isEditing = editingTaskId === taskId;
    return (
      <div
        key={idx}
        id={taskId}
        className="
          taskDiv
          flex flex-col md:flex-row
          justify-between items-start md:items-center
          py-4 gap-3 md:gap-4 
          border-b-[1px] border-zinc-400
        "
      >
        <div className="taskInfo w-full md:w-auto">
          <h1 className="font-medium text-lg xl:text-2xl text-wrap break-words">
            {taskName}
          </h1>
          <p className="text-sm text-wrap xl:text-xl break-words">{taskDesc}</p>
        </div>
        <div
          className="
          taskOperation
          flex flex-row
          gap-2 text-sm font-medium
          w-full md:w-auto
          justify-end md:justify-start
        "
        >
          <button
            onClick={editTask}
            id={taskId}
            className="active:scale-[0.9] border-[1px] rounded py-1 px-4 flex-1 md:flex-none xl:text-xl"
          >
            edit
          </button>
          <button
            onClick={deleteTask}
            id={taskId}
            className="active:scale-[0.9] text-red-700 rounded border-black border-[1px] py-1 px-4 flex-1 md:flex-none xl:text-xl"
          >
            delete
          </button>
        </div>

        {isEditing ? (
          <div className="editPanel w-full my-4 ">
            <div className="flex justify-between items-center">
              <h2 className=" text-lg">Edit</h2>
              <small
                onClick={closeEdit}
                className="text-red-500 p-2 font-medium text-xs"
              >
                close
              </small>
            </div>
            <form className="flex flex-col gap-4 text-sm">
              <div className="taskname flex justify-between items-baseline">
                <p>task name:</p>
                <input className="border-[1px] border-gray-500 w-2/3 rounded p-2 " />
              </div>
              <div className="taskname flex justify-between items-baseline">
                <p>description:</p>
                <textarea
                  className="border-[1px] w-2/3 border-gray-500 p-2 rounded"
                  rows="2"
                ></textarea>
              </div>

              <button className="bg-blue-500 active:scale-[0.9] rounded p-2 px-4 xl:px-8 xl:text-2xl text-white w-full sm:w-auto">
                submit
              </button>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  });

  return (
    <>
      <div className="show px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[15rem] 2xl:px-[25rem] py-[1rem] md:py-[3rem]">
        <h1 className="text-3xl xl:text-4xl font-bold mb-4">Task List</h1>
        {renderTask}
      </div>
    </>
  );
};

export default Read;
