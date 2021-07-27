import Header from "../components/Header";
import toast, { Toaster } from 'react-hot-toast';
import AssignUserList from "../components/AssignUserList";
import { useReducer, useState } from 'react'


function AssignCourse() {
    const reducer = (state, action) => {
        let newState = state;
        if (action.type === 'success') {
            newState.success = true;
            newState.currenntUser.courses.concat(action.payload);
            //setUserState(newState);
            console.log('ssdssd')
        }
        if (action.type === 'fail') {
            newState.fail = true;
        }
        if (action.type === 'updateCurrentUser') {
            newState.currenntUser = action.payload;
            console.log('tr')
        }
        return newState;
    }

    const initialState = {
        success: false, // for success toast
        fail: false,// for failure toast 
        currenntUser: {
            name: 'chutki',
            courses: []
        }, // for the user to be assigned the course 
    }

    const [state, dispatch] = useReducer(reducer, initialState) // use reducer declaration


    const successToast = () => {
        toast.success("Assigned Course sucess", {
            duration: 2000
        });
    }
    const failToast = () => {
        toast.error("Assigned Course Failed", {
            duration: 2000
        });
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const assignCourseForm = () => {
        return (
            <div className='h-[60vh] grid place-items-center'>
                {state.success && successToast()}
                <Toaster />
                <p className='text-3xl font-sarif font-semibold'>Assign Course Section</p>
                <div className="bg-white w-[600px] h-[400px] rounded-xl ">
                    <p className='p-2 bg-green-600 rounded-t-lg text-xl font-semibold text-center'> List of users </p>
                    <div className='h-full overflow-y-scroll '>
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                        <AssignUserList state={state.currenntUser} dispatch={dispatch} />
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Header />
            {assignCourseForm()}
        </div>
    )
}

export default AssignCourse
