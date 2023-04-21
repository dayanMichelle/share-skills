import Link from "next/link";
import type { Person } from "@/types/person";

type CardProps = Pick<Person, "name" | "avatar" | "skills" | "id">;

export const Card = ({ name, id, skills, avatar }: CardProps) => {
  return (
    <Link href={`user/${id}`}>
      <div className="max-w-sm rounded-lg bg-indigo-200 overflow-hidden shadow-lg">
        <img
          className="h-auto max-w-full rounded-lg"
          src={avatar}
          alt="Foto de Persona"
        />
        <div className="px-6 py-4">
          <div
            style={{ color: "#0B2447" }}
            className="font-bold text-xl capitalize mb-2"
          >
            {name}
          </div>
          <div className="grid grid-flow-col gap-3 overflow-x-auto">
            <ul
              className="flex flex-wrap gap-3 justify-center list-disc pl-6"
              style={{ overflowY: "hidden", scrollbarWidth: "none" }}
            >
              {skills?.map((skill) => (
                <li
                  key={skill.id}
                  className="bg-indigo-400 p-1 h-auto rounded-lg text-white text-base list-none"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Link>
  );
};
