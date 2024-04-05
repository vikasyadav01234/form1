import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:""
  })

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:value}) )
  }
  return (
    <div>
    <form>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Love"
        value={changeHandler}
      />
    </form>
    </div>
  );
}

export default App;
