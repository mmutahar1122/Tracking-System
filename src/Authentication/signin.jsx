import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Signin = () => {

    const [user, setUser]=useState({ name: "",
    email: "",
    password: "",
    confirm_Password: "",})

    const navigate=useNavigate();


 const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Step 1: Get the existing users array from localStorage
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  const userHa=existingUsers.find(()=>user?.email && user?.password)
  if(userHa){
    navigate('/home');
  }else{
    alert("Incorrect Email & Password")
  }
  console.log("All users:", existingUsers);
  console.log("userHa:", userHa);

  setUser({
    name:'',
    email:'',
    password:'',
    confirm_Password:''
  }
  );
};

  return (
    <>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Smart Safar
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign In
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e)=>changeHandler(e)}
                  />
                </div>
                <div className="relative">
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
    id="password"
    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5
               pr-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
               dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    required
    onChange={(e) => changeHandler(e)}
  />

  <span className="absolute right-3 top-2/3 transform -translate-y-1/2 cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-5 h-5 text-gray-500 dark:text-gray-300"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5
           12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0
           1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0
           1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894
           7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1
           0-4.243-4.243m4.242 4.242L9.88 9.88"
      />
    </svg>
  </span>
</div>

              {/*  <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                   <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div> 
                </div> */}
                <button
                  type="submit"
                  class="w-full text-white bg-red-700 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    onClick={(e)=>handleSubmit(e)}
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <Link
                    to={'/signup'}
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Signup
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
