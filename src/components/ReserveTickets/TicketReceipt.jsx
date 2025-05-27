import QRCode from '../../assets/QR_Code.png'

const TicketReceipt=()=>{


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
    <p>2, 3, 4</p>

    <p className="font-bold">FROM:</p>
    <p>FAISALABAD</p>

    <p className="font-bold">TO:</p>
    <p>ISLAMABAD</p>

    <p className="font-bold">BUS NO:</p>
    <p>4536</p>
    <p className="font-bold">AMOUNT:</p>
    <p>4800/-</p>
  </div>
</div>

        <div>
            <p className='text-center font-bold'>QR Code</p>
            <img src={QRCode} alt="" className='w-[200px]'/>
        </div>
    </div>
    </>
}

export default TicketReceipt;