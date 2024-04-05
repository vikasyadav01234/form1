import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:""
  })

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
  }
  return (
    <div>
    <form>
      <input
        type="text"
        name="firstName"
        id="firstName"
      />
    </form>
    </div>
  );
}

export default App;
