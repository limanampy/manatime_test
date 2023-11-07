"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import MenuModule from "../../menu/page";
const SideBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <>
      <div
        className=" relative hidden  md:flex flex-col bg-clip-border  bg-gradient-to-b from-[#094694] via-[#0c61b2] to-[#0281E3]
       h-screen  top-0    md:w-[200px] "
      >
        <nav className="flex z-30 flex-col ">
          <div
            role="button"
            className="flex   w-full px-[84px] py-[17px] h-[66px] border-r  cursor-pointer
              bg-[#FFFFFF] "
            onClick={() => {
              setIsOpenMenu(!isOpenMenu);
            }}
          >
            <Image
              src="/images/Burger_button.svg"
              alt="Accueil"
              className="dark:invert"
              width={32}
              height={32}
              priority
            />
          </div>
          <div
            role="button"
            className="flex justify-between items-center w-full    h-[66px]  cursor-pointer
              bg-[#00A6FF] border-y border-t-[#00A6FF] border-b-[#0084E1]   "
          >
            <div className="flex place-items-center text-start pl-[20px] ">
              <Image
                src="/images/Accueil.svg"
                alt="Accueil"
                className="dark:invert"
                width={22}
                height={22}
                priority
              />
            </div>
            <div className="flex  text-white text-[18px] font-medium  font-poppins   pr-[68px] py-[28px]">
              Accueil
            </div>
          </div>
          <div
            className="flex justify-between  items-center w-full   text-start  h-[66px] cursor-pointer 
              bg-[#00A6FF] border-y border-t-[#00A6FF] border-b-[#0084E1]"
          >
            <div className="flex place-items-center pl-[20px] ">
              <Image
                src="/images/Add.svg"
                alt="Ajouter"
                className="dark:invert"
                width={22}
                height={22}
                priority
              />
            </div>
            <div className="text-white text-[18px] font-medium font-poppins pr-[68px] py-[28px]">
              Ajouter
            </div>
          </div>
          <div
            className="flex justify-between w-full  h-[66px] cursor-pointer
            bg-[#094694] border-b-2 hover:bg-blue-400 border-b-[#0569C2] "
          >
            <div className="flex place-items-center pl-[20px]  ">
              <Image
                src="/images/Mon_espace.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={22}
                height={22}
                priority
              />
              <div className="text-white  text-[15px] font-medium font-poppins  ml-[12px]">
                Mon Espace
              </div>
            </div>
            <div className="flex pr-[15px] ">
              <Image
                src="/images/Stripe.svg"
                alt="Soldes"
                className="dark:invert"
                width={11}
                height={7}
                priority
              />
            </div>
          </div>
          <div
            className="flex justify-between w-full  h-[66px] cursor-pointer
            bg-[#094694] border-b-2 hover:bg-blue-400 border-b-[#0569C2]	"
          >
            <div className="flex place-items-center pl-[20px] ">
              <Image
                src="/images/Validation.svg"
                alt="Validation"
                className="dark:invert"
                width={22}
                height={22}
                priority
              />
              <div className="text-white text-[15px] font-medium font-poppins ml-[12px]">
                Validation
              </div>
            </div>
            <div className="flex pr-[15px] ">
              <Image
                src="/images/Stripe.svg"
                alt="Soldes"
                className="dark:invert"
                width={11}
                height={7}
                priority
              />
            </div>
          </div>
          <div
            className={`flex items-center justify-between w-full  h-[66px] cursor-pointer  ${
              isDropdownOpen
                ? "bg-white"
                : "bg-[#094694] border-b-2 hover:bg-blue-400 border-b-[#0569C2]"
            }`}
            onClick={toggleDropdown}
          >
            <div className="flex place-items-center pl-[20px] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-[22px] h-[22px] text-[#858585] ${
                  !isDropdownOpen ? "text-white " : "text-[#084693]"
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0
                   01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 
                   0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.543l1.872-7.662 1.872 7.662h-3.744zm-9.756 0L5.25 8.131l-1.872 7.662h3.744z"
                  clipRule="evenodd"
                />
              </svg>
              <div
                className={`text-[15px] font-medium font-poppins ml-[12px] ${
                  !isDropdownOpen ? "text-white " : "text-[#084693]"
                } `}
              >
                Soldes
              </div>
            </div>

            {!isDropdownOpen ? (
              <div className="flex pr-[15px] ">
                <Image
                  src="/images/Stripe.svg"
                  alt="Soldes"
                  className="dark:invert"
                  width={11}
                  height={7}
                  priority
                />
              </div>
            ) : (
              <div
                className="flex pr-[15px]
              "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-[15px] h-[15px] text-[#094694]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 15.75l7.5-7.5 7.5 7.5"
                  />
                </svg>
              </div>
            )}
          </div>

          {isDropdownOpen && (
            <ul className="py-2 space-y-2 bg-white h-[227px]  ">
              <li>
                <a
                  href="#"
                  className="flex justify-end pr-[20px] w-full  text-[16px ] font-normal font-roboto text-[#0090F5] text-left 
                   transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
                >
                  Gestion des soldes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex  justify-end pr-[20px] w-full  text-[16px ] font-normal font-roboto text-gray-900 transition 
                  duration-150 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
                >
                  Ajuster un solde
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex justify-end pr-[20px]  w-full px-2 text-[16px ] font-normal font-roboto text-gray-900 transition 
                  duration-150 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
                >
                  compteurs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex  justify-end pr-[20px] w-full  text-[16px ] font-normal font-roboto text-gray-900 transition 
                  duration-150 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
                >
                  Historiques
                </a>
              </li>
            </ul>
          )}

          <div
            className="flex justify-between w-full    h-[66px] cursor-pointer
            bg-[#094694] border-b-2 hover:bg-blue-400 border-b-[#0569C2]	"
          >
            <div className="flex place-items-center pl-[20px]   ">
              <Image
                src="/images/Indicateurs.svg"
                alt="Indicateurs"
                className="dark:invert"
                width={22}
                height={22}
                priority
              />
              <div className="text-white text-[15px] font-medium font-poppins ml-[12px]">
                {" "}
                Indicateurs
              </div>
            </div>
            <div className="flex pr-[15px] ">
              <Image
                src="/images/Stripe.svg"
                alt="Soldes"
                className="dark:invert"
                width={11}
                height={7}
                priority
              />
            </div>
          </div>

          <div
            className="flex justify-between w-full   h-[66px] cursor-pointer
            bg-[#094694] border-b-2 hover:bg-blue-400 border-b-[#0569C2]	 "
          >
            <div className="flex place-items-center pl-[20px]   ">
              <Image
                src="/images/Recherche.svg"
                alt="Recherche"
                className="dark:invert"
                width={22}
                height={22}
                priority
              />
              <div className="text-white text-[15px] font-medium font-poppins ml-[12px] ">
                Recherche
              </div>
            </div>
            <div className="flex pr-[15px]">
              <Image
                src="/images/Stripe.svg"
                alt="Soldes"
                className="dark:invert"
                width={11}
                height={7}
                priority
              />
            </div>
          </div>
        </nav>
        <div className=" absolute z-0 bottom-0 ">
          <Image
            src="/images/Graphic.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={10}
            height={289}
            style={{
              objectFit: "cover",
              width: "100%",
            }}
          />
        </div>
      </div>
      <MenuModule isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
    </>
  );
};

export default SideBar;
