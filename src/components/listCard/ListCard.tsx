import { Card } from "@/components/";
import type { Person } from "@/types/person";

type ListCardProps = {
  persons: Person[];
};
export const ListCard = ({ persons }: ListCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {persons.map(({ name, skills, id, avatar }) => (
        <div key={id} className="flex justify-center">
          <Card id={id} name={name} avatar={avatar} skills={skills} />
        </div>
      ))}
    </div>
  );
};
