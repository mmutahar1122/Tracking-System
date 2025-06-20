import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { use } from "react";
import { data } from "autoprefixer";

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const responce = await fetch("http://localhost:3001/checkuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (responce.ok) {
      const data = await responce.json();
      console.log("Data", data);
      toast.success(data.message);
      setTimeout(()=>{
      setUser({
        email:'',
        password:''
      })
      navigate("/home");
      },1000)
    }
    if (!responce.ok) {
      const data = await responce.json();
      console.log("Data", data);
      toast.error(data.message);
    }

    console.log("responce", responce);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values, { resetForm }) => {
    const responce = await fetch("http://localhost:3001/checkuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    console.log("responce", responce);

    // const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    // const userFound = existingUsers.find(
    //   (user) => user.email === values.email && user.password === values.password
    // );
    // console.log("userFound",userFound)
    if (responce.ok) {
      toast.success("Signed in successfully!");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } else {
      toast.error("Incorrect Email or Password");
    }

    resetForm();
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Smart Safar
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign In
              </h1>

              <form
                className="space-y-4 md:space-y-6"
                onSubmit={(e) => handleSubmit(e)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                               focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                               dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                               dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {/* <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" /> */}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                               focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 
                               dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                               dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {/* <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" /> */}
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-red-700 focus:outline-none font-medium rounded-lg text-sm 
                             px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 
                             dark:focus:ring-primary-800"
                >
                  Sign in
                </button>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account?{" "}
                  <Link
                    to={"/signup"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Signup
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Signin;
