type Month =
  | "enero"
  | "febrero"
  | "marzo"
  | "abril"
  | "mayo"
  | "junio"
  | "julio"
  | "agosto"
  | "septiembre"
  | "octubre"
  | "noviembre"
  | "diciembre";

type Hour =
  | "07:00"
  | "08:00"
  | "09:00"
  | "10:00"
  | "11:00"
  | "12:00"
  | "13:00"
  | "14:00"
  | "15:00"
  | "16:00"
  | "17:00"
  | "18:00"
  | "19:00"
  | "20:00"
  | "21:00"
  | "22:00";

type Status = "reservada" | "disponible";

type BlockHour = {
  id:string;
  hour: Hour;
  status: Status;
  name: "learn" | "teach";
};

type Calendar = {
  [day in number]: BlockHour[];
};

export type MonthCalendar = {
  id: string;
  month: Month;
  year: number;
  calendar: Calendar;
};
