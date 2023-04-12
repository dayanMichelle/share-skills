"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { createUser } from "@/services/user";
import { FormStep1 } from "@/components";

const FormNombre = () => {
  const [name, setName] = useState("");
  const { user } = useAuthContext();
  const router = useRouter();

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!user) return;

    const data = {
      name: name,
      skills: [],
      wantLearn: [],
    };

    const { result, error } = await createUser(user.uid, data);
    router.push("/profile");
  };

  return (
    <div>
      <FormStep1 handleForm={handleForm} name={name} setName={setName} />
    </div>
  );
};

export default FormNombre;
