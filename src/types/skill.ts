export type Skill = {
  id: string;
  name: string;
};

type QueryParams = "skill" | "name";

export type Search = {
  [key in QueryParams]?: string;
};
