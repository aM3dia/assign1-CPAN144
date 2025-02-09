import React, { useState } from "react";
import Link from "next/link";

//user information data
const userData = [
  {name: "Anupa Ragoonanan", age: 22, job: "Student at Humber College", industry: "Computer Programming"}
]

const User = () => {
  const [inputName, setInputName] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  //entry submission
  const handleSearch = (search) => {
    search.preventDefault();

  //search for user information
  const foundUser = userData.find(
    (u) => u.name.toLowerCase() === inputName.trim().toLowerCase()
  );

  if (foundUser) {
    setUser(foundUser);
    setError("");
  } else {
    setUser(null);
    setError("Information on this individual doesn't exist.");
  }
  setInputName("");
  };

return (
  <div className="user-info">
    <div className="header-nav">
      <nav>
        <ul>
          <li><Link href="/" className='nav-link'>Homepage</Link></li>
          <li><Link href="/User" className='nav-link'>User Information</Link></li>
          <li><Link href="/Contact" className='nav-link'>Contact</Link></li>
        </ul>
      </nav>                                    
    </div>

    <h1 style={{textAlign: "center"}}>Assignment 1: Foundations of Advanced Front-end Development</h1>


    <div className="info-display">
      <h2>User Information</h2>

      <div className="search-display">
        <form className="search-field" onSubmit={handleSearch}>
          <input type="text" value={inputName} placeholder="Enter a name..." onChange={(search) => setInputName(search.target.value)}></input>
          <button type="submit">Search</button>
        </form>

          {user ? (<UserCard user={user} />) : 
          error ? (<p style={{color: "red"}}>{error}</p>) :
          ( <p>Enter a name to find details.</p> )}
      </div>
    </div>
  </div>
  );
};

//reuseable user information component
const UserCard = ({user}) => {
  return (
    <div className="user-card">
      <h3>{user.name}</h3>
      <p>Age: {user.age}</p>
      <p>Job: {user.job}</p>
      <p>Industry: {user.industry}</p>
    </div>
  );
};

export default User;
