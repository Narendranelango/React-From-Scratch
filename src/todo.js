
import { useState, useEffect } from "react";
import Item from "./Item";

//Delete Method Satisfied All Test Cases

const Todo = () => {
  const [todos, settodos] = useState([]);
  const [todo, settodo] = useState("");

  const [done, setdone] = useState("");
  console.log("Component rendering");

  useEffect(() => {
    console.log("UseEffect logic");
    window.localStorage.setItem("todos", todos);
  }, [todos]);

  const handleChange = (event) => {
    console.log(event.target.value);
    settodo(event.target.value);
  };

  const handleChangedone=(event) => {
    console.log(event.target.value);
    setdone(event.target.value);
  };

  const Add = () => {
    //https://www.tjvantoll.com/2013/03/14/better-ways-of-comparing-a-javascript-string-to-multiple-values/
if(todo != ""){
    const duplicate = todos.includes(todo, 0);

    if (duplicate) {
      console.log("U have entered a duplicate value");
    } else {
    settodos([...todos, todo]);
    settodo("");
    setdone("");
    }
  }
};

  const Del = () => {
    const a = todos.includes(done, 0);
    if (a) {
    //   setdone(todos.pop(done))
    //Splice to be reviewed
    todos.map((greet, index)=>{
        if(greet === done)
        {
            setdone(todos.splice(todos.indexOf(done),1))
        }
    })
    }
    if(!a)
    {
        console.log("The item to be deleted is not found in the Todo List.Kindly check with your input's")
    }
  };

  const a = todos.map((greet, index) => {
    return `${greet}-${index}`;
  });
  console.log(a);
  return (
    <div className="content">
      {todos.map((greet, index) => (
        //<Item text={greet} key={`${greet}-${index}`} />
        <Item text={greet} key={`Hi Narendran ${greet} at ${index}.`} />
      ))}

      <label style={{ marginTop: "20px", marginBottom: "20px" }}>
        To Do:
          <input
            type="text"
            name="todo"
            onChange={handleChange}
            value={todo}
          />
      </label>
      <button onClick={Add}>Add To List</button>
      <label style={{ marginTop: "20px", marginBottom: "20px" }}>
        
      </label>

      <label style={{ marginTop: "20px", marginBottom: "20px" }}>
        To Remove:
          <input
            type="text"
            name="todo"
            onChange={handleChangedone}
            value={done}
          />
      </label>
      <button onClick={Del}>To Remove List</button>
      <label style={{ marginTop: "20px", marginBottom: "20px" }}>
        
      </label>
    </div>
  );
};

export default Todo;
