import { useEffect, useState } from "react";
import axios from "axios"
import { useParams } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";


const CircularProgress = ({ percentage }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const [dashOffset, setDashOffset] = useState(circumference);

  useEffect(() => {
    setDashOffset(circumference - (percentage / 100) * circumference);
  }, [percentage, circumference]);



  return (
    <div className="relative w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90">
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="gray"
          strokeWidth="6"
          fill="transparent"
          opacity="0.2"
        />
        <circle
          cx="50%"
          cy="50%"
          r={radius}
          stroke="pink"
          strokeWidth="6"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <span className="absolute text-xs sm:text-sm md:text-base font-bold text-pink-700">
        {percentage}%
      </span>
    </div>
  );
};

const CartDetailPage = () => {

  // Id Paramas Setted
  const { id } = useParams();

  //-----------Data Getting and Error Handling UseState---------
  const [cartdata, setCartdata] = useState({});
  const [error, setError] = useState(null);

  //-----------UseEffect Database Datas Fetching-----------------
  const fetchdata = async () => {
    try {
      const response = await axios.get(`http://localhost:7000/api/carts/${id}`);
      setCartdata(response.data);
      setError(null);
    } catch (error) {
      setError("Fetching data has encountered an error");
    }
  };

  useEffect(() => {
    fetchdata();
  }, [id]);

  return (
    <>
      <div className="w-full p-4 mt-30">
        <Navbar />
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-6">FUNDING</h1>

          {/* --------------------------GridStart--------------------------- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {error ? (
              <div>Error</div>
            ) : (
              <>
                {/* Left Side */}
                <div className="border border-pink-700 rounded-xl p-4 shadow-md">
                  <img
                    src={cartdata.image}
                    alt="Funding"
                    className="w-full h-auto rounded-xl"
                  />

                  <p className="mt-4 w-full text-gray-700 font-bold text-5xl">
                    {cartdata.title}
                  </p>

                  {/* Rating Section */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-4 mt-6">
                    <div className="flex flex-col items-center">
                      <CircularProgress percentage={30} />
                      <span className="font-bold">Raised</span>
                    </div>
                    <div className="border rounded-lg bg-pink-700 text-white text-center py-3 font-bold">
                      Whatsapp
                    </div>
                  </div>

                  {/* Company Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="border p-4 rounded-lg">
                      <h1 className="text-center font-bold">COMPANY TYPE</h1>
                      <p className="text-center text-pink-700 font-semibold">
                        INFORMATION TECHNOLOGY
                      </p>
                      <p className="text-gray-700 text-sm mt-2">
                        {cartdata.about1}
                      </p>
                    </div>
                    <div className="border p-4 rounded-lg">
                      <h1 className="text-center font-bold">
                        COMPANY DOCUMENT
                      </h1>
                      <img
                        src="/images/Certificate-of-Incorporation-724x1024.jpg"
                        alt="Document"
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  </div>
                </div>

                {/* Right Side */}
                <div className="border border-pink-700 rounded-xl p-6 shadow-md h-210">
                  <h1 className="text-3xl font-bold text-gray-700 text-center">
                    FUND AMOUNT
                  </h1>
                  <h1 className="text-5xl text-center mt-2 font-bold">
                    {cartdata.amount}
                  </h1>

                  {/* Percentage Section */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 text-center mt-6 border border-pink-700 rounded-xl p-4">
                    <div className="flex flex-col items-center">
                      <CircularProgress percentage={30} />
                      <span className="font-bold">Raised</span>
                    </div>
                    <div className="border rounded-lg bg-pink-700 text-white text-center pb-3 pt-6 font-bold text-xl h-20 mt-5">
                      <span className="font-bold">534</span> Supporters
                    </div>
                  </div>

                  {/* QR Scan */}
                  <div className="mt-6 flex justify-center">
                    <img
                      className="border border-pink-700 w-40 sm:w-60"
                      src="/images/scan-me-qr-code_78370-2915.avif"
                      alt="QR Code"
                    />
                  </div>

                  {/* Payment Methods */}
                  <div className="text-2xl text-center mt-6">
                    Clik Here TO Pay
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 border p-4 rounded-lg border-pink-700 ps-14">
                    {[
                      "/images/th.jpeg",
                      "/images/th (5).jpeg",
                      "/images/paytm_logo-freelogovectors.net_.png",
                      "/images/th (3).jpeg",
                    ].map((src, index) => (
                      <div
                        key={index}
                        className="w-16 sm:w-20 h-16 sm:h-20 border border-4 border-pink-700 rounded-full flex items-center justify-center"
                      >
                        <img
                          src={src}
                          className="w-14 sm:w-18 h-14 sm:h-18 rounded-full"
                          alt="Payment"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* ------------------------end--------------------- */}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CartDetailPage;
