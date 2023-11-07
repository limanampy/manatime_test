import Image from "next/image";
import React from "react";

interface MenuProps {
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuModule = ({ isOpenMenu, setIsOpenMenu }: MenuProps) => {
  console.log(isOpenMenu, "tessssssssssssssttttttt");
  return (
    <>
      {isOpenMenu && (
        <div
          className="relative  "
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 backdrop-blur-sm  "
            onClick={() => setIsOpenMenu(false)}
          />

          <div className="fixed inset-0 z-10 pl-[200px]  min-h-min w-screen overflow-y-auto">
            <div className="flex min-h-full  w-[100%]  text-center sm:items-center sm:p-0">
              <div
                className="relative  h-screen rounded-r-[40px] transform overflow-hidden  bg-white text-left
                 shadow-xl transition-all w-[800px]
              "
              >
                <div className="flex flex-col items-center justify-center py-[118px]  bg-white ">
                  <div className="sm:flex sm:items-center">
                    <Image
                      src="/images/Logo.svg"
                      alt="Accueil"
                      className="dark:invert"
                      width={350}
                      height={72.5}
                      priority
                    />
                  </div>
                </div>
                <div className="flex   px-[47px] sm:flex  pt-[73] pb-[243px]">
                  <div className="grid  sm:grid-cols-2  md:grid-cols-4  gap-[6px] w-full">
                    <div
                      className="w-[170px] h-[170px] rounded-[10px] bg-white cursor-pointer border text-[#494949] border-gray-300 hover:border-2
                     hover:border-[#0090F5]  hover:text-[#0090F5]   "
                    >
                      <div className=" flex flex-col px-[40px] py-[30px]">
                        <Image
                          src="/images/Module_Planning.svg"
                          alt="Accueil"
                          className="dark:invert"
                          width={89}
                          height={83}
                          priority
                        />
                        <p className="text-center  text-[20px] font-poppins ">
                          Planning
                        </p>
                      </div>
                    </div>
                    <div className="w-[170px] h-[170px] rounded-[10px] bg-white cursor-pointer border-2 border-[#0090F5]  ">
                      <div className=" flex flex-col px-[40px] py-[30px]">
                        <Image
                          src="/images/Module_Absences.svg"
                          alt="Accueil"
                          className="dark:invert"
                          width={89}
                          height={83}
                          priority
                        />
                        <p className="text-center text-lg text-[#0090F5] text-[20px] font-poppins ">
                          Absences
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-[170px] h-[170px] rounded-[10px] bg-white cursor-pointer border text-[#494949] border-gray-300 hover:border-2
                     hover:border-[#0090F5]  hover:text-[#0090F5]   "
                    >
                      <div className=" flex flex-col px-[40px] py-[30px] ">
                        <Image
                          src="/images/Module_Heures.svg"
                          alt="Accueil"
                          className="dark:invert"
                          width={89}
                          height={83}
                          priority
                        />
                        <p className="text-center  text-[20px] font-poppins ">
                          Heures
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-[170px] h-[170px] rounded-[10px] bg-white cursor-pointer border text-[#494949] border-gray-300 hover:border-2
                     hover:border-[#0090F5]  hover:text-[#0090F5]   "
                    >
                      <div className=" flex flex-col px-[40px] py-[30px]">
                        <Image
                          src="/images/Module_NotedeFrais.svg"
                          alt="Accueil"
                          className="dark:invert"
                          width={89}
                          height={83}
                          priority
                        />
                        <p className="text-center  text-[20px] font-poppins ">
                          Note Frais
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-[170px] h-[170px] rounded-[10px] bg-white cursor-pointer border text-[#494949] border-gray-300 hover:border-2
                     hover:border-[#0090F5]  hover:text-[#0090F5]   "
                    >
                      <div className=" flex flex-col px-[40px] py-[30px]">
                        <Image
                          src="/images/Module_Présence.svg"
                          alt="Accueil"
                          className="dark:invert"
                          width={89}
                          height={83}
                          priority
                        />
                        <p className="text-center  text-[20px] font-poppins ">
                          Présence
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-[170px] h-[170px] rounded-[10px] bg-white cursor-pointer border text-[#494949] border-gray-300 hover:border-2
                     hover:border-[#0090F5]  hover:text-[#0090F5]   "
                    >
                      <div className=" flex flex-col px-[40px] py-[30px]">
                        <Image
                          src="/images/Module_Compétences.svg"
                          alt="Accueil"
                          className="dark:invert"
                          width={89}
                          height={83}
                          priority
                        />
                        <p className="text-center  text-[20px] font-poppins ">
                          Compétences
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-[170px] h-[170px] rounded-[10px] bg-white cursor-pointer border text-[#494949] border-gray-300 hover:border-2
                     hover:border-[#0090F5]  hover:text-[#0090F5]   "
                    >
                      <div className=" flex flex-col  py-[30px]">
                        <div className="px-[40px]">
                          <Image
                            src="/images/Module_SalaireetPAie.svg"
                            alt="Accueil"
                            className="dark:invert"
                            width={89}
                            height={83}
                            priority
                          />
                        </div>
                        <p className=" text-center  text-[20px] font-poppins ">
                          Salaire et Paie
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-[170px] h-[170px] rounded-[10px] bg-white cursor-pointer border text-[#494949] border-gray-300 hover:border-2
                     hover:border-[#0090F5]  hover:text-[#0090F5]   "
                    >
                      <div className=" flex flex-col px-[40px] py-[30px]">
                        <Image
                          src="/images/Module_Entretiens.svg"
                          alt="Accueil"
                          className="dark:invert"
                          width={89}
                          height={83}
                          priority
                        />
                        <p className="text-center  text-[20px] font-poppins ">
                          Entretiens
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-[170px] h-[170px] rounded-[10px] bg-white cursor-pointer border text-[#494949] border-gray-300 hover:border-2
                     hover:border-[#0090F5]  hover:text-[#0090F5]   "
                    >
                      <div className=" flex flex-col px-[40px] py-[30px]">
                        <Image
                          src="/images/Module_Matériels.svg"
                          alt="Accueil"
                          className="dark:invert"
                          width={89}
                          height={83}
                          priority
                        />
                        <p className="text-center  text-[20px] font-poppins ">
                          Matériels
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-[170px] h-[170px] rounded-[10px] bg-white cursor-pointer border text-[#494949] border-gray-300 hover:border-2
                     hover:border-[#0090F5]  hover:text-[#0090F5]   "
                    >
                      <div className=" flex flex-col px-[40px] py-[30px]">
                        <Image
                          src="/images/Mdule_Documents.svg"
                          alt="Accueil"
                          className="dark:invert"
                          width={89}
                          height={83}
                          priority
                        />
                        <p className="text-center  text-[20px] font-poppins ">
                          Documents
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-[170px] h-[170px] rounded-[10px] bg-white cursor-pointer border text-[#494949] border-gray-300 hover:border-2
                     hover:border-[#0090F5]  hover:text-[#0090F5]   "
                    >
                      <div className=" flex flex-col px-[40px] py-[30px]">
                        <Image
                          src="/images/Module_RH.svg"
                          alt="Accueil"
                          className="dark:invert"
                          width={89}
                          height={83}
                          priority
                        />
                        <p className="text-center  text-[20px] font-poppins ">
                          RH
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuModule;
