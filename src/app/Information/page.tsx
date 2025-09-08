'use client';
import React, { useState } from "react";import { useRouter } from "next/navigation";

interface FormData {       
  name: string; email: string; role: string; consent: boolean;
}

const UserPersonalInfoForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", role: "", consent: false,
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, type, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Store form data locally (optional)
    localStorage.setItem("userPersonalInfo", JSON.stringify(formData));

    // Simulate navigation to next page
    router.push("/Main");
  };

return (
  <div className="relative py-10 h-50 flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-7">
      
    <div className="relative z-10 max-w-4xl sm:p-10 md:p-16 lg:p-20 xl:p-28">
        
      <form onSubmit={handleSubmit}
      className="bg-white bg-opacity-30 font-sans shadow-darkBlue p-6 sm:p-8 rounded-lg shadow-lg w-full">
          
      <h1 className="text-xl font-bold text-center text-Red">Registration Form</h1>

      <div className="grid grid-cols-1 gap-1">
            
        <div>
        <label htmlFor="name" className="block text-sm font-medium text-black mb-1">Name</label>
        <input type="text" id="name" name="name" value={formData.name} required onChange={handleChange}
        className="w-full h-9 px-3 py-2 text-sm border border-black rounded focus:outline-none focus:ring-2 focus:ring-Blue"
        placeholder="Enter your name"/>
        </div>

        <div>
        <label htmlFor="email" className="block text-sm font-medium text-black mb-1">Email</label>
        <input type="email" id="email" name="email" value={formData.email} required onChange={handleChange}
        className="w-full h-9 px-3 py-2 text-sm border border-black rounded focus:outline-none focus:ring-2 focus:ring-Blue" 
        placeholder="Enter your email"/>
        </div>

        <div>
        <label htmlFor="role" className="block text-sm font-medium text-black mb-1">Select Your Role</label>
        <select id="role" name="role" value={formData.role} required onChange={handleChange}
        className="w-full h-9 px-3 py-2 text-sm border border-black rounded focus:outline-none focus:ring-2 focus:ring-Blue">
        <option value="" disabled>Select Role</option>
        {[
          "Student", "Mentor", "Parent", "Job Seeker",
         ].map((level) => (
          <option key={level} value={level}>{level}</option>
          ))}
        </select>
        </div>

        <div>
        <label className="flex items-center">
        <input type="checkbox" name="consent" checked={formData.consent} required onChange={handleChange} className="text-white focus:ring-Blue"  />
        <span className="ml-2 mb-1 text-sm font-medium text-black">
          I agree to the terms and conditions.
        </span>
        </label>
        </div>

        <div className="text-center">
        <button type="submit" className="bg-Blue text-white font-semibold py-2 px-10 sm:px-16 md:px-24 lg:px-40 rounded-md hover:bg-opacity-90 transition-all duration-300">
         Submit
        </button>
        </div>
      
      </div>

    </form>

  </div>

</div>
);};
export default UserPersonalInfoForm;