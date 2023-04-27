"use client"

import { getPerson } from "@/services/getPerson";
import { Person } from "@/types/person";
import React, { useEffect, useState } from "react"

type dataType = Pick<Person, "avatar" | "name" | "skills" | "id"> | null


export default function Home() {

  const [person, setPerson] = useState<dataType>(null);
  async function getPersonId() {
    const personData = await getPerson("users", "C21grsCg78V89BFWr4G1GQ8VngC3");
    setPerson(personData)
  }

  useEffect(() => {
    getPersonId()
  }, [])
  return <h1>{person?.name}</h1>;
}
