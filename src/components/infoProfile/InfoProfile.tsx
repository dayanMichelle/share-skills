"use client";

import React from "react";
import { useAuthContext } from "@/context/AuthContext";
import { Skills, Avatar } from "@/components";
import { Person } from "@/types/person";

type InfoProfileProps = Pick<
  Person,
  "id" | "name" | "email" | "skills" | "wantLearn"
>;

const InfoProfile = ({
  name = "Dayan Arango",
  email = "correo.com",
  skills = [{ id: "3", name: "Gestión de proyectos" }],
  wantLearn = [{ id: "7", name: "Inglés avanzado" }],
}: InfoProfileProps) => {
  const { user } = useAuthContext();

  return (
    <div className="w-10/12">
      <div className=" mx-auto  text-gray-700 rounded-lg shadow-lg p-8 mt-10 flex gap-4 flex-row items-center w-10/12 bg-white">
        <Avatar />
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold mt-4">{"Prueba"}</h1>
          <p className="text-gray-500 mt-2">{user && user.email}</p>

          {/* <div className="flex flex-row mt-4 gap-3">
            <button className="bg-gray-100 hover:bg-gray-200 text-blue-500 font-semibold py-2 px-4 rounded">
              Message
            </button>
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded">
              Share profile
            </button>
          </div> */}
        </div>
      </div>
      <div className="mt-6">
        <Skills skills={skills} title="Skills" />
        <Skills skills={wantLearn} title="Skills want to learn" />
      </div>
    </div>
  );
};

export default InfoProfile;
