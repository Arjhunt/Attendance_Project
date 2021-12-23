import React from 'react'
import {useState} from 'react'
import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Routes, Route, useParams } from "react-router-dom";
import AddAttendance from './AddAttendance';
 
function AttendanceList() {
    const [attendance,setattendance]=useState([]);
    let params = useParams();



    useEffect(async () => {
        try {
            let attendanceData = await fetch(`http://localhost:3001/attendance?studentid=${params.id}`)
            let AttendanceList = await attendanceData.json()
            setattendance(AttendanceList)
        } catch (error) {
            console.log(error)
        }
    }, [])
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">StudentList</h1>
                <Link to={`/addattendance/${params.id}`} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Add Attendance</Link>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>attendance</th>
                                <th>Date</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                attendance.map((attendance)=>{
                                    return <tr>
                                    <td>{attendance.attendance}</td>
                                    <td>{attendance.date}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default AttendanceList
