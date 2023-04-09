"use client";
import Link from "next/link";
import React, { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Lógica para manejar el inicio de sesión
    console.log("Iniciando sesión...");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-md shadow-md w-80">
        <Link
          href="register"
          className="text-3xl font-bold text-center text-gray-900 mb-6"
        >
          Registrarse
        </Link>
        <form className="space-y-4 text-gray-900">
          <div>
            <label htmlFor="" className="">
              Ingresa el correo:
            </label>
            <input
              type="email"
              className="w-full  px-4 py-3 rounded-md border focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="">
              Ingresa tu nombre:
            </label>
            <input
              type="name"
              className="w-full px-4 py-3 rounded-md border focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Correo electrónico"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="">
              ingresa una contraseña:
            </label>
            <input
              type="password"
              className="w-full  px-4 py-3 rounded-md border focus:outline-none focus:border-blue-500 transition duration-200"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Link
            href="#"
            type="button"
            className="w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-md transition duration-200"
            onClick={handleLogin}
          >
            Regitarse
          </Link>
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
