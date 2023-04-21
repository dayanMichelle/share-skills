"use client";
import Link from "next/link";
import signUp from "@/firebase/auth/signup";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import signIn from "@/firebase/auth/signin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-80">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Iniciar sesión
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-gray-900">
          <label htmlFor="email">Ingresa correo:</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-blue-500 transition duration-200"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="">
            Ingresa contraseña:
          </label>
          <input
            name="password"
            id="password"
            type="password"
            className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-blue-500 transition duration-200"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-200"
          >
            Iniciar sesión
          </button>
        </form>
        <p className="text-sm mt-4 text-center text-gray-500">
          ¿No tienes una cuenta?{" "}
          <Link
            href="register"
            className="text-blue-500 hover:text-blue-600 font-semibold"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
