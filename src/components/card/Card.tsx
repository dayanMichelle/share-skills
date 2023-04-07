import type { Person } from "@/types/person";

type CardProps = Pick<Person, "name" | "img" | "skills">;

export const Card = ({ name, skills, img }: CardProps) => {
  return (
    <div className="max-w-sm rounded-lg bg-indigo-200 overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover"
        src={img}
        alt="Foto de Persona"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl text-gray-600 mb-2">{name}</div>
        <ul className="flex gap-3  list-disc pl-6">
          {skills?.map((skill) => (
            <li
              key={skill.id}
              className="flex flex-row bg-indigo-400 p-1  rounded-lg text-gray-700 text-base list-none"
            >
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
