import firebase_app from "@/firebase/config";
import { Person } from "@/types/person";
import { collection, query, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(firebase_app);

type ListPersons = Pick<Person, "avatar" | "id" | "skills" | "name">
export async function getUsers() {
    const q = query(collection(db, "users"));

    const querySnapshot = await getDocs(q);
    const listPersons: ListPersons[] = []

    querySnapshot.forEach((doc) => {
        const person = ({
            id: doc.id,
            avatar: doc.data().avatar,
            name: doc.data().name,
            skills: doc.data().skills,
        });
        listPersons.push(person)
    });

    return listPersons
}