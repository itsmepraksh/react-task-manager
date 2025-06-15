import { createContext, useEffect, useState } from "react"

export const dataContext =  createContext(null);

const Wrapper = (props) => {
  const [task, setTask] = useState(()=>{
    const savedTask = localStorage.getItem("taskList")
    return savedTask ? JSON.parse(savedTask) : []
  })

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(task))
  }, [task])
  
    
  return (
     
    <dataContext.Provider value={[task,setTask]}>
        {props.children}
    </dataContext.Provider>

  )
}

export default Wrapper