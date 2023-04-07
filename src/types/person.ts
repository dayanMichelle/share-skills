export interface Person {
  id: number;
  name: string;
  skills: string[];
  img: string;
}
type QueryParams = "skill" | "name";

export type Search = {
    [key in QueryParams]?: string;
  };