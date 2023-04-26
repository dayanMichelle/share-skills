"use client";
import { ListCard, PeopleSearch } from "@/components/";
import getDoument from "@/firebase/getData";
import { usePerson } from "@/hooks/usePerson";
import { useState } from "react";

export default function Home() {
  const { persons, handlePerson } = usePerson();
  const [personsList, setPersonsList] = useState([]);
  async function getPerson() {
    const { result, error } = await getDoument(
      "users",
      "C21grsCg78V89BFWr4G1GQ8VngC3"
    );
    console.log(result?.get("name"));
    const data = {
      name: result?.get("name"),
      skills: result?.get("skills"),
      id: result?.get("2"),
      avatar: result?.get("avatar"),
    };
    personsList.push(data);
  }
  getPerson();

  return (
    <>
      <PeopleSearch handlePerson={handlePerson} />
      {}
      <ListCard persons={personsList} />
    </>
  );
}
