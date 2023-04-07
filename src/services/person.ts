import type { Person, Search } from "@/types/person";

export const getPersons = async (search?: Search): Promise<Person[]> => {
  const url = new URL("http://localhost:3001/api/person");
  url.search = new URLSearchParams(search).toString();
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
