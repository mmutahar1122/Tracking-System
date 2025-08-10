import QRCode from 'react-qr-code';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useRef } from 'react';

const TicketReceipt = () => {
  const location = useLocation();
  const { name,totalPrice, busNo, to, from, seatSelected,date, cnic } = location.state.confirmSeats || {};
  const receiptRef = useRef(null);
console.log("location.state",location.state.confirmSeats);
  const handleDownload = async () => {
    const canvas = await html2canvas(receiptRef.current);
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('ticket-receipt.pdf');
  };

  return (
    <>
      <div className="border rounded md:w-1/2 mx-auto p-2" ref={receiptRef}>
        <div className="flex justify-between">
          <div className="max-w-md bg-white">
            <p className="text-center font-bold text-lg mb-4">Details</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="font-bold">NAME:</p>
              <p>{name}</p>

              <p className="font-bold">DATE:</p>
              <p>{date}</p>

              <p className="font-bold">TIME:</p>
              <p>10:30 AM</p>

              <p className="font-bold">SEAT NO:</p>
              <p>{seatSelected?.join(', ')}</p>

              <p className="font-bold">FROM:</p>
              <p>{from}</p>

              <p className="font-bold">TO:</p>
              <p>{to}</p>

              <p className="font-bold">BUS NO:</p>
              <p>{busNo}</p>

              <p className="font-bold">AMOUNT:</p>
              <p>{totalPrice}</p>
            </div>
          </div>

          <div>
            <p className="text-center font-bold">QR Code</p>
            <QRCode
              value={`Bus No: ${busNo}, Total Price: ${totalPrice}, CNIC: ${cnic}`}
              className="w-[200px]"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={handleDownload}
          className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
        >
          Download Receipt
        </button>
      </div>
    </>
  );
};

export default TicketReceipt;
