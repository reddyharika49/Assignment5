import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentDetails = () => {
  return (
    <div className="position-relative">
      {/* Information Badge */}
      <div
        className="position-absolute px-3 py-1  text-white rounded-pill d-flex justifyContent-center"
        style={{
          top: "-10px",
          left: "25px",
          fontSize: "0.75rem",
          transition: "all 0.3s ease-in-out",
          zIndex: 1,
          borderRadius: '79px',
border: '1px solid #3425FF',
background: '#3425FF'
          
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16" fill="none" style={{paddingRight:"5px"}}>
  <path opacity="0.7" d="M11.0997 0H13.9003C15.0602 0 16 0.939829 16 2.09969V4.90031C16 6.06017 15.0602 7 13.9003 7H11.0997C9.93983 7 9 6.06017 9 4.90031V2.09969C9 0.939829 9.93983 0 11.0997 0Z" fill="white"/>
  <path d="M5.28267 8.97705C6.21751 8.97705 6.97502 9.74095 6.97502 10.6837V12.9601C6.97502 13.9022 6.21751 14.6667 5.28267 14.6667H3.02536C2.09051 14.6667 1.33301 13.9022 1.33301 12.9601V10.6837C1.33301 9.74095 2.09051 8.97705 3.02536 8.97705H5.28267ZM12.974 8.97705C13.9088 8.97705 14.6663 9.74095 14.6663 10.6837V12.9601C14.6663 13.9022 13.9088 14.6667 12.974 14.6667H10.7167C9.78184 14.6667 9.02433 13.9022 9.02433 12.9601V10.6837C9.02433 9.74095 9.78184 8.97705 10.7167 8.97705H12.974ZM5.28267 1.33337C6.21751 1.33337 6.97502 2.09728 6.97502 3.04002V5.31639C6.97502 6.25913 6.21751 7.02303 5.28267 7.02303H3.02536C2.09051 7.02303 1.33301 6.25913 1.33301 5.31639V3.04002C1.33301 2.09728 2.09051 1.33337 3.02536 1.33337H5.28267Z" fill="white"/>
    </svg>
        Information
      </div>

      {/* Card */}
<div className="card border-primary shadow-sm rounded-4 mx-2" style={{ fontSize: "0.9rem",marginTop:"230px" }}>
        
    <div className="card shadow-sm rounded-3 py-2 px-3 mx-3 my-4">
        <div className="card-header bg-white py-2 px-1 my-1  d-flex align-items-center  justifyContent-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 22 22" fill="none"style={{paddingRight:"5px"}}>
            <path opacity="0.4" d="M17.2411 8.26929C16.8272 8.26929 16.279 8.26012 15.5964 8.26012C13.9318 8.26012 12.5631 6.88237 12.5631 5.20212V2.25412C12.5631 2.02221 12.3779 1.83337 12.1483 1.83337H7.29966C5.03691 1.83337 3.20801 3.69054 3.20801 5.96662V15.8437C3.20801 18.2316 5.12404 20.1667 7.48845 20.1667H14.7088C16.9633 20.1667 18.7913 18.3215 18.7913 16.0435V8.68179C18.7913 8.44896 18.6071 8.26104 18.3765 8.26196C17.989 8.26471 17.5243 8.26929 17.2411 8.26929Z" fill="#56555C"/>
            <path opacity="0.4" d="M14.7438 2.35342C14.4697 2.06834 13.9912 2.26451 13.9912 2.65959V5.07684C13.9912 6.09067 14.8263 6.92484 15.8401 6.92484C16.479 6.93217 17.3664 6.93401 18.1199 6.93217C18.5058 6.93126 18.702 6.47017 18.4343 6.19151C17.4672 5.18592 15.7356 3.38376 14.7438 2.35342Z" fill="#56555C"/>
            <path d="M13.2164 13.6517C13.5931 13.6517 13.8993 13.9579 13.8993 14.3347C13.8993 14.7114 13.5931 15.0167 13.2164 15.0167H8.22604C7.84929 15.0167 7.54404 14.7114 7.54404 14.3347C7.54404 13.9579 7.84929 13.6517 8.22604 13.6517H13.2164ZM11.3289 9.07373C11.7056 9.07373 12.0118 9.3799 12.0118 9.75665C12.0118 10.1334 11.7056 10.4386 11.3289 10.4386H8.22595C7.8492 10.4386 7.54395 10.1334 7.54395 9.75665C7.54395 9.3799 7.8492 9.07373 8.22595 9.07373H11.3289Z" fill="#56555C"/>
          </svg>
          <h6 className="mb-0 fw-semibold">Payment Details</h6>
        </div>
          <div className="mb-2 d-flex justify-content-between">
            <label htmlFor="classSelect" className="form-label mb-1 fw-semibold">
              Select Class
            </label>
            <select id="classSelect" className="form" style={{width:"40%",borderRadius: "2px",
border: "1px solid #E2E2E2",
background:" #F2F2F2"}}>
               <option>Inter 1</option>
                <option>Inter 2</option>
            </select>
          </div>

          <ul className="list-group list-group-flush" style={{ fontSize: "0.85rem",border:"none" }} >
            {[
              ["Course Fee", "145,000"],
              ["Additional Amount", "0"],
              ["Concession", "40,000"],
              ["Net Fee", "105,000"],
              ["Service Tax Paid", "0"],
              ["Fee Paid", "100,000"],
              ["Fee Refunded", "0"],
              ["Over All Due", "5,000"],
            ].map(([label, value], index) => (
              <li
                key={index}
                className={`list-group-item  px-0 d-flex justify-content-between `}
                style={{ fontSize: "0.85rem",border:"none" ,paddingBottom:"0px",paddingTop:"2px"}}
              >
                <span>{label}</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
