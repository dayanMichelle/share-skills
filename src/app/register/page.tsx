"use client";
import RegisterForm from "@/components/register/RegisterForm";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const page = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  useEffect(() => {
    if (user == null) router.push("/");
  }, [user]);
  return (
    <div style={{ marginTop: "-80px" }}>
      <RegisterForm />
    </div>
  );
};

export default page;
