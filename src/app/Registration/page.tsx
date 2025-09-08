'use client';
import React, { useState } from "react";import Link from 'next/link';
 
const RegistrationForm: React.FC = () => {
  const [role, setRole] = useState<string>("");
  const [formData, setFormData] = useState({
    firstname: "", lastname: "", mobilenumber: "", address: "", email: "", role: "", consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };
  
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
};

  return (
  <div className="flex items-center justify-center min-h-screen bg-cover bg-center">  
    <div className="bg-white shadow-darkBlue lg:p-5 p-4 rounded-lg shadow-lg h-full lg:max-w-3xl max-w-84 m-28">
    <h1 className="text-2xl font-bold text-center mb-6 text-Blue"> Registration Form</h1>
        
    <form className="space-y-3" onSubmit={handleSubmit}>
    <div className="form-group">
      <label className="block font-semibold mb-1 text-Blue"> Name</label>
            
      <div className="flex gap-4">
        <input type="text" name="firstname" placeholder="First Name"
        className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-Blue" onChange={handleChange}/>
        <input type="text" name="lastname" placeholder="Last Name"
        className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-Blue" onChange={handleChange}/>
      </div>

    </div>

    <div className="form-group">
      <label className="block font-semibold mb-1 text-Blue">Mobile Number</label>
      <input type="text" name="mobilenumber" placeholder="(000) 000-0000"
      className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-Blue" onChange={handleChange}/>
    </div>

    <div className="form-group">
      <label className="block font-semibold mb-1 text-Blue"> Address</label>
      <input type="text" name="address" placeholder="Street Address"
      className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-Blue" onChange={handleChange}/>
    </div>

    <div className="form-group">
      <label className="block font-semibold mb-1 text-Blue">Email Address</label>
      <input type="email" name="email" placeholder="Email"
      className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-Blue" onChange={handleChange}/>
    </div>

    <div className="form-group">
      <label className="block font-semibold mb-1 text-Blue">Select Your Role</label>
      <select name="role" value={role} onChange={(e) => { setRole(e.target.value); handleChange(e); }}
      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-Blue text-Blue">
      <option value="" disabled>-- Select Role -- </option>
      <option value="student">Student</option>
      <option value="mentor">Mentor</option>
      <option value="parent">Parent</option>
      <option value="job-seeker">Job Seeker</option>
      </select>
    </div>

    <div className="flex justify-between">
      <Link href="/Regist-home">
      <button type="submit" className="bg-Blue text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300">Submit</button>
      </Link>
    </div>

  </form>
</div>
</div>
);};
export default RegistrationForm;

// 'use client';
// import React, { useState } from "react";import Link from 'next/link';

// const RegistrationForm: React.FC = () => {
//   const [role, setRole] = useState<string>("");

//   return (
//     <div>
//     <div className="flex items-center justify-center min-h-screen bg-cover bg-center">
//       <div className="bg-white shadow-darkBlue lg:p-5 p-4 rounded-lg shadow-lg h-full lg:max-w-3xl max-w-84 m-28">
//         <h1 className="text-2xl font-bold text-center mb-6 text-Blue">Registration Form</h1>
//         <form action="#" method="POST" className="space-y-3">
//           <div className="form-group">
//             <label htmlFor="first-name" className="block font-semibold mb-1 text-Blue">Name</label>
//             <div className="flex gap-4">
//               <input type="text" id="first-name" name="first-name" placeholder="First Name"
//               className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-Blue"/>
//               <input type="text" id="last-name" name="last-name" placeholder="Last Name"
//               className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-Blue"/>
//             </div>
//           </div>

//           <div className="form-group">
//             <label htmlFor="mobile-number" className="block font-semibold mb-1 text-Blue">Mobile Number</label>
//             <input type="text" id="mobile-number" name="mobile-number" placeholder="(000) 000-0000"
//             className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-Blue"/>
//           </div>

//           <div className="form-group">
//             <label htmlFor="address" className="block font-semibold mb-1 text-Blue">Address</label>
//             <input type="text" id="address" name="address" placeholder="Street Address"
//             className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-Blue"/>
//           </div>

//           <div className="form-group">
//             <label htmlFor="email" className="block font-semibold mb-1 text-Blue">Email Address</label>
//             <input type="email" id="email" name="email" placeholder="Email"
//             className="w-full px-3 py-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-Blue"/>
//           </div>

//           <div className="form-group">
//             <label htmlFor="role" className="block font-semibold mb-1 text-Blue">Select Your Role</label>
//             <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)}
//             className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-Blue text-Blue">
//               <option value="" disabled> -- Select Role --</option>
//               <option value="student">Student</option>
//               <option value="mentor">Mentor</option>
//               <option value="parent">Parent</option>
//               <option value="job-seeker">Job Seeker</option>
//             </select>
//           </div>

//           <div className="flex justify-between">
//             <Link href="/Regist-home">
//               <button type="submit" className="bg-Blue text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300">Submit</button>
//             </Link>
//           </div>

//         </form>
//       </div>
//   </div>
// </div>
// );};
// export default RegistrationForm;