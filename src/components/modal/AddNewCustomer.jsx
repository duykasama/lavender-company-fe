import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../../lib/api/axios";
import { useState } from "react";

function AddNewCustomer({ onCloseModal }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    age: 0,
    status: "unknown",
  });

  const handleAddCustomer = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "/customers",
      {
        headers: {
          Accept: "*/*",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
      { params: formData }
    );
    console.log(formData);
    console.log("Add new customer");
  };

  const handleFormDataChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleAddCustomer}
      className="absolute bg-slate-700 p-10 rounded-lg shadow-lg shadow-black flex flex-col justify-center items-center modal"
    >
      <div className="w-full flex justify-end">
        <button
          onClick={() => onCloseModal()}
          className="p-2 text-2xl text-white rounded-lg hover:shadow-lg hover:shadow-black hover:bg-slate-400 hover:text-black active:scale-95 transition"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <h2 className="text-3xl font-bold text-white mb-12">Add new customer</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-10">
          <label htmlFor="firstName" className="text-white font-semibold">
            First name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleFormDataChange}
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="lastName" className="text-white font-semibold">
            Last name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            onChange={handleFormDataChange}
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="address" className="text-white font-semibold">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={handleFormDataChange}
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between gap-10">
          <label htmlFor="age" className="text-white font-semibold">
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            onChange={handleFormDataChange}
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-between items-center gap-10">
          <label htmlFor="status" className="text-white font-semibold">
            Status
          </label>
          <input
            type="text"
            name="status"
            id="status"
            onChange={handleFormDataChange}
            className="p-1 rounded-md indent-1"
          />
        </div>
        <div className="flex justify-center">
          <button className="w-fit rounded-md py-2 px-6 shadow-md shadow-gray-600 gap-3 bg-slate-500 font-semibold  hover:bg-slate-600 active:scale-95 transition text-white">
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddNewCustomer;
