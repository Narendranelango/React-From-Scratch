// 07 - Controlled components
//    - Input handling
//    - Handling Events

import { useState, useEffect } from "react";
import Item from "./Item";

const Todo = () => {
  const [greetings, setGreetings] = useState([]);
  const [greeting, setGreeting] = useState("");

  const [done, setdone] = useState("");
  console.log("Component rendering");

  useEffect(() => {
    console.log("UseEffect logic");
    window.localStorage.setItem("greetings", greetings);
  }, [greetings]);

  const handleChange = (event) => {
    console.log(event.target.value);
    setGreeting(event.target.value);
  };

  const handleChangedone=(event) => {
    console.log(event.target.value);
    setdone(event.target.value);
  };

  const Add = () => {
    //https://www.tjvantoll.com/2013/03/14/better-ways-of-comparing-a-javascript-string-to-multiple-values/
if(greeting != ""){
    const duplicate = greetings.includes(greeting, 0);

    if (duplicate) {
      console.log("U have entered a duplicate value");
    } else {
    setGreetings([...greetings, greeting]);
    setGreeting("");
    setdone("");
    }
  }
};

  const Del = () => {
    const a = greetings.includes(done, 0);
    if (a) {
      
    }
  };

  const a = greetings.map((greet, index) => {
    return `Hi Narendran E ${greet}-${index}`;
  });
  console.log(a);
  return (
    <div className="content">
      {greetings.map((greet, index) => (
        //<Item text={greet} key={`${greet}-${index}`} />
        <Item text={greet} key={`Hi Narendran ${greet} at ${index}.`} />
      ))}

      <label style={{ marginTop: "20px", marginBottom: "20px" }}>
        To Do:
          <input
            type="text"
            name="greeting"
            onChange={handleChange}
            value={greeting}
          />
      </label>
      <button onClick={Add}>Add To List</button>
      <label style={{ marginTop: "20px", marginBottom: "20px" }}>
        
      </label>

      <label style={{ marginTop: "20px", marginBottom: "20px" }}>
        To Remove:
          <input
            type="text"
            name="greeting"
            onChange={handleChangedone}
            value={done}
          />
      </label>
      {/* <button onClick={}>To Remove List</button> */}
      <label style={{ marginTop: "20px", marginBottom: "20px" }}>
        
      </label>
    </div>
  );
};

export default Todo;
