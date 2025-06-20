import { Link } from "react-router-dom";
import { useFormik, yupToFormErrors } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),

    email: Yup.string().email("Invalid Email").required("Email is required"),

    password: Yup.string()
      .min(4, "Password must be at least 4 characters")
      .required("Password is required"),

    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //     confirm_Password: "",
  //   },
  //   validationSchema: Yup.object({
  //     name: Yup.string().min(3,"Name must be 3 letters").required("Name is required"),
  //     email: Yup.string().email("Invalid email address").required("Email is required"),
  //     password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  //     confirm_Password: Yup.string()
  //       .oneOf([Yup.ref("password"), null], "Passwords must match")
  //       .required("Confirm Password is required"),
  //   }),
  //   onSubmit: (values, { resetForm }) => {
  //     const {name, value}=values;
  //     console.log("values",name, value)
  //     const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  //     existingUsers.push(values);
  //     localStorage.setItem("users", JSON.stringify(existingUsers));
  //     console.log("All users:", existingUsers);
  //     resetForm();
  //   },
  // });
  const handleChange = (e) => {
    const { name, value } = e.target;

    setErrors((preData) => ({
      ...preData,
      [name]: undefined,
    }));
    console.log(name, value);
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validationSchema.validate(user, { abortEarly: false });

    if (user.password == user.confirm_password) {
      console.log("post data working")
      try {
        const response = await fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Success:", data);

          // Optional: Reset the form
          setUser({
            name: "",
            email: "",
            password: "",
            confirm_password: "",
          });
        }

        if (!response.ok) {
          throw new Error({ message: "Failed to send data" });
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    } else {
      alert("Wrong Password");
    }
  };

  return (
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
              Create an account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                             focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {errors.name && <p>{errors.name}</p>}
              </div>

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
                  id="email"
                  value={user.email}
                  onChange={handleChange}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                             focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {/* {formik.touched.email && formik.errors.email && (
                  <div className="text-red-500 text-sm">{formik.errors.email}</div>
                )} */}
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
                  id="password"
                  onChange={handleChange}
                  value={user.password}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                             focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                             dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {/* {formik.touched.password && formik.errors.password && (
                  <div className="text-red-500 text-sm">{formik.errors.password}</div>
                )} */}
              </div>

              <div>
                <label
                  htmlFor="confirm_Password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  value={user.confirm_password}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {/* {formik.touched.confirm_Password && formik.errors.confirm_Password && (
                  <div className="text-red-500 text-sm">{formik.errors.confirm_Password}</div>
                )} */}
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
                <Link
                  to={"/"}
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
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

export default Signup;
