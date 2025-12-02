import "./App.css";

function App() {
  const handleSubmit = (data) => {
    data.preventDefault();
    const form = data.target;
    localStorage.setItem(
      "formData",
      JSON.stringify({
        firstName: form.firstName.value,
        lastName: form.lastName.value,
        email: form.email.value,
        dob: form.dob.value,
        phone: form.phone.value,
        password: form.password.value,
      })
    );
  };
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <h2>📝 Simple Form Validation</h2>
          <div>
            <label>First Name:</label>
            <input name="firstName" type="text" />
          </div>
          <div>
            <label>Last Name:</label>
            <input name="lastName" type="text" />
          </div>
          <div>
            <label>Email:</label>
            <input name="email" type="email" />
          </div>
          <div>
            <label>Date of Birth:</label>
            <input name="dob" type="date" />
          </div>
          <div>
            <label>Phone Number:</label>

            <input name="phone" type="number" />
          </div>
          <div>
            <label>Password:</label>
            <input name="password" type="password" />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default App;
