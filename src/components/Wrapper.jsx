import { createContext, useState } from "react"

export const dataContext =  createContext(null);

const Wrapper = (props) => {
  const [task, setTask] = useState([]);
    
  return (
     
    <dataContext.Provider value={[task,setTask]}>
        {props.children}
    </dataContext.Provider>

  )
}

export default Wrapper