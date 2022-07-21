import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [error, seterror] = useState(false);
  const handleSubmit = (e) => {
    if (firstName.length === 0 || lastName.length === 0) {
      seterror(true);
    }
    e.preventDefault();
    console.log("First Name :", firstName, "Last Name :", lastName);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="First Name"
            onChange={(e) => setfirstName(e.target.value)}
            value={firstName}
          />
        </div>
        {error && firstName.length <= 0 ? (
          <label> First Name is require </label>
        ) : (
          ""
        )}

        <div>
          <input
            placeholder="Last Name"
            onChange={(e) => setlastName(e.target.value)}
            value={lastName}
          />
        </div>
        {error && lastName.length <= 0 ? (
          <label> Last Name is require </label>
        ) : (
          ""
        )}

        <div>
          <button> Submit </button>
        </div>
      </form>
    </>
  );
}
