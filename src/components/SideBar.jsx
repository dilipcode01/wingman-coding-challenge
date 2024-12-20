import logo from "../assets/Logo.png";
import Nav from "../assets/navbar1.png";
import Nav2 from "../assets/Nvbar2.png";
import Nav3 from "../assets/UsersFour.svg";
import Nav4 from "../assets/nav4.png";

const Sidebar = () => {
  const Menus = [
    { title: "Dashboard", src: Nav },
    { title: "Users", src: Nav2 },
    { title: "Pie Chart", src: Nav3 },
  ];

  return (
    <div>
      <div className="w-20 bg-custom-green h-[120vh] p-3 pt-6 relative flex flex-col justify-between">
        <div className="flex gap-x-4 items-center">
          <img
            loading="lazy"
            src={logo}
            height={30}
            width={30}
            alt="logo"
            className="cursor-pointer w-8"
          />
        </div>
        <div className="border-t-2 mt-6 border-black bor"></div>

        <div className="flex flex-col gap-y-1 mt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer text-gray-800 text-sm items-center gap-x-4
                  transition duration-300 ease-in-out`}
            >
              <img src={Menu.src} className="h-8 w-6 object-cover" alt="" />
            </li>
          ))}
        </div>

        <div className="mt-auto">
          <ul>
            <li
              key="settings"
              className={`flex rounded-md p-2 cursor-pointer text-gray-800 text-sm items-center gap-x-4
                 hover:text-gray-800 hover:shadow-md transition duration-300 ease-in-out`}
            >
              <img src={Nav4} className="h-12 w-12 object-cover" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
