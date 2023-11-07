"use client";

import React, { useEffect, useState } from "react";

interface ModalProps {
  isOpenAdd: boolean;
  setIsOpenAdd: React.Dispatch<React.SetStateAction<boolean>>;
  updateTableDataFromLocalStorage: () => void;
}
const dateNow = new Date();
const year = dateNow.getFullYear();
const materialDateInput = `${year}`;
console.log(materialDateInput, "rrrrrrrrr");
const Menu = ({
  isOpenAdd,
  setIsOpenAdd,
  updateTableDataFromLocalStorage,
}: ModalProps) => {
  console.log(isOpenAdd, "test");
  const [user, setUser] = React.useState<string>("");
  console.log(user, "default value");

  const [categorie, setCategorie] = React.useState<string>("");
  const [periode, setPeriode] = React.useState<Date>(new Date());
  const [soldeAtuel, setSoldeActuel] = React.useState<number>(0);
  const [soldePris, setSoldePris] = React.useState<number>(0);
  const [soldeFutur, setSoldeFutur] = React.useState<number>(0);

  const handleChangeUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUser(event.target.value);
  };
  const handleCategodie = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategorie(event.target.value);
  };
  const handleSoldeActuel = (e: any) => {
    const newValue = parseFloat(e.target.value);

    if (!isNaN(newValue) && newValue >= 0) {
      setSoldeActuel(newValue);
    } else {
      setSoldeActuel(0);
    }
  };
  const handleSoldePris = (e: any) => {
    const newValue = parseFloat(e.target.value);

    if (!isNaN(newValue) && newValue >= 0) {
      setSoldePris(newValue);
    } else {
      setSoldeActuel(0);
    }
  };
  const handleSoldeFutur = (e: any) => {
    const newValue = parseFloat(e.target.value);

    if (!isNaN(newValue) && newValue >= 0) {
      setSoldeFutur(newValue);
    } else {
      setSoldeActuel(0);
    }
  };

  const handleSaveClick = () => {
    // Récupération des donnees  du localStorage
    const storedData = localStorage.getItem("tableData");
    const existingData = storedData ? JSON.parse(storedData) : [];

    // Créez un nouvel objet pour les données actuelles
    const newData = {
      user,
      categorie,
      periode,
      soldeAtuel,
      soldePris,
      soldeFutur,
    };

    const uniqueKey = `${user}-${categorie}-${periode}`;

    // Vérification de la cle unique
    const isDuplicate = existingData.some((item: any) => {
      return `${item.user}-${item.categorie}-${item.periode}` === uniqueKey;
    });

    console.log(uniqueKey, "unique key");

    if (isDuplicate) {
      alert("Cette Cle est deja prise.");
    } else {
      // Ajoutez les nouvelles données aux données existantes

      existingData.push({ key: uniqueKey, ...newData });

      // Stockez dans le localStorage
      localStorage.setItem("tableData", JSON.stringify(existingData));

      // appel de la fonction pui permet de rafraichir le page apres l'ajout
      updateTableDataFromLocalStorage();
    }
  };
  return (
    <div>
      {isOpenAdd && (
        <div
          className="relative z-40"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                className="relative transform overflow-hidden rounded-lg p-4 bg-white text-left shadow-xl
             transition-all sm:my-8 sm:w-full sm:max-w-lg"
              >
                <form className="w-full max-w-lg" onSubmit={handleSaveClick}>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3 cursor-pointer">
                      <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white ">
                        Client
                      </label>
                      <div className="relative">
                        <select
                          className="appearance-none block w-full bg-white text-gray-700 border  rounded-lg focus:border-blue-500
                          py-3 px-4   focus:outline-none cursor-pointer"
                          id="grid-state"
                          placeholder="Choisir un client"
                          onChange={handleChangeUser}
                          value={user}
                          required
                        >
                          <option></option>
                          <option className="mb-2">Darlene Menson Dujon</option>
                          <option className="mb-2">Marlon Brandon</option>
                          <option className="mb-2">Manapisoa Martin</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white ">
                        Categorie
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border rounded-lg focus:border-blue-500
       py-3 px-4   focus:outline-none "
                        id="grid-first-name"
                        type="text"
                        placeholder="Ex : categorie"
                        onChange={handleCategodie}
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
                        Periode
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border rounded-lg focus:border-blue-500
                        py-3 px-4   focus:outline-none"
                        id="grid-last-name"
                        type="date"
                        placeholder={materialDateInput}
                        onChange={(e) => {
                          setPeriode(new Date(e.target.value));
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
                        Solde actuel
                      </label>

                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border py-3 px-4 focus:outline-none rounded-lg focus:border-blue-500"
                        id="soldeA"
                        type="number"
                        placeholder="123"
                        onChange={handleSoldeActuel}
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
                        Solde pris
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border rounded-lg focus:border-blue-500
                        py-3 px-4   focus:outline-none"
                        id="soldP"
                        type="number"
                        placeholder="123"
                        onChange={handleSoldePris}
                        required
                      />
                    </div>
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                      <label className="block mb-2 text-base font-medium text-gray-900 dark:text-white">
                        Solde futur
                      </label>
                      <input
                        className="appearance-none block w-full bg-white text-gray-700 border rounded-lg  focus:border-blue-500
                        py-3 px-4   focus:outline-none"
                        id="soldeF"
                        type="number"
                        placeholder="123"
                        onChange={handleSoldeFutur}
                        required
                      />
                    </div>
                  </div>
                  <div className=" py-3 sm:flex gap-3 sm:flex-row-reverse ">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center items-center rounded-md bg-red-500 px-4 py-3 text-sm font-semibold text-white
                       shadow-sm  hover:bg-red-600 sm:mt-0 sm:w-auto"
                      onClick={() => {
                        setIsOpenAdd(false);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 mr-2 text-white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Annuler
                    </button>
                    <button
                      type="submit"
                      className="mt-3 inline-flex w-full justify-center items-center rounded-md bg-blue-500 px-4 py-3 text-sm font-semibold
                       text-white shadow-sm  hover:bg-blue-600 sm:mt-0 sm:w-auto"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 mr-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                      Ajouter
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
