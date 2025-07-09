import React, { useState } from 'react';
import '../styles/StudentProfile.css';
import studentImg from '../assets/StudentProfile.png';
import backgroundImage from '../assets/BG.png';
import MaleIcon from '@mui/icons-material/Male';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HistoryIcon from '@mui/icons-material/History';

const StudentProfile = ({ onToggle }) => {
  const [isExpanded, setIsExpanded] = useState(false); // Default to false for off mode

  const handleToggle = (e) => {
    setIsExpanded(e.target.checked);
    if (onToggle) onToggle(e.target.checked); // Notify parent component
  };

 

  return (
    <div
      className="student-profile container-fluid my-2 "
      style={{
        backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '90%',
        width:'96%',
      }}
    >
      <div
        className="student-card bg-white border rounded-4 p-3 pb-0 mx-2 position-absolute"
        style={{
          width: isExpanded ? '97.5%' : '23vw',
        //   height:'20vh',
          right: '14px',
          transition: 'width 0.3s ease, right 0.3s ease',
          zIndex: 1000,
          overflowX: 'auto',
           backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.6) 90%, rgba(255, 255, 255, 0) 100%), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
       
        }}
      >
        {/* Show Profile Switch (Top-Right) */}
        <div
          className="form-check form-switch student-switch"
          style={{
            background:  'linear-gradient(90deg, #FFFFFF 30%, #6987FF 100%)',
            width: isExpanded ? '25%' : '50%',
            position: 'absolute',
            top: '0',
            right: isExpanded ? '0px' : '0px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            borderTopRightRadius: '10px',
            padding: '5px',
            transition: 'width 0.3s ease, right 0.3s ease',
          }}
        >
          <label className="form-check-label small me-4" htmlFor="showProfileSwitch" style={{ fontSize: '12px', fontWeight: 500, color: '#000000' }}>
            Show Profile
          </label>
          <label className="custom-switch">
            <input type="checkbox" onChange={handleToggle} />
            <span className="slider"></span>
          </label>
        </div>

        {/* Main Content */}
        <div className="d-flex justify-content-between gap-5">
          {/* Left: Image and Basic Info */}
          <div className="student-basic d-flex align-items-center gap-3" style={{ marginBottom: '0px', height: '40%' }}>
            <div className="student-image">
              <figure className="m-0">
                <img
                  src={studentImg}
                  alt="Student"
                  className="rounded-3"
                  width="119"
                  height="151"
                />
              </figure>
            </div>
            <div className="student-info">
              <div className="text-muted small student-admin-id">
                <span style={{ fontSize: '14px', fontWeight: 500 ,fontFamily:"'Inter',sans-serif"}}> Admin No: </span>
                <strong className="text-dark" style={{ fontSize: '14px', fontWeight: 600,fontFamily:"'Inter',sans-serif" }}>HYD 253487918</strong>
              </div>
              <h5 className="mb-1 fw-bold student-name" style={{fontFamily:"'Inter',sans-serif"}}>Devansh.N</h5>
              <div className="d-flex align-items-center gap-3 small mb-2 student-gender-group">
                <span className="student-gender" style={{ fontSize: '12px', fontWeight: 600, color: '#010101' ,fontFamily:"'Inter',sans-serif"}}>
                  <MaleIcon sx={{ width: '15px', height: '15px', color: '#5558FF' }} /> Male
                </span>
                <span
                  className="student-category text-muted d-flex align-items-center"
                  style={{ fontSize: '12px', fontWeight: 600, color: '#1F1F1F', gap: '8px' ,fontFamily:"'Inter',sans-serif"}}
                >
                  <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.02344" cy="2" r="2" fill="#D9D9D9" />
                  </svg>
                  General
                </span>
              </div>
              <div className="student-tags d-flex gap-2 align-items-center">
                <span
                  className="btn student-class"
                  style={{
                    backgroundColor: '#0F6CBD',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    width: '56px',
                    height: '23px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    fontFamily:"'Inter',sans-serif"
                  }}
                >
                  Class 8
                </span>
                <span
                  className="btn student-track"
                  style={{
                    backgroundColor: '#48910F',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#FFFFFF',
                    width: '58px',
                    height: '23px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0',
                    fontFamily:"'Inter',sans-serif"
                  }}
                >
                  Techno
                </span>
                <span
                  className="student-options border rounded-2 d-flex align-items-center"
                  style={{ width: '28px', height: '23px', justifyContent: 'center',fontFamily:"'Inter',sans-serif" }}
                >
                  <MoreHorizIcon sx={{ color: '#616161' }} />
                </span>
              </div>
            </div>
          </div>

          {/* Right: Details and Actions */}
          <div className="d-flex flex-grow-1 my-4 gap-3">
            <div className={`student-details flex-grow-1 ${isExpanded ? '' : 'd-none'}`} style={{ transition: 'opacity 0.3s ease' }}>
              <div className="row text-muted small">
                {/* Row 1 */}
                <div className="col-md-4 mb-2 student-detail-item">
                  <div style={{ fontSize: '12px', fontWeight: 400, color: '#606060' ,fontFamily:"'Inter',sans-serif"}}>
                    Course Track / Orientation
                  </div>
                  <strong style={{ fontSize: '12px', fontWeight: 800, color: '#4F4F4F' ,fontFamily:"'Inter',sans-serif"}}>
                    Class 8 with Techno
                  </strong>
                </div>

                <div className="col-md-4 mb-2 student-detail-item">
                  <div style={{ fontSize: '12px', fontWeight: 400, color: '#606060',fontFamily:"'Inter',sans-serif" }}>
                    Admission Type
                  </div>
                  <div style={{ fontSize: '12px', fontWeight: 800, color: '#4F4F4F',fontFamily:"'Inter',sans-serif" }}>
                    Direct Walkin
                  </div>
                </div>

                <div className="col-md-4 mb-2 student-detail-item">
                  {/* Empty column for alignment */}
                </div>

                {/* Row 2 */}
                <div className="col-md-4 mb-2 student-detail-item">
                  <div style={{ fontSize: '12px', fontWeight: 400, color: '#606060' ,fontFamily:"'Inter',sans-serif"}}>
                    Admission Status
                  </div>
                  <strong style={{ fontSize: '12px', fontWeight: 800, color: '#4F4F4F' ,fontFamily:"'Inter',sans-serif"}}>
                    Current
                  </strong>
                </div>

                <div className="col-md-4 mb-2 student-detail-item">
                  <div style={{ fontSize: '12px', fontWeight: 400, color: '#606060',fontFamily:"'Inter',sans-serif" }}>
                    Student Type
                  </div>
                  <strong style={{ fontSize: '12px', fontWeight: 800, color: '#4F4F4F',fontFamily:"'Inter',sans-serif" }}>
                    Residential
                  </strong>
                </div>

                <div className="col-md-4 mb-2 student-detail-item">
                  <div style={{ fontSize: '12px', fontWeight: 400, color: '#606060' ,fontFamily:"'Inter',sans-serif"}}>
                    Section
                  </div>
                  <strong style={{ fontSize: '12px', fontWeight: 800, color: '#4F4F4F',fontFamily:"'Inter',sans-serif" }}>
                    8A
                  </strong>
                </div>
              </div>
            </div>

            <div className={`student-actions d-flex flex-column align-items-start gap-2 ${isExpanded ? '' : 'd-none'}`} style={{ width: '20%', transition: 'opacity 0.3s ease',fontFamily:"'Inter',sans-serif" }}>
              <div className="form-check form-switch student-switch"></div>
              <button className="btn btn-primary w-100 mb-1 student-view-btn" > <TrendingUpIcon /> View full Profile</button>
              {/* <button className="btn btn-outline-primary w-80 student-timeline-btn d-flex align-items-end"> <HistoryIcon /> Timeline</button> */}
              <div className="d-flex justify-content-md-end">
                  <button className="btn btn-outline-primary student-timeline-btn" style={{ marginLeft: 'auto' ,fontFamily:"'Inter',sans-serif"}}>
                    <HistoryIcon /> Timeline
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;