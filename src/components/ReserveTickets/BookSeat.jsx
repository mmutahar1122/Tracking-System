import Seat from '../../assets/Bus_seat_Icon/seat-4.svg'
import Driver from '../../assets/Bus_seat_Icon/Driver.svg'
const BookSeat=()=>{

    return <>
    
     <div className="flex justify-center mt-3">
  <p className="text-4xl text-red-700 font-bold border-b-4 inline border-red-700 text-center">
    Reserve Your Seat
  </p>
</div>

 {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    className="svg-icon"
    style={{
      width: "70px",
      height: "70px",
      verticalAlign: 'middle',
      fill: 'currentColor',
      overflow: 'hidden',
      color: "black"
    }}
    viewBox="0 0 1024 1024"
    version="1.1"
  >
    <path d="M853.333333 392.106667l-98.133333 512a42.666667 42.666667 0 0 1-42.666667 34.56H298.666667a85.333333 85.333333 0 0 1-85.333334-62.72l-42.666666-155.306667a42.666667 42.666667 0 0 1 10.666666-42.666667l20.053334-19.626666a42.666667 42.666667 0 0 1 36.266666-12.373334l341.333334 48.64-5.12-32a170.666667 170.666667 0 0 1 26.453333-122.88l120.32-180.48a42.666667 42.666667 0 0 1 36.266667-17.92H810.666667a42.666667 42.666667 0 0 1 42.666666 50.773334zM810.666667 85.333333h-85.333334a42.666667 42.666667 0 0 0-42.666666 52.906667l21.333333 85.333333a42.666667 42.666667 0 0 0 42.666667 32.426667H810.666667a42.666667 42.666667 0 0 0 42.666666-42.666667V128a42.666667 42.666667 0 0 0-42.666666-42.666667z" />
  </svg> */}

<div className="flex w-2/3 mx-auto gap-2 mt-5 mb-2">
    <div className="border rounded-lg">
        <div className="flex gap-3  p-2">
            <div className="h-[70px] w-[70px]  text-center "><img src={Driver} alt="" /></div>

            <div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
                        <br />
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>  
            </div>
            <div>
           <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
                        <br />
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            </div>
            <div>
           <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
                        <br />
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            </div>
            <div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
                        <br />
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            </div>
            <div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
                        <br />
             <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            </div>
            <div>
           <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
                        <br />
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            </div>

            <div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <br />
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            </div>
            <div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
                        <br />
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            <div className="h-[70px] w-[70px]  text-center "><img src={Seat} alt="" /></div>
            </div>
            </div>
        {/* <div className="flex gap-3">
            <div>
            <div>Door</div>
            <div></div>
            </div>
            <div>
            <div>Seat 1</div>
            <div>Seat 2</div>
            </div>
            <div>
            <div>Seat 1</div>
            <div>Seat 2</div>
            </div>
            <div>
            <div>Seat 1</div>
            <div>Seat 2</div>
            </div>
            <div>
            <div>Seat 1</div>
            <div>Seat 2</div>
            </div>
            <div>
            <div>Seat 1</div>
            <div>Seat 2</div>
            </div>
            <div>
            <div>Seat 1</div>
            <div>Seat 2</div>
            </div>
            <div>
            <div>Seat 1</div>
            <div>Seat 2</div>
            </div>
        </div> */}
    </div>
    <div className="p-2"> 
        <p className=' text-red-700 font-bold text-xl'>Detaile</p>
        <div> 
            <div> Reserved (Female) </div> 
            <div>Reserved (Male)</div>
        </div>
<div className='mt-2'>For Refund/Cancelation Kindly Review</div>

<div>Selected Seats</div>

<div>Show here seats</div>

<div className=''>
<div className='flex justify-between font-bold relative bottom-0'>
    <div>Total Price</div>
    <div>2000 RS</div></div>
<button className='w-full bg-red-700 text-white h-12 rounded-lg mt-2'>Continue Booking</button>
</div>
    </div>
</div>

    </>
}


export default BookSeat