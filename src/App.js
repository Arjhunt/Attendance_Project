import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import StudentList from './StudentList'
import AttendanceList from './AttendanceList';
import AddAttendance from './AddAttendance';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div class="container-fluid">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/studentlist" element={<StudentList />} />
                <Route path="/student/:id" element={<AttendanceList />} />
                <Route path="/addattendance/:id" element={<AddAttendance/>} />

              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
