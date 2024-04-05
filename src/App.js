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
    <div className="flex flex-col items-center">
    <form>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Love"
        value={changeHandler}
        className="outline"
      />
    </form>
    </div>
  );
}

export default App;
