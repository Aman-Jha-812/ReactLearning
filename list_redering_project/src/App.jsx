import "./App.css";
import data from "./data.json";

function App() {
  return (
    <>
      <div className="w-full flex flex-col gap-7 p-6">
        {data.map((phoneDetails, index) => {
          return (
            <div key={index} className="flex bg-gray-800 p-3 rounded-xl">
              {/* image */}
              <div className="w-1/4 items-center justify-center">
                <img src={phoneDetails.image} alt="" />
              </div>

              {/* deatils */}
              <div className="flex-1 text-white">
                <h1>{phoneDetails.title}</h1>
                <p className="my-1">⭐{phoneDetails.rating} || {phoneDetails.reviews}</p>
                
                <ul>{phoneDetails.details.map((items,index)=>{
                    return <li className="list-disc ml-6" key={index}>{items}</li>
                })}</ul>

                <p className="text-green-500">{phoneDetails.offers.exchangeOffer}</p>
                <p className="text-green-500 mt-2">{phoneDetails.offers.bankOffer}</p>


              </div>
              {/* pricing */} 
              <div className="text-white flex flex-col items-end mt-25"><h1 className="text-2xl font-bold">{phoneDetails.price}</h1>
              <p className="line-through">{phoneDetails.originalPrice}</p>
              <p className="text-green-500">{phoneDetails.discount}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
