import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:""
  })

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:value}) )
  }
  return (
    <div className="flex flex-col items-center mt-2">
    <form>
      <label htmlFor="firstName">First name</label>
      <br/>
      <input
        type="text"
        name="firstName"
        id="firstName"
        placeholder="Love"
        value={changeHandler}
        className="outline"
      />

      <label htmlFor="lastName">Last name</label>
      <br/>
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="babber"
        value={changeHandler}
        className="outline"
      />
      <label htmlFor="email">Email</label>
      <br/>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="abcd@gmail.com"
        value={changeHandler}
        className="outline"
      />
    </form>
    </div>
  );
}

export default App;
