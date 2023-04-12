import addData from "@/firebase/addData";
import signIn from "@/firebase/auth/signin";
import signUp from "@/firebase/auth/signup";
import type { Person } from "@/types/person";

type DataPerson = Pick<Person, "name" | "skills" | "wantLearn">;

export async function createUser(uid: string, data: DataPerson) {
  const { result, error } = await addData("users", uid, data);
  return {
    result,
    error,
  };
}

export async function loginUser(email: string, password: string) {
  const { result, error } = await signIn(email, password);
  return {
    result,
    error,
  };
}

export async function signUpUser(email: string, password: string) {
  const { result, error } = await signUp(email, password);
  return {
    result,
    error,
  };
}
