import { nanoid } from "nanoid";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { dataContext } from "./Wrapper";

const Create = () => {
  const [task, setTask] = useContext(dataContext);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();

  const formHandler = ({ taskname, description }) => {
    const taskData = {
      taskId: nanoid(),
      taskName: taskname,
      taskDesc: description,
    };

    const copyTask = [...task];
    copyTask.push(taskData);
    setTask(copyTask);

    reset();
  };

  return (
    <div className="px-[2rem] md:px-[4rem] lg:px-[6rem] xl:px-[15rem] 2xl:px-[25rem] py-[2rem] md:py-[3rem] ">
      <h1 className="text-2xl xl:text-4xl font-bold my-2 xl:my-4">Add New Task</h1>
      <form className="" onSubmit={handleSubmit(formHandler)}>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 xl:gap-6 mb-2">
          <input
            {...register("taskname", { required: "Task name is required" })}
            className="border-[1px] p-2 outline-none rounded w-full sm:flex-1 xl:p-4 xl:text-xl xl:placeholder:text-xl"
            type="text"
            placeholder="Task Name"
          />
          <button className="bg-blue-500 active:scale-[0.9] rounded p-2 px-4 xl:px-8 xl:text-2xl text-white w-full sm:w-auto">
            Add Task
          </button>
        </div>
        {errors.taskname && (
          <p className="text-red-500 text-sm xl:text-lg mt-1">{errors.taskname.message}</p>
        )}

        <textarea
          {...register("description")}
          className="border-[1px] p-2 outline-none rounded w-full my-2 xl:p-4 xl:text-xl xl:placeholder:text-xl"
          rows="3"
          placeholder="Description (Optional)"
        ></textarea>
      </form>
    </div>
  );
};

export default Create;