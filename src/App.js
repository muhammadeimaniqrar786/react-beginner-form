import './App.css';
import { React, useState } from 'react';

function App() {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    gender: "",
    subjects: {
      english: true,
      maths: false,
      physics: false,
    },
    resume: null,
    url: "",
    selectedOption: "",
    about: "",
  };

  const [user, setUser] = useState(initialState);

  const handleValue = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  const handleFiles = (e) => {
    const { name, files } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: files[0],
    }));
  }

  const resetForm = () => {
    setUser(initialState);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // You can also use an API call here to send the form data to the server
    console.log(user);
  }

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form action="#" method="get">

          <label htmlFor="firstname">First Name*</label>
          <input type="text" name='firstName' id='firstname' placeholder='Enter First Name' required value={user.firstName} onChange={handleValue} />

          <label htmlFor="lastname">Last Name*</label>
          <input type="text" name='lastName' id='lastname' placeholder='Enter Last Name' required value={user.lastName} onChange={handleValue} />

          <label htmlFor="email">Email*</label>
          <input type="email" name='email' id='email' placeholder='Enter Email' required value={user.email} onChange={handleValue} />

          <label htmlFor="contact">Contact*</label>
          <input type="tel" name='contact' id='contact' placeholder='Enter Mobile Number' required value={user.contact} onChange={handleValue} />

          <label htmlFor="gender">Gender*</label>
          <input type="radio" name="gender" id="male" value='male' checked={user.gender === 'male'} onChange={handleValue} /> Male
          <input type="radio" name="gender" id="female" value='female' checked={user.gender === 'female'} onChange={handleValue} /> Female
          <input type="radio" name="gender" id="other" value='other' checked={user.gender === 'other'} onChange={handleValue} /> Other

          <label htmlFor="lang">Your Best Subject</label>
          <input type="checkbox" name='lang' id='english' checked={user.subjects.english === true} onChange={handleValue} /> English
          <input type="checkbox" name='lang' id='maths' checked={user.subjects.maths === true} onChange={handleValue} /> Maths
          <input type="checkbox" name='lang' id='physics' checked={user.subjects.physics === true} onChange={handleValue} /> Physics

          <label htmlFor="file">Upload Resume*</label>
          <input type="file" name='resume' id='file' placeholder='Upload File' required onChange={handleFiles} />

          <label htmlFor="url">Enter URL*</label>
          <input type="url" name='url' id='url' placeholder='Enter URL' required onChange={handleValue} />

          <label htmlFor="select">Select Your Choice</label>
          <select name="select" id="select" value={user.selectedOption} onChange={handleValue}>
            <option value="" disabled selected={user.selectedOption === ''}>Select Your Ans</option>
            <optgroup label="Beginers">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDB</option>
            </optgroup>
          </select>

          <label for="about">About</label>
          <textarea name="about" id="about" cols="30" rows="10" placeholder="About your self" required onChange={handleValue} value={user.about} ></textarea>

          <button type="button" value="reset" onClick={resetForm}>Reset</button>
          <button type="button" value="Submit" onClick={handleSubmit}>Submit</button>

        </form>
      </fieldset>
    </div>
  );
}

export default App;
