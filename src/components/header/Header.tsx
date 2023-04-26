"use client";

import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import logout from "@/firebase/auth/logout";
import React from "react";

export const Header = () => {
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="flex items-center justify-between py-4 px-8">
      <div className="flex items-center">
        {/* <Image width={200} height={200} className="h-8 w-8 text-white" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png" alt="Logo" /> */}
        <Link href="/">
          <img
            className="h-8 w-8 text-white"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
            alt="Logo"
          />
        </Link>

        <h1 className="text-xl font-bold text-white ml-2">
          Share yours skills
        </h1>
      </div>
      <div className="flex gap-2">
        {user ? (
          <>
            <Link
              href="profile"
              className="bg-white hover:bg-gray-200 text-blue-500 font-semibold py-2 px-4 rounded"
            >
              {user.email}
            </Link>
            <Link
              href="/"
              onClick={handleLogout}
              className="bg-white hover:bg-gray-200 text-blue-500 font-semibold py-2 px-4 rounded"
            >
              Log out
            </Link>
          </>
        ) : (
          <Link
            href="login"
            className="bg-white hover:bg-gray-200 text-blue-500 font-semibold py-2 px-4 rounded"
          >
            Iniciar sesión
          </Link>
        )}
      </div>
    </header>
  );
};
