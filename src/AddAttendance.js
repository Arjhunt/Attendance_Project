import { useFormik } from 'formik'
import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function AddAttendance() {
    let params = useParams()
    let navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            attendance: "present",
            date: "",
            studentid: params.id
        },
        onSubmit: async (values) => {
            await fetch("http://localhost:3001/attendance", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }

            })
            navigate(`/student/${params.id}`)
        }
    });


    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Attendance</h1>
            </div>

            <div className='container'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <select name="attendance" className='form-control'
                                onChange={formik.handleChange} value={formik.values.attendance}>
                                <option value="present">Present</option>
                                <option value="absent">Absent</option>
                            </select>
                        </div>

                        <div className='col-lg-6'>
                            <input name="date" type="date" className='form-control'
                                onChange={formik.handleChange} value={formik.values.date} />
                        </div>


                        <div className='col-lg-6 mt-3'>
                            <input type="submit" className='btn btn-primary btn-sm' />
                        </div>
                    </div>
                </form>
            </div>





        </>
    )
}

export default AddAttendance
