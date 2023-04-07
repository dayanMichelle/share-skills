import { NextResponse } from "next/server";
import { listaPersonas } from "./person";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const skill = searchParams.get("skill");

  const personasFiltradas = skill
    ? listaPersonas.filter((persona) =>
        persona.skills.some(({ name }) => name.startsWith(skill))
      )
    : listaPersonas;
  return NextResponse.json(personasFiltradas);
}
