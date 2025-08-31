import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";

const DriverSignup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    cnic:"",
    pin:"",
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid Email")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
      cnic: Yup.string()
  .matches(/^\d{13}$/, "CNIC must be exactly 13 digits")
  .required("CNIC is required"),
pin: Yup.string()
  .matches(/^\d{4}$/, "Pin must be exactly 4 digits")
  .required("Pin is required"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear error for this field when editing
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
    }));

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Validate form data first
    await validationSchema.validate(user, { abortEarly: false });

    // ✅ Ask for live location before sending signup request
    const allowLocation = window.confirm("Do you want to share your live location?");

    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        console.log("✅ Driver Location:");
        console.log("Latitude:", lat);
        console.log("Longitude:", lng);

        // If location works, then send to backend
        fetch("http://localhost:5000/api/driver/signup-driver", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            confirm_password,
            cnic,
            pin,
            location: {
              type: "Point",
              coordinates: [lng, lat], // ⚠️ longitude first, latitude second
            },
          }),
        })
          .then((res) => res.json())
          .then((data) => console.log("Backend response:", data))
          .catch((err) => console.error("Fetch error:", err));
      },
      (error) => {
        console.error("❌ Geolocation error:", error.message);
      }
    );
  } else {
    console.error("❌ Geolocation is not supported by this browser.");
  } 
  } catch (err) {
    if (err.name === "ValidationError") {
      const newErrors = {};
      err.inner.forEach((validationError) => {
        newErrors[validationError.path] = validationError.message;
      });
      setErrors(newErrors);
    } else {
      console.error("Error:", err.message);
    }
  }
};



  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          Smart Safar
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account 
            </h1>
           <div className="flex gap-2">
            <Link to="/driver-signup"><button
            className="w-50 text-white bg-red-700 focus:outline-none focus:ring-primary-300 font-medium 
                           rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 
                           dark:focus:ring-primary-800"
                           
                           
                           >
                            Driver</button></Link>
           <Link to="/signup"> <button
            className="w-50 text-white bg-red-700 focus:outline-none focus:ring-primary-300 font-medium 
                           rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 
                           dark:focus:ring-primary-800"
                           >User</button></Link>
                           </div>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
              </div>

              <div>
                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  value={user.confirm_password}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.confirm_password && <p className="text-red-500 text-sm">{errors.confirm_password}</p>}
              </div>

    <div>
                <label htmlFor="cnic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Cnic
                </label>
                <input
                  type="number"
                  name="cnic"
                  id="cnic"
                  value={user.cnic}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.cnic && <p className="text-red-500 text-sm">{errors.cnic}</p>}
              </div>
              <div>
                <label htmlFor="pin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Pin
                </label>
                <input
                  type="password"
                  name="pin"
                  id="pin"
                  value={user.pin}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                             focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                             dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                             dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.pin && <p className="text-red-500 text-sm">{errors.pin}</p>}
              </div>
              <button
                type="submit"
                className="w-full text-white bg-red-700 focus:outline-none focus:ring-primary-300 font-medium 
                           rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 
                           dark:focus:ring-primary-800"
              >
                
                Create an account
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link to="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Signin here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DriverSignup;
