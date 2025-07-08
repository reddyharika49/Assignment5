// components/TopNav.js
import React, { useRef, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/TopNav.css";
import { ChevronRight } from '@mui/icons-material';

const TopNav = () => {
  const navItems = [
    { path: '/students', label: 'Student Profile' },
    { path: '/payments', label: 'Payments' },
    { path: '/transport', label: 'Transport' },
    { path: '/academics', label: 'Academics' },
    { path: '/alerts', label: 'Alerts' },
    { path: '/history', label: 'History' },
    { path: '/room-allotment', label: 'Room Allotment' },
    { path: '/issue-forms', label: 'Issue Forms' },
    { path: '/certificates', label: 'Certificates' },
  ];

  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1440);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1440);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="position-relative w-100">
      {/* Scrollable Nav */}
      <div
        ref={scrollRef}
        className="header d-flex px-3 py-1 mx-3 my-3 shadow-sm bg-light rounded-3"
        style={{
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `d-inline-block me-3 text-decoration-none px-2 py-1 rounded ${
                isActive
                  ? 'text-primary bg-white rounded-2 shadow-sm fw-bold'
                  : 'text-dark fw-normal'
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* ChevronRight Icon */}
      {isMobile && (
        <div
          onClick={handleScrollRight}
          className="position-absolute top-50 end-0 translate-middle-y bg-light  rounded-circle "
          style={{
            width: '30px',
            height: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            marginRight: '10px',
            zIndex: 10,
          }}
        >
          <ChevronRight fontSize="small" />
             <div
          style={{
            position: 'absolute',
            right: 30, // adjust if your scroll button width changes
            top: 0,
            bottom: 0,
            width: '80px',
            pointerEvents: 'none',
            background: 'linear-gradient(to right, transparent, #F7F7F7)',
          }}
        />
        </div>
        
      )}
    </div>
  );
};

export default TopNav;
