
import React,{useState,useEffect} from "react";
import axios from 'axios';
// import Success from "./Success";
import Card from "react-bootstrap/Card";
import "../css/mybooking.css";


function MyBooking  (props) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  // const [bookings, setBookings] = useState([]);
  // const [data, setData] = useState([]);
  const [item1, setitem1] = useState([]);
  
  // const [noBookings, setNoBookings] = useState(false);
  // const fetchBookings = async () => {
    
    useEffect(() => {
      // axios.get('https://jugaad-pi.vercel.app/api/v1/getbookings')
      // .then(response => {
      //   setData(response.data);
      //   console.log(data);
      //   // console.log(data)
      // })
      // .catch(error => {
      //   console.error(error);
      // });
      const fetchBookings = async () => {
        const { data } = await axios.get("https://jugaad-pi.vercel.app/api/v1/getbookings");
        let item = []
      data.message.forEach((p)=>{
        if (p.user === user.name){
          item.push(p);
        }
        

      })
      console.log(item)
      setitem1(item)
      // console.log(data);
      // setData(data.message)
      // console.log(data.message[0].id)
        
        }
        fetchBookings()
    },[]);
    
    // console.log(item.id)

    
  
  // fetchBookings()
      
    
  // }
  

  

  return (
    <div className="container body" style={{ marginTop: "90px" }}>
      <h1 className="bookingHeading">My Booking</h1>
      {/* <div className="row justify-content-center align-item-center bgShadow"> */}
     
        
        {item1.map((e)=>{
          return <div className="row justify-content-center align-item-center bgShadow">
            <Card 
            className="card-css"
            style={{
              width: "30rem",
              marginRight: "20px",
              marginBottom: "20px",
              alignItems: "center",
            }}
          >
            <Card.Body className="">
              <Card.Title>
                <span className="titleCss" style={{ color: "orange" }}>
                  Gas Name:
                </span> {props.gasname}
                <span className="detailCss"> </span>
              </Card.Title>
              <Card.Text>
                <span className="titleCss">Gas Id: </span>{e.id}
                <span className="detailCss"></span>
              </Card.Text>
              
              <Card.Text>
                <span className="titleCss">User Name: </span> {user.name}
                <span className="detailCss"></span>
              </Card.Text>
              <Card.Text>
                <span className="titleCss">Booked Date: </span>{new Date(e.date).toLocaleDateString()}
                <span className="detailCss"> </span>
              </Card.Text>

              <Card.Text>
                <span className="titleCss">Quantity:  </span>  1
                <span className="detailCss"></span>
              </Card.Text>
              
              <Card.Text>
                <span className="titleCss">Booking Amount:</span>800 
                <span className="detailCss"></span>
              </Card.Text>
              
              
            </Card.Body>
          </Card>
          </div>
        })}

        {/* <div className="flex"> */}

        
        
            
          {/* <button onClick={fetchBookings}>bookings</button> */}
          <div className="no-bookings">No Booking Available</div>
        
        {/* </div> */}
        {/* </ul> */}
        {/* <ul style={{ listStyle: "none" }}>
          {bookings.map((booking) => (
            <div className="col-md-12">
              <li>{booking.gasid}</li>
              <li>{booking.gases}</li>
              <li>{booking.quantity}</li>
              <li>{booking.status}</li>
              <li>{booking.totalAmount}</li>
              <li>{booking._id}</li>
            </div>
          ))}
        </ul> */}
      </div>
    // </div>
  );
}

export default MyBooking; 

