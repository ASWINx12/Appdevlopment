// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// const Intropage = () => {
//     const navigate=useNavigate();
//     const handleonclick =()=>{
//         navigate('/login')
//     }
//   return (
//     <div className='intropageoutline'>
//       <div className='intro-card'>

//       </div>
//       <form className='introform'>
//         <h1><b><i>Staff Sync</i></b></h1>
//         <br/>
//         <h3><i>"Empower your workforce with seamless scheduling,</i></h3>
//         <h3><i>StaffSync - where organization meets efficiency."</i></h3>
//             <button className='loginbutton' onClick={handleonclick}>Login</button>
//       </form>
//     </div>
//   )
// }

// export default Intropage

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Intropage = () => {
    const navigate = useNavigate();

    const handleonclick = (e) => {
        e.preventDefault(); // Prevent the default button action
        navigate('/login');
    };

    return (
        <div className='intropage-container'>
            <div className='intro-card'>
                {/* You can add an image as background or use a separate image tag here */}
                {/* For a background image, you can set it in the CSS */}
            </div>
            <div className='intro-content'>
                <h1><b><i>Staff Sync</i></b></h1>
                <br />
                <h3><i>"Empower your workforce with seamless scheduling,</i></h3>
                <h3><i>StaffSync - where organization meets efficiency."</i></h3>
                <button className='loginbutton' onClick={handleonclick}>Login</button>
            </div>
        </div>
    );
};

export default Intropage;
