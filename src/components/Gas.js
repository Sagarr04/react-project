import React from "react";
import "../css/Gas.css";
import img1 from "./assets/5kg.png";
import { toast } from "react-toastify";
import axios from 'axios';

// import { Link } from "react-router-dom";

function Gas(props) {
  let date = new Date();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const success = (msg) => {
    toast.success(msg);
  };

  const err = (msg) => {
    toast.error(msg);
  };

  const Book= async(e)=>{
    let data ={
      date: date.toString(),
      user: user.name
    }
    // alert(data)
    alert("Cylinder Booked")
    console.log(data);
    const { data1 } = await axios.post(
      "https://jugaad-pi.vercel.app/api/v1/booking",
      data
    );
    if (data1.error === 201) {
      success(data1.message);
    }
    else {
      err(data1.message);
    }
    
  }
  return (
    <div className="row outer-div">
      <div className="col">
        <img src={img1} alt="cylinder" className="smallImg " />
      </div>
      <div className="col-md-12">
        <p>
          <span>Type:</span> {props.name}
        </p>
        <p>
          <span>Number of cylinder: </span>  1
        </p>
        <p>
          <span>Amount: </span>₹ 800
        </p>
        <div>
          {/* <Link to={`/book/${gas._id}`}> */}
            <button style={{ float: "right" }} onClick={Book} className="btn btn-primary book">
              Book Now
            </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Gas;
