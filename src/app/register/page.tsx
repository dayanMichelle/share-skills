
import RegisterForm from "@/components/register/RegisterForm";
import addData from "@/firebase/addData";
import { useSearchParams } from "next/navigation";

const page = () => {
  // const skill = useSearchParams.get("skill");

  const handleForm = async () => {
    const data = {
      name: 'John snow',
      house: 'Stark'
    }
    const { result, error } = await addData('users', 'h9HUvRTuLv30p3DsFHQu', data)

    if (error) {
      return console.log(error)
    }
    console.log('exito')
  }
  return (
    <div style={{ marginTop: "-80px" }}>
      <RegisterForm />
    </div>
  );
};

export default page;
