import React from "react";
import { Search, Upload, Download, Trash2 } from "lucide-react";


const TableActions = ({title, search, setSearch}) => {

  const handleChange = (e) => {
    console.log(e.target.value)
    setSearch(e.target.value)
  }
  return (
    // {/* Table Actions */}
    //   {/*  TODO: functions of Export || Import || Search || Bulk / Delete  */}
    <div className="flex  py-6 w-full px-6  justify-between items-center gap-8 bg-white shadow-lg dark:bg-slate-700 rounded-lg ">
      <button className="flex space-x-2 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
        <Download />
        <span>Exportar</span>
      </button>
      {/* TODO: IMPORT */}
      {/* Search */}
      <div className=" flex-grow ">
        <label htmlFor="table-search" className="sr-only">
          Procurar
        </label>
        <div className="hidden md:relative ">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="table-search"
            value={search}
            onChange={handleChange}
            className="block py-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500 w-full"
            placeholder={`Search for ${title}`}
          />
        </div>
      </div>
      {/* Delete */}
      <button className="flex items-center space-x-2 bg-red-600 text-white rounded-lg px-4 py-3">
        <Trash2 />
        <span>Deletar</span>
      </button>
    </div>
  );
};

export default TableActions;