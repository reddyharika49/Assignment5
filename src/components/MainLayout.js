// components/MainContent.js
import React from 'react';
import StudentProfile from './studentProfile';
import TopNav from './TopNav';
import PaymentDetails from './PaymentDetails';
import Payments from './payments';
import PaymentTable from './paymentTable';
import { Routes, Route } from 'react-router-dom';

const MainContent = ({ isProfileExpanded, onToggleProfile, isSidebarExpanded }) => {
  return (
    <div className="d-flex flex-row main-wrapper" style={{ width: '100%' }}>
      <div
        className="left-content d-flex flex-column"
        style={{
          width: isSidebarExpanded ? '60%' : '75%',
          transition: 'width 0.3s ease-in-out',
        }}
      >
        <div className="studentInfo">
          <StudentProfile onToggle={onToggleProfile} />
        </div>
        <div
          className="main_left"
          style={{
            transform: isProfileExpanded ? 'translateY(190px)' : 'translateY(0)',
            transition: 'transform 0.3s ease-in-out',
            zIndex: 1,
          }}
        >
          <TopNav />
          <Routes>
            <Route path="/students" element={<>Harika</>} />
            <Route path="/payments" element={<Payments />}>
              <Route index element={<PaymentTable />} />
              <Route path="cancellation" element={<>cancellation</>} />
              {/* other nested routes */}
                    <Route path="concession" element={<>cancellation</>} />
                    <Route path="pmissue" element={<>cancellation</>} />
                    <Route path="feeinstallments" element={<>cancellation</>} />
                    <Route path="akashbooks" element={<>cancellation</>} />
                    <Route path="uniform" element={<>cancellation</>} />
                    <Route path="transfers" element={<>cancellation</>} />

            </Route>
            <Route path="/transport" element={<>transport</>} />
            <Route path="/academics" element={<>academics</>} />
            <Route path="/alerts" element={<>alerts</>} />
            <Route path="/history" element={<>history</>} />
            <Route path="/room-allotment" element={<>room-allotment</>} />
            <Route path="/issue-forms" element={<>issue-forms</>} />
            <Route path="/certificates" element={<>certificates</>} />
          </Routes>
        </div>
      </div>
      <div className="main_right" style={{ width: '25%', backgroundColor: 'white' }}>
        <PaymentDetails />
      </div>
    </div>
  );
};

export default MainContent;
