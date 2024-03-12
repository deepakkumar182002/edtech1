import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { FaPhone } from "react-icons/fa";
// import { CiCircleRemove } from "react-icons/ci";


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
        <div className="request-callback-container" style={{boxShadow:"10px 10px 50px 0px #969696c2"}}>
          <div className="header-text p-4 d-flex" style={{ background: "#289bde", color: "#fff", justifyContent: "space-between" }}>
            <span>
              <h2>Request Callback</h2>
              <h6>Fill out this form below!</h6>
            </span>
            <FaPhone style={{fontSize:"2rem",width:"50px",height:"50px", borderRadius:"50%",background:"#fff",color:"#289bde",padding:"10px"}} />
            {/* <CiCircleRemove id="remove-btn" style={{ fontSize: "30px" }} /> */}
          </div>
          <form onSubmit={handleFormSubmit} className="d-flex align-items-center " style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <input id="Username" type="Username" name="name" placeholder="Enter You Name" className="m-2 p-2"
              style={{ width: "80%", height: "40px" }}
              required
            />
            <ValidationError
              prefix="Username"
              field="name"
              errors={state.errors}
            />
            <input id="email" type="email" name="email" placeholder="Enter Your Email"
              style={{ width: "80%", height: "40px" }}
              className="m-2 p-2"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input id="Phone" name="Phone" placeholder="Enter Your Phone no."
              style={{ width: "80%", height: "40px" }}
              className="m-2 p-2"
              required
            />
            <ValidationError
              prefix="Phone"
              field="Phone"
              errors={state.errors}
            />
            <label htmlFor="course" className="text text-start" style={{ fontWeight: "500" }}>Course Interested in*</label>
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
            <label htmlFor="course" className="text text-start " style={{ fontWeight: "500" }}>Message</label>
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
            <p className="text-muted" style={{ width: "80%" }}>By continuing, you confirm that you have read and agreed to Ed-Tech&apos;s <span style={{ color: "#289bde" }}>Terms</span> and <span style={{ color: "#289bde" }}>Privacy policy</span></p>

          </form>
        </div>
      </div>

    </>
  );
}