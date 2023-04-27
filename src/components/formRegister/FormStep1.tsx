import { Checkbox } from "@/components";
import { listSkills } from "@/mock/skills";
import { Skill } from "@/types/skill";

type FormStep1Props = {
  name: string;
  setName: (value: string) => void;
  handleForm: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};
export const FormStep1 = ({ name, setName, handleForm }: FormStep1Props) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Formulario de Registro</h1>
      <form
        onSubmit={handleForm}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Ingresa tu nombre:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Paula Lazaro"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="skills"
          >
            Habilidades:
          </label>

          <div className="grid grid-cols-2 gap-4">
            {listSkills.map(({ id, name }: Skill) => (
              <Checkbox
                key={id} // Asegúrate de incluir una clave única para cada iteración del mapa
                skill={name}
              />
            ))}
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="skillsToLearn"
          >
            Habilidades por aprender:
          </label>

          <div className="grid grid-cols-2 gap-4">
            {listSkills.map(({ id, name }) => (
              <Checkbox key={id} skill={name} />
            ))}
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
