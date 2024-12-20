import Card1 from "../assets/Icons/Card1.svg";
import Card2 from "../assets/Icons/card2.png";
import Card3 from "../assets/Icons/CheckFat.png";
import Card4 from "../assets/Icons/Coins.png";
import Card5 from "../assets/Icons/Coin.png";
import Card6 from "../assets/Icons/PiggyBank.png";

import inc from "../assets/Icons/inc.png";
import dec from "../assets/Icons/dec.png";

const cardData = [
    {
      title: "CONSULTATIONS",
      value: 24,
      percentage: "15%",
      status: "Increased",
      image: Card1,
      image1: inc,
    },
    {
      title: "ORDERS PLACED",
      value: 12,
      percentage: "10%",
      status: "Decreased",
      image: Card2,
      image1: dec,
    },
    {
      title: "CONVERSION ",
      value: "50%",
      percentage: "5%",
      status: "Increased",
      image: Card3,
      image1: dec,
    },
    {
      title: "TOTAL SALES VALUE",
      value: "$2,400",
      percentage: "5%",
      status: "Increased",
      image: Card4,
      image1: inc,
    },
    {
      title: "AVG ORDER VALUE",
      value: "$240",
      percentage: "20%",
      status: "Increased",
      image: Card5,
      image1: inc,
    },
    {
      title: "COMMISSION PAID",
      value: "$240",
      percentage: "8%",
      status: "Increased",
      image: Card6,
      image1: inc,
    },
  ];


export const Cards = () =>{
    return(
        <>
        
        <h1 className="text-2xl mb-5">At a glance</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-lg border border-gray-200 h-36 gap-3"
              >
                <div className="flex items-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-2 w-2 object-cover mr-2"
                  />
                  <p className="font-semibold text-gray-400 text-sm ">
                    {card.title}
                  </p>
                </div>

               
                <h3 className="text-3xl text-gray-900 mt-4 ml-3">{card.value}</h3>

                <p className="text-xs text-gray-600 flex items-center mt-2">
                  <span
                    className={`text-${
                      card.status === "Increased" ? "red" : "green"
                    }-500 flex items-center`}
                  >
                    <img
                      src={card.image1}
                      className="h-4 w-4 object-cover mr-1"
                      alt=""
                    />
                    {card.percentage}
                  </span>
                  
                  <span className="text-black ml-2">{card.status}</span>
                </p>
              </div>
              
            ))}
          </div>
        </>
    )
}