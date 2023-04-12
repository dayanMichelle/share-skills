import type { Skill } from "@/types/skill";

type SkillsProps = {
  skills: Skill[];
  title: string;
};
export const Skills = ({ skills, title }: SkillsProps) => {
  return (
    <div className="mx-auto text-gray-700  rounded-lg shadow-lg p-8 mt-10 w-10/12 bg-white">
      <h4 className="font-bold mb-3">{title}</h4>
      <ul className="flex flex-row gap-4">
        {skills.map(({ id, name }) => (
          <li key={id} className="border py-2 px-4 rounded">
            {name}
          </li>
        ))}
      </ul>
      <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
        Editar
      </button>
    </div>
  );
};
