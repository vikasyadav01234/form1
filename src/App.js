import { useState } from "react";
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName:"", lastName:"", email:"",
     country:"India", streetAddress:"", city:"", state:"", postalCode:"",
     comments:false, candidates:false, offers:false, pushNotification:""
  })
  

  function changeHandler(event){
    const {name, value, checked, type} = event.target;
    setFormData( (prev) => ({...prev, [name]:type === "checkbox" ? checked: value}) )
  }

  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the value of from data");
    console.log(formData)
  }
  return (
    <div className="flex flex-col items-center mt-2">
    <form onSubmit={submitHandler}>
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
      <br/>
      <br/>
      <fieldset>
        <legend>By Email</legend>
        <div className="flex">
          <input
            id="comments"
            name="comments"
            type="checkbox"
            checked={formData.comments}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="comments">Comments</label>
            <p>Get Notfied When Someones Posts a Comment on a Posting.</p>
          </div>
        </div>
        <div className="flex">
          <input
            id="candidates"
            name="candidates"
            type="checkbox"
            checked={formData.candidates}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="candidates">Candidates</label>
            <p>Get Notfied When a Candidate Applies for a job.</p>
          </div>
        </div>
        <div className="flex">
          <input
            id="offers"
            name="offers"
            type="checkbox"
            checked={formData.offers}
            onChange={changeHandler}
          />
          <div>
            <label htmlFor="offers">Offers</label>
            <p>Get Notfied When a candidate accepts or rejects an offer. </p>
          </div>
        </div>
      </fieldset>
      <br/>
      <br/>
      <fieldset>
        <legend>Push Notifications</legend>
        <p>These are deleverd via SMS to your mobile phone.</p>
        <br/>
        <input
          type="radio"
          id="pushEverything"
          name="pushNotification"
          value="Everything"
          onChange={changeHandler}
        />
        <label htmlFor="pushEverything">Everything</label>
        <br/>
        <input
          type="radio"
          id="pushEmail"
          name="pushNotification"
          value="Same as Email"
          onChange={changeHandler}
        />
        <label htmlFor="pushEmail">Same as Email</label>
        <br/>
        <input
          type="radio"
          id="pushNothing"
          name="pushNotification"
          value="No Push Notifications"
          onChange={changeHandler}
        />
        <label htmlFor="pushNothing">NO Push Notifications</label>
      </fieldset>
      <button
        className="bg-blue-500 text-white font-bold rounded py-2 px-4"
      >
        Save
      </button>
    </form>
    </div>
  );
}

export default App;
