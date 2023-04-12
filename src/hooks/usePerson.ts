import { useEffect, useState } from "react";
import { getPersons } from "@/services/person";
import type { Person } from "@/types/person";
import type { Search } from "@/types/skill";

export function usePerson() {
  const [persons, setPersons] = useState<Person[]>([]);

  const handlePerson = async (search?: Search) => {
    const response = await getPersons(search);
    setPersons(response);
  };

  useEffect(() => {
    handlePerson();
  }, []);
  return { persons, handlePerson };
}
