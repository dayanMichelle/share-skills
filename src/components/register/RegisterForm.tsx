"use client";
import signUp from "@/firebase/auth/signup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const [password, setPassword] = useState("");
  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    // Lógica para manejar el inicio de sesión
    e.preventDefault();

    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    if (!error) {
      return router.push("/register/form");
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-80">
        <Link
          href="register/form"
          className="text-3xl font-bold text-center text-gray-900 mb-6"
        >
          Registrarse
        </Link>
        <form onSubmit={handleForm} className="space-y-4 text-gray-900">
          <div>
            <label htmlFor="email" className="">
              Ingresa el correo:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full  px-4 py-3 rounded-md border focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="name" className="">
              Ingresa tu nombre:
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Correo electrónico"
              value={name}
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="">
              ingresa una contraseña:
            </label>
            <input
              type="password"
              className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Contraseña"
              value={password}
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
                if (e.target.value.length < 6) {
                  setError("La contraseña debe tener al menos 6 caracteres");
                  console.log(error);
                } else {
                  setError("");
                }
              }}
            />
            {error && <p className="text-red-600">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-200"
          >
            Regitarse
          </button>
        </form>
        <p className="text-sm mt-4 text-center text-gray-500">
          ¿Ya tienes cuenta?{" "}
          <Link
            href="login"
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
