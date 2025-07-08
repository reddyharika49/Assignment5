import logo from './logo.svg';

import './App.css';
import Header from './components/Header';
import Sidebar from './components/sideBar';
import Main from './components/Main';
import TopNav from './components/TopNav';
import { Routes,Route, BrowserRouter } from 'react-router-dom';
import Payments from './components/payments';
import PaymentTable from './components/paymentTable';
import PaymentDetails from './components/PaymentDetails';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App_header">
        <Header/>
      </header>
      <div id="app_body" className="d-flex gap-0" style={{ width: '100%', height: '92vh', position: 'relative' }}>
        <div className="sideBar border" style={{width:'4%'}}>
          <Sidebar/>
        </div>
        <div className='main_body d-flex flex-row' style={{ width: '100%', transition: 'margin-left 0.3s ease, width 0.3s ease' }}>
            {/* <Main/> */}
            <div className='main_left'style={{width:'75%'}}>
            <TopNav/>
             <Routes>
              {/* <Route path="/" element={<Navigate to="/payments" />} /> */}
              <Route path="/students" element={<>Harika</>} />
              <Route path="/payments" element={<Payments/>} >
                    {/* Nested routes for sub-tabs */}
                  <Route index element={<PaymentTable/>} /> {/* Default route for /payments */}
                  <Route path="cancellation" element={<>cancellation</>} />
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
            <div className='main_right' style={{backgroundColor:"white",width:"25%"}}>
            <PaymentDetails/>
            </div>
        </div>
      </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
