"use client";
import { useRouter } from "next/navigation";
import React from "react";

const FormNombre = () => {
  const router = useRouter();
  return (
    <div>
      <label htmlFor="name">Ingrese nombre;</label>
      <input type="text" placeholder="Ingrese nombre..." />
      <button onClick={() => router.push("/profile")} type="submit">
        enviar
      </button>
    </div>
  );
};

export default FormNombre;
