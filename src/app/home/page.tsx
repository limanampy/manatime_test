"use client";
import React, { useEffect, useState } from "react";
import { DashboardLayout } from "../../components/common/Layout/LayoutDashBoard";
import Image from "next/image";
import Menu from "../../components/common/modal/page";

interface RowData {
  key: string;
  user: string;
  categorie: string;
  periode: string;
  soldeAtuel: string;
  soldePris: string;
  soldeFutur: string;
}
const HomePage = () => {
  const [tableData, setTableData] = useState<RowData[]>([]);

  const updateTableDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("tableData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setTableData(parsedData);
    }
  };
  console.log(tableData);

  // Appel de la fonction au chargement du page
  useEffect(() => {
    updateTableDataFromLocalStorage();
  }, []);
  const handleRowClick = (index: number) => {
    const storedData = localStorage.getItem("tableData");
    let existingData = storedData ? JSON.parse(storedData) : [];

    existingData.splice(index, 1);

    localStorage.setItem("tableData", JSON.stringify(existingData));
    updateTableDataFromLocalStorage();
  };
  const [isOpenAdd, setIsOpenAdd] = useState(false);

  return (
    <DashboardLayout>
      <div className="overflow-x-auto rounded-md">
        <table className="w-full border-collapse border border-slate-400 ">
          <thead className="bg-white items-start">
            <tr>
              <th className="border border-slate-300 text-[16px] font-medium font-roboto h-[38px] text-left pl-[15px] min-w-[120px]  w-[450px]">
                Utilisateurs
              </th>
              <th className="border border-slate-300 text-[16px] font-medium font-roboto h-[38px] text-left pl-[15px] min-w-[120px]  w-[450px] ">
                Catégorie
              </th>
              <th className="border border-slate-300 text-[16px] font-medium font-roboto h-[38px] text-left pl-[15px] min-w-[120px] ">
                Période
              </th>
              <th className="border border-slate-300 text-[16px] font-medium font-roboto h-[38px] text-left pl-[15px] min-w-[120px] ">
                Solde actuel
              </th>
              <th className="border border-slate-300 text-[16px] font-medium font-roboto h-[38px] text-left pl-[15px] min-w-[120px] ">
                Solde pris
              </th>
              <th className="border border-slate-300 text-[16px] font-medium font-roboto h-[38px] text-left pl-[15px] min-w-[120px] ">
                Solde futur
              </th>
              <th className="border border-slate-300 text-[16px] font-medium font-roboto h-[38px] text-left  min-w-[270px] "></th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((rowData, index) => (
              <tr
                className={index % 2 === 0 ? "bg-white" : "bg-[#F2F2F2]"}
                key={index}
              >
                <td className="border border-slate-300 text-[16px] font-normal font-roboto h-[38px]  pl-[15px] py-[15px] ">
                  {rowData.user}
                </td>
                <td className="  border border-slate-300 text-[16px] font-normal font-roboto h-[38px] pl-[15px] py-[15px]  ">
                  <div className="flex items-center">
                    {rowData.categorie === "Congés payés" ? (
                      <div className="w-[12px] h-[12px] rounded-full bg-[#FF8851] cursor-pointer mr-[15px]" />
                    ) : (
                      <div className="w-[12px] h-[12px] rounded-full bg-[#A851FF] cursor-pointer mr-[15px]" />
                    )}
                    {rowData.categorie}
                  </div>
                </td>
                <td className="border border-slate-300 text-[16px] font-normal font-roboto h-[38px]  pl-[15px] py-[15px] ">
                  {rowData.periode.substring(0, 4)}
                </td>
                <td className="border border-slate-300 text-[16px] font-normal font-roboto h-[38px]  pl-[15px] py-[15px] ">
                  {rowData.soldeAtuel}
                </td>
                <td className="border border-slate-300 text-[16px] font-normal font-roboto h-[38px]  pl-[15px] py-[15px] ">
                  {rowData.soldePris}
                </td>
                <td className="border border-slate-300 text-[16px] font-normal font-roboto h-[38px]  pl-[15px] py-[15px] ">
                  {rowData.soldeFutur}
                </td>
                <td className="border  border-slate-300   h-[38px]  px-[42px] py-[15px] ">
                  <div className="flex flex-row ">
                    <Image
                      src="/images/ajuster.svg"
                      alt="ajuster"
                      className="dark:invert "
                      width={32}
                      height={32}
                      priority
                    />
                    <Image
                      src="/images/Transferer.svg"
                      alt="Transferer"
                      className="dark:invert mx-[30px]  py-[3px] cursor-pointer"
                      width={32}
                      height={32}
                      priority
                    />
                    <Image
                      src="/images/Solder.svg"
                      alt="Solder"
                      className="dark:invert py-[3px] cursor-pointer"
                      width={32}
                      height={32}
                      priority
                      onClick={() => handleRowClick(index)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div data-dial-init className="fixed z-30  right-4 bottom-4 group">
        <button
          type="button"
          className="flex justify-center items-center w-[52px] h-[52px] text-gray-500
             hover:text-gray-900 bg-white rounded-full border 
             shadow-sm "
          onClick={() => {
            setIsOpenAdd(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
            />
          </svg>
        </button>
      </div>
      <Menu
        isOpenAdd={isOpenAdd}
        setIsOpenAdd={setIsOpenAdd}
        updateTableDataFromLocalStorage={updateTableDataFromLocalStorage}
      />
    </DashboardLayout>
  );
};

export default HomePage;
