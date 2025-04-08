import React from "react";

const WaitingForDriver = (props) => {
  return (
      <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0" onClick={() => {
          props.setWaitingForDriver(false);
          props.setVehicleFound(false);
        }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <div className="flex items-center justify-between">
      <div className="h-20 w-32 flex justify-center">
    {props.vehicleType === "car" && (
    <img
      className="h-full object-contain"
      src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
      alt="Car"
    />
      )}
    {props.vehicleType === "moto" && (
    <img
      className="h-full object-contain"
      src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
      alt="Moto"
    />
    )}
    {props.vehicleType === "auto" && (
    <img
      className="h-full object-contain"
      src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
      alt="Auto"
    />
    )}
    </div>
        <div className="text-right">
          <h2 className="text-lg font-medium">Aryan</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">UP65 AB 1234</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">52/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Shivpur, Varanasi</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">Pandeypur, Varanasi</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
          <div className='flex mt-5 w-full items-center justify-between'>
          <button onClick={()=>{
            props.setWaitingForDriver(false);
            props.setVehicleFound(false);
          }} className="w-full mt-2 bg-red-600 text-lg text-white font-semibold p-3 rounded-lg">
           Cancle Ride
          </button >
        </div>
        </div>
      </div>
    </div>
)};

export default WaitingForDriver;
