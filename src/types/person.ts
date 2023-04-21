import { MonthCalendar } from "@/types/schedule";
import { Skill } from "@/types/skill";



export interface Person {
  id: string;
  name: string;
  email: string;
  avatar: string;
  skills: Skill[];
  wantLearn: Skill[];
  points: number;
  calendar: MonthCalendar[];
}
