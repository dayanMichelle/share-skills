"use client";
import { ListCard, PeopleSearch } from "@/components/";
import { usePerson } from "@/hooks/usePerson";
import { getUsers } from "@/services/getAllPersons";
import { useEffect, useState } from "react";


export default function Home() {

  const { handlePerson } = usePerson();
  const [persons, setPersons] = useState()
  async function storeUsers() {
    const persons = await getUsers()
    setPersons(persons)
  }
  useEffect(() => {
    storeUsers()
  }, [])

  return (
    <>
      <PeopleSearch handlePerson={handlePerson} />
      {persons && <ListCard persons={persons} />}

    </>
  );
}
