import getDoument from "@/firebase/getData";
import { Person } from "@/types/person";

type dataType = Pick<Person, "avatar" | "name" | "skills" | "id">



export async function getPerson(collection: string, id: string) {

    const { result, error } = await getDoument(collection, id);

    const data: dataType = {
      name: result?.get("name"),
      skills: result?.get("skills"),
      id: result?.get("2"),
      avatar: result?.get("avatar"),
    };
    return data
}