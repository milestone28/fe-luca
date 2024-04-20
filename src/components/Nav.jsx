import React, { useState } from "react";

const Nav = () => {
    let Links = [
        { name: "Home", link: "/" },
        { name: "Menu", link: "/" },
        { name: "About us", link: "/" },
        { name: "Careers", link: "/" },
      ];
      const [open, setOpen] = useState(false);
  
  return (
    <div className="shadow-md w-full fixed top-0 left-0 bg-[#F2EDE8]">
      <div className="md:flex items-center bg-[#F2EDE8] justify-between  py-4 md:px-1 px-7  container mx-auto md:px-60">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Gilroy] text-gray-800">
          <span className="text-3xl mr-5 pt-2">
            <img className="h-16 pr-1 mx-auto" src="./img/bread.png" alt="" />
          </span>
          <span className="text-3xl text-[#5B473C]" >Luca's </span>
        </div>

        <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden" onClick={()=>setOpen(!open)}>
        <ion-icon name={open ? 'close' : 'menu'}> </ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#F2EDE8] md:z-auto z-[-1]
        left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl my-7">
              <a
                href={link.link}
                className="text-[#5B473C]  md:flex items-center justify-center hover:bg-[#E2CFCA] hover:text-[#FFFF] duration-500 rounded"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
