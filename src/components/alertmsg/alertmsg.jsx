import { useState } from "react"




const EmergencyMessage=()=>{
const [message, setMessage] = useState({
    name:'',
    email:'',
    message:'',
    busNo:''
})
    const handleChange=(e)=>{

        const {name, value} = e.target;
         setMessage((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));


    }
const handleSubmit=async (e)=>{

  e.preventDefault();
  console.info("message",message);


   const res = await fetch('http://localhost:3001/alert-message',{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(message)
   });
if(res.ok){
  const data = await res.json();
  console.log(data.message);
}
   if(!res.ok){
const data = await res.json();
      console.log("Data", data);
      // toast.error(data.message);
   }
  //  console.log(res);
};

    return <>
     <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Alert Message
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
                      value={message.name}
                      onChange={handleChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    {/* {errors.name && <p>{errors.name}</p>} */}
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
                      value={message.email}
                      onChange={handleChange}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Message
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      value={message.message}
                      onChange={handleChange}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    
                  </div>
                   <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Bus No
                    </label>
                    <input
                      type="text"
                      name="busNo"
                      id="busNo"
                      value={message.busNo}
                      onChange={handleChange}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 
                                 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    
                  </div>
    
                  <button
                    type="submit"
                    className="w-full text-white bg-red-700 focus:outline-none focus:ring-primary-300 font-medium 
                               rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 
                               dark:focus:ring-primary-800"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

    </>
}

export default EmergencyMessage