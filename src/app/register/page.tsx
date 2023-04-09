
import RegisterForm from "@/components/register/RegisterForm";

const page = () => {
  // const { user } = useAuthContext();
  // const router = useRouter();
  // useEffect(() => {
  //   if (user == null) router.push("/");
  // }, [user]);
  return (
    <div style={{ marginTop: "-80px" }}>
      <RegisterForm />
    </div>
  );
};

export default page;
