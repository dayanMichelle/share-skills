import { NextResponse } from "next/server";
import { listaPersonas } from "./person";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const skill = searchParams.get("skill"); // Obtiene el valor del parámetro de URL 'skill'

  // Filtra el array de personas por habilskillad si se proporciona el parámetro 'skill'
  const personasFiltradas = skill
    ? listaPersonas.filter((persona) => persona.skills.includes(skill))
    : listaPersonas;
  return NextResponse.json(personasFiltradas)
}
