import React, { useEffect } from 'react'
import  {useState} from 'react'
import { Link } from 'react-router-dom'

function StudentList() {

    const [students, setstudents] = useState([])

    useEffect(async () => {

        try {
            let studentData = await fetch("https://61c3dc4af1af4a0017d990ce.mockapi.io/students")
            let studentList = await studentData.json()
            setstudents(studentList)
        } catch (error) {
            console.log(error);
        }
    }, [])


    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">StudentList</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
            </div>
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Avatar</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                students.map((student) => {
                                    return <tr>
                                        <td>{student.name}</td>
                                        <td>
                                            <img src='{student.avatar}'/>
                                            </td>
                                            <td>
                                                <Link to={`/student/${student.id}`}>
                                                <button className='btn btn-primary'>View</button>
                                                </Link>
                                            </td>
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

export default StudentList
