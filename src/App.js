import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"",
     country:"India", streetAddress:"", city:"", state:"", postalCode:"",
     comments:false, candidates:false, offers:false
  })
  console.log(formData)

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) )
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
        value={formData.firstName}
        onChange={changeHandler}
        className="outline"
      />
      <br/>
      <label htmlFor="lastName">Last name</label>
      <br/>
      <input
        type="text"
        name="lastName"
        id="lastName"
        placeholder="babber"
        value={formData.lastName}
        onChange={changeHandler}
        className="outline"
      />
      <br/>
      <label htmlFor="email">Email</label>
      <br/>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="abcd@gmail.com"
        value={formData.email}
        onChange={changeHandler}
        className="outline"
      />
      <br/>
      <label htmlFor="country">Country</label>
      <br/>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={changeHandler}
        className="outline"
      >
        <option>India</option>
        <option>United State</option>
        <option>Canada</option>
        <option>Maxico</option>
      </select>
      <br/>
      <label htmlFor="streetAddress">Street Address</label>
      <br/>
      <input
        type="text"
        name="streetAddress"
        id="streetAddress"
        placeholder="1234 Main St"
        value={formData.streetAddress}
        onChange={changeHandler}
        className="outline"
      />
      <br/>
      <label htmlFor="city">City</label>
      <br/>
      <input
        type="text"
        name="city"
        id="city"
        placeholder="Jaipur"
        value={formData.city}
        onChange={changeHandler}
        className="outline"
      />
      <br/>
      <label htmlFor="state">State/Province</label>
      <br/>
      <input
        type="text"
        name="state"
        id="state"
        placeholder="Rajasthan"
        value={formData.state}
        onChange={changeHandler}
        className="outline"
      />
      <br/>
      <label htmlFor="postalCode">ZIP/Postal Code</label>
      <br/>
      <input
        type="text"
        name="postalCode"
        id="postalCode"
        placeholder="303305"
        value={formData.postalCode}
        onChange={changeHandler}
        className="outline"
      />
    </form>
    </div>
  );
}

export default App;
