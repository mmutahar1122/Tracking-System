import QRcode from '../../assets/QR_Code.png'
import QRCode from 'react-qr-code';
import { useLocation } from 'react-router-dom';
const TicketReceipt=()=>{

    const location = useLocation();
  const { TotalPrice, BusNo, To, From,selectedSeats } = location.state || {};

  // console.log("to,from",To,From)

    return <>
    <div className="border rounded md:w-1/2 mx-auto flex justify-between p-2">
       <div className="max-w-md bg-white">
  <p className="text-center font-bold text-lg mb-4">Details</p>

  <div className="grid grid-cols-2 gap-2 text-sm">
    <p className="font-bold">NAME:</p>
    <p>MUTAHAR ASLAM</p>

    <p className="font-bold">DATE:</p>
    <p>24/05/2025</p>

    <p className="font-bold">TIME:</p>
    <p>10:30 AM</p>

    <p className="font-bold">RESERVED:</p>
    <p>{selectedSeats}</p>

    <p className="font-bold">FROM:</p>
    <p>{From}</p>

    <p className="font-bold">TO:</p>
    <p>{To}</p>

    <p className="font-bold">BUS NO:</p>
    <p>{BusNo}</p>
    <p className="font-bold">AMOUNT:</p>
    <p>{TotalPrice}</p>
  </div>
</div>

        <div>
            <p className='text-center font-bold'>QR Code</p>
    <QRCode value={`Total Seats: ${BusNo}, Total Price: ${TotalPrice}`} className='w-[200px]'/>
            {/* <img src={QRcode} alt="" /> */}
        </div>
    </div>
    </>
}

export default TicketReceipt;