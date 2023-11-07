import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="bg-white   ">
      <div className="flex justify-between md:justify-between h-[66px] px-[30px]  ">
        <ol className=" hidden  md:inline-flex  items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Image
              src="/images/Absence_Icon.svg"
              alt="Accueil"
              className="dark:invert"
              width={38}
              height={38}
              priority
            />
            <div className=" flex items-center pl-[30px]  text-[#494949]  py-[25px] font-medium text-[24px] font-poppins">
              Absence
            </div>
            <div className=" px-[30px]  py-[23px]">
              <Image
                src="/images/stripe2.svg"
                alt="stripe1"
                className="dark:invert"
                width={10}
                height={19}
                priority
              />
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <div className=" py-[23px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-[26px] h-[23px] text-[#858585]"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.543l1.872-7.662 1.872 7.662h-3.744zm-9.756 0L5.25 8.131l-1.872 7.662h3.744z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className=" text-[#858585] pl-[30px]  py-[25px] font-medium text-[18px] font-poppins">
                Sous module
              </div>
              <div className=" px-[30px]  py-[23px]">
                <Image
                  src="/images/stripe2.svg"
                  alt="stripe1"
                  className="dark:invert"
                  width={10}
                  height={19}
                  priority
                />
              </div>
            </div>
          </li>
          <li className="hidden md:block">
            <div className="flex items-center">
              <div className=" text-[#858585]   py-[25px] font-normal text-[16px] font-poppins">
                Sous sous module
              </div>
            </div>
          </li>
        </ol>
        <div className="flex md:hidden">
          <Image
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsupport.manatime.com%2Fhc%2Ffr&psig=AOvVaw241fJ5xo6w3cBHVI57xnL8&ust=1699469377123000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCcgPbGsoIDFQAAAAAdAAAAABAE"
            alt="stripe1"
            className="dark:invert cursor-pointer"
            width={150}
            height={150}
            priority
          />
        </div>
        <div className="flex flex-row-reverse  items-center">
          <div className="flex flex-col items-center">
            <Image
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Fpt%2Ficone%2Favatar-feminino-mulher-pessoa-pessoas-branco-tom%2F159360&psig=AOvVaw3p9yQSt7SfI0lI2TRZqDyz&ust=1699469548907000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIiW-cfHsoIDFQAAAAAdAAAAABAJ"
              alt="stripe1"
              className="dark:invert cursor-pointer hover:opacity-50"
              width={42}
              height={42}
              priority
              onClick={() => {
                setMenu(!menu);
              }}
            />
            {menu && (
              <div className="md:hidden top-[60px] absolute right-2 min-w-min rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className=" flex flex-col items-center border-b border-gray-200 py-2 px-4 text-sm text-gray-700 font-semibold">
                  <p className="text-[#494949] font-normal text-[16px]">
                    Nom et Prenom
                  </p>
                  <p className="text-[#858585] font-normal text-[14px] ">
                    Entreprise
                  </p>{" "}
                </div>

                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                  >
                    Absence
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover-bg-blue-100"
                  >
                    Sous module
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                  >
                    Sous sous module
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="hidden  md:inline-flex  ">
            <div className="flex py-[12px] pr-[10px]">
              <Image
                src="/images/Help.svg"
                alt="stripe1"
                className="dark:invert cursor-pointer"
                width={42}
                height={42}
                priority
              />
            </div>

            <div className="inline-flex py-[12px] pr-[30px]">
              <Image
                src="/images/Settings.svg"
                alt="settings"
                className="dark:invert cursor-pointer"
                width={42}
                height={42}
                priority
              />
            </div>

            <div className="flex flex-col items-center px-[30px] py-[18px] ">
              <p className="text-[#494949] font-normal text-[16px]">
                Nom et Prenom
              </p>
              <p className="text-[#858585] font-normal text-[14px] ">
                Entreprise
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
