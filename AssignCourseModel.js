import Modal from 'react-modal'
import React, { useState, useEffect } from 'react';

function AssignCourseModal({
    dispatch = (f) => f,
    state,
    setOpenModal
}) {


    const [course, setCourses] = useState([]);
    const onChangeCheckbox = (e) => {
        const coursename = e.target.value;
        setCourses(course.push(coursename));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dispatch)
        let array = [];
        array = course;
        dispatch({ action: 'success', payload: array });
        if (course.length !== 0) setOpenModal(false);
    }
    return (


        <Modal
            isOpen={true}
            style={customStyles}
            contentLabel="Enter details of User"
            ariaHideApp={false}
        >
            <button className='btn btn-danger float-right' onClick={e => (setOpenModal(false))}><svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
            <br />
            <form className="flex  flex-col items-center" onSubmit={handleSubmit}>
                <p>Select courses</p>
                <div class="form-check">
                    <input class="form-check-input" onClick={onChangeCheckbox} type="checkbox" value="Maa Ki Chut wala course" id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault" className='text-gray-500 font-medium'>
                        Maa Ki Chut wala course
                    </label>
                </div>
                <button className="bg-green-700 p-2 rounded-xl text-white font-semibold">Assign</button>
            </form>


        </Modal>

    )
}

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    content: {
        top: '30%',
        left: '50%',
        borderRadius: '10px',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        position: 'absolute'
    },
};

export default AssignCourseModal
