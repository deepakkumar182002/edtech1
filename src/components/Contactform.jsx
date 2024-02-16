import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contactform() {
  const [state, handleSubmit] = useForm("mpzvdprv");

  const handleFormSubmit = (event) => {
    // Your custom form validation logic goes here
    // For example, check if name, email, and message are not empty
    if (!event.target.name.value || !event.target.email.value || !event.target.message.value) {
      // Show an error message or handle the validation error
      console.error("Please fill out all required fields");
      return;
    }

    // If validation passes, proceed with the form submission
    handleSubmit(event);
  };

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <>
      <div className="box d-flex justify-content-center">
        <div className="request-callback-container" style={{ width: "35%", border: "1px solid #abababd9", boxShadow: "0 0 40px 5px #abababd9" }}>
          <div className="header-text p-3" style={{ background: "#289bde", color: "#fff" }}>
            <h2>Request Callback</h2>
            <h6>Fill out this form below!</h6>
          </div>
          <form onSubmit={handleFormSubmit} className="d-flex align-items-center " style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <input id="Username" type="Username" name="name" placeholder="Enter You Name" className="m-2 p-2"
                            style={{ width: "80%", height: "40px" }}
                        />
                        <ValidationError
                            prefix="Username"
                            field="name"
                            errors={state.errors}
                        />
                        <input id="email" type="email" name="email" placeholder="Enter Your Email"
                            style={{ width: "80%", height: "40px" }}
                            className="m-2 p-2"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <input id="Phone" name="Phone" placeholder="Enter Your Phone no."
                            style={{ width: "80%", height: "40px" }}
                            className="m-2 p-2"
                        />
                        <ValidationError
                            prefix="Phone"
                            field="Phone"
                            errors={state.errors}
                        />
                        <label htmlFor="course" className="text text-start" style={{position:"relative", left:"-155px",fontWeight:"500"}}>Course Interest*</label>
                        <select name="course" id="course" className="p-2" style={{ width: "80%" }}>
                            <option >Select Course</option>
                            <option value="Data Science">Data Science</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Cloud computing">Cloud computing</option>
                            <option value="Cyber Security">Cyber Security</option>
                        </select>
                        <ValidationError
                            prefix="Course"
                            field="Course"
                            errors={state.errors}
                        />
                        <label htmlFor="course" className="text text-start " style={{position:"relative",left:"-180px",fontWeight:"500"}}>Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="my-0 p-2"
                            rows="3"
                            cols="50"
                            placeholder="text.."
                            style={{ width: "80%" }}
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}

                        />  
            <button type="submit" disabled={state.submitting} className="m-3" style={{ width: "80%", height: "40px", border: "none", background: "#289bde", color: "#fff" }}>
              Submit
            </button>
            <p className="text-muted" style={{width:"80%"}}>By continuing, you confirm that you have read and agreed to Ed-Tech&apos;s <span style={{color:"#289bde"}}>Terms</span> and <span style={{color:"#289bde"}}>Privacy policy</span></p>
          </form>
        </div>
      </div>
    </>
  );
}
