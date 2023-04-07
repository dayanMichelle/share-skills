"use client";

import { FormEvent,  useRef } from "react";
import type { Search } from "@/types/person";

type PeopleSearch = {
  handlePerson: (search?: Search) => void;
};

function PeopleSearch({ handlePerson }: PeopleSearch) {
  const search = useRef<HTMLInputElement | null>(null);

  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.current) {
      handlePerson({
        skill: search.current.value,
      });
    }
  };

  return (
    <div className="flex my-10 gap-4 flex-col items-center max-w-xs mx-auto">
      {/* Input de búsqueda */}
      <label htmlFor="search">
        Busca tu nuevo profesor para tu nueva skill:
      </label>
      <form onSubmit={onSubmit} className="flex items-center gap-3 flex-row">
        <input
          type="text"
          placeholder="Buscar persona"
          className="px-3 py-2 border rounded-md w-full text-gray-900"
          id="search"
          ref={search}
        />
        {/* Botón de búsqueda */}
        <button className="mt-2 px-3 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-900 ">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default PeopleSearch;
