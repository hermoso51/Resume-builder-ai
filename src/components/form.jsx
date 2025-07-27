
import {useState} from "react";




const ResumeForm = () => {

    const [formData , setformData] = useState({
        name : '',
        experience: '',
        skills: '',
        educationalBackground : ''
    }); 


    return (
        <form className="font-mono ">
            <div className="rounded-sm shadow-sm bg-gray-300 ">
                <label className=" p-6 m-5" htmlFor="name">Name:</label>
                <input className=" p-6 h-8 border-opacity-5 rounded-sm m-5"  type="text" id="name" name="name" placeholder="Input your Full Name" />
                <br />  
                <label className=" p-6 m-5" htmlFor="experience">Job Experience:</label>
                <textarea className=" w-120 p-6 border-opacity-5 rounded-sm m-5" name="experience" id="experience"></textarea>
                <br />
                <label className=" p-6 m-5" htmlFor="skills">Skills: </label>
                <textarea className=" w-120 p-6 border-opacity-5 rounded-sm m-5" name="skills" id="skills"></textarea>
                <br />
                <label className="p-6 m-5" htmlFor="educationalBackground">Education: </label>
                <textarea className=" w-120 p-6  border-opacity-5 rounded-sm m-5" name="educationalBackground" id="educationalBackground"></textarea>
                <br />
            </div>
        </form>
    )


}

export default ResumeForm;