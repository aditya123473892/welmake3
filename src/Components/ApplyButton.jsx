import React from "react";
import { useState } from "react";

function ApplyButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center items-center">
      <button className="bg-blue-500 p-4  text-white font-baloo font-semibold rounded-md px-4 py-2 text-lg hover:bg-blue-600 transition-all mb-4" onClick={() => setIsModalOpen(true)}>Apply</button>
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
          }}
        >
          <h3 className="text-lg ">Click "Proceed" to share your resume with us on WhatsApp.</h3>
          <div className="flex justify-center items-center mt-6"> 
        <a href="https://api.whatsapp.com/send/?phone=7773003300&text&type=phone_number&app_absent=0 "> <button className="bg-blue-500 p-4  text-white font-baloo font-semibold rounded-md px-4 py-2 text-lg hover:bg-blue-600 transition-all mb-4 mr-4" >Proceed</button>  </a>
         
          <button className="bg-red-500 p-4  text-white font-baloo font-semibold rounded-md px-4 py-2 text-lg hover:bg-red-600 transition-all mb-4" onClick={() => setIsModalOpen(false)}>Close</button>  
          </div>
        
        </div>
      )}
      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 999,
          }}
          onClick={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default ApplyButton;
