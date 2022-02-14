import { React, useState } from "react";
import Axios from "axios";
export default function Sandbox() {
 
  const [data, setData] = useState({
    title: "",
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    dob: "",
    nationality: "",
    passport: "",
    organizationName: "",
    jobTitle: "",
    emailAddress: "",
    phoneNumber: "",
    city: "",
    state: "",
    zip: "",
    specialNeed: false,
    dietaryNeed: "",
    playGolf: false,
  });

  function submit(e) {
    e.preventDefault();
    Axios.post("http://127.0.0.1:8000/attendees", {
      title: data.title,
      firstname: data.firstname,
      middlename: data.middlename,
      lastname: data.lastname,
      gender: data.gender,
      dob: data.dob,
      nationality: data.nationality,
      passport: data.passport,
      organizationName: data.organizationName,
      jobTitle: data.jobTitle,
      emailAddress: data.emailAddress,
      phoneNumber: data.phoneNumber,
      city: data.city,
      state: data.state,
      zip: data.zip,
      specialNeed: data.specialNeed,
      dietaryNeed: data.dietaryNeed,
      playGolf: data.playGolf,
    }).then((res) => {
      console.log(res.data);
    });
  }
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
  return (
    <div className="App">
      <form onSubmit={(e) => submit(e)}>
        <input
          type="text"
          id="title"
          value={data.title}
          onChange={(e) => handle(e)}
        />
        <input
          type="text"
          id="firstname"
          value={data.firstname}
          onChange={(e) => handle(e)}
        />
        <input
          type="text"
          id="middlename"
          value={data.middlename}
          onChange={(e) => handle(e)}
        />
        <input
          type="text"
          id="lastname"
          value={data.lastname}
          onChange={(e) => handle(e)}
        />
        <input
          type="text"
          id="gender"
          value={data.gender}
          onChange={(e) => handle(e)}
        />
        <input
          type="date"
          id="dob"
          value={data.dob}
          onChange={(e) => handle(e)}
        />
        <input
          type="text"
          id="nationality"
          value={data.nationality}
          onChange={(e) => handle(e)}
        />
        <input
          type="number"
          id="passport"
          placeholder="passport"
          value={data.passport}
          onChange={(e) => handle(e)}
        />
        <input
          type="text"
          id="organizationName"
          value={data.organizationName}
          onChange={(e) => handle(e)}
        />
        <input
          type="text"
          id="jobTitle"
          value={data.jobTitle}
          onChange={(e) => handle(e)}
        />
        <input
          type="text"
          id="emailAddress"
          value={data.emailAddress}
          onChange={(e) => handle(e)}
        />
        <input
          type="number"
          id="phoneNumber"
          placeholder="phone number"
          value={data.phoneNumber}
          onChange={(e) => handle(e)}
        />
        <input
          type="text"
          id="city"
          value={data.mationality}
          onChange={(e) => handle(e)}
        />
        <input
          type="text"
          id="state"
          value={data.state}
          onChange={(e) => handle(e)}
        />
        <input
          type="number"
          id="zip"
          placeholder="zip"
          value={data.zip}
          onChange={(e) => handle(e)}
        />
        {/* radio */}
        <>
          <div class="form-check">
            <input class="form-check-input" type="radio" />
            <label
              class="form-check-label"
              id="specialNeed"
              value={data.specialNeed}
              onChange={(e) => handle(e)}
              for="flexRadioDefault1"
            >
              Yes
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" />
            <label
              class="form-check-label"
              id="specialNeed"
              value={data.specialNeed}
              onChange={(e) => handle(e)}
              for="flexRadioDefault2"
            >
              No
            </label>
          </div>
        </>

        <input
          type="text"
          id="dietaryNeed"
          value={data.dietaryNeed}
          onChange={(e) => handle(e)}
        />

        <>
          <div class="form-check">
            <input class="form-check-input" type="radio" />
            <label
              class="form-check-label"
              id="playGolf"
              value={data.playGolf}
              onChange={(e) => handle(e)}
              for="flexRadioDefault1"
            >
              Yes
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" />
            <label
              class="form-check-label"
              id="playGolf"
              value={data.playGolf}
              onChange={(e) => handle(e)}
              for="flexRadioDefault2"
            >
              No
            </label>
          </div>
        </>

        <button type="submit">Create</button>

        {/* <div className="data">{data ? <p>{data}</p> : null}</div> */}
      </form>
    </div>
  );
}
