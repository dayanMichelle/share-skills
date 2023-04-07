import { Card } from "@/components/";
import type { Person } from "@/types/person";

type ListCardProps = {
  persons: Person[];
};
export const ListCard = ({ persons }: ListCardProps) => {
  return (
    <div className="grid p-5 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {persons.map(({ name, skills, id, avatar }) => (
        <Card key={id} name={name} avatar={avatar} skills={skills} />
      ))}
    </div>
  );
};
