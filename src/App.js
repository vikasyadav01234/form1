import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:""
  })
  return (
    <div>
    <form>
      <input
        type="text"
        name="firstName"
      />
    </form>
    </div>
  );
}

export default App;
