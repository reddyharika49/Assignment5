import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentDetails = () => {
  return (
    <div className="position-relative">
      {/* Information Badge */}
      <div
        className="position-absolute px-3 py-1 bg-primary text-white rounded-pill"
        style={{
          top: "-10px",
          left: "15px",
          fontSize: "0.75rem",
          transition: "all 0.3s ease-in-out",
          zIndex: 1,
        }}
      >
        Information
      </div>

      {/* Card */}
<div className="card border-primary shadow-sm rounded mx-2" style={{ fontSize: "0.9rem",marginTop:"280px" }}>
        
    <div className="card shadow-sm py-2 px-3 mx-3 my-4">
        <div className="card-header bg-white py-2 px-2 my-1  d-flex align-items-center">
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
                className={`list-group-item py-1 px-0 d-flex justify-content-between `}
                style={{ fontSize: "0.85rem",border:"none" }}
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
