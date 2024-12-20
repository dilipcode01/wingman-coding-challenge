import btn1 from "../assets/Buutttons/btn1.png";
import btn2 from "../assets/Buutttons/btn2.png";
import btn3 from "../assets/Buutttons/btn3.png";


const buttons = [
    { tittle: "Summary", img: btn2 , backgrindcolor:"#CCFBEF" },
    { tittle: "Sales", img: btn3 },
    { tittle: "Chats", img: btn1 },
  ];


export  const Buttons = () =>{
    return (
        <div className="inline-flex pl-1 flex-wrap gap-4" role="group">
          {buttons.map((item) => (
            <button
              type="button"
              className={`
                inline-flex items-center
             px-4 py-2 text-sm 
             font-medium
              text-gray-900
              ${item.backgrindcolor ? `bg-light-gren rounded-full` : 'bg-white rounded-full'}  // Conditional background
              
                hover:bg-light-gren
                 hover:text-black 
                 focus:z-10 focus:ring-2
                  focus:ring-light-gren
                   focus:text-black
                    dark:bg-white-800
                     dark:text-black
                      dark:hover:light-gren
                     
                        dark:focus:text-white p-7
                `}
                        
                        
            >
              <img src={item.img} className="h-4 w-4 object-cover mr-1" alt=""/>
              {item.tittle}
            </button>
          ))}
        </div>


       

    )
}