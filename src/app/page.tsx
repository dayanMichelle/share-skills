"use client";
import { ListCard, PeopleSearch } from "@/components/";
import { usePerson } from "@/hooks/usePerson";

export default function Home() {
  const { persons, handlePerson } = usePerson();

  return (
    <>
      <PeopleSearch handlePerson={handlePerson} />
      <ListCard persons={persons} />
    </>
  );
}
