import { MonthCalendar } from "@/types/schedule";

const enero_2023: MonthCalendar = {
  id: "1",
  month: "enero",
  year: 2023,
  calendar: {
    1: [
      { id: "5", hour: "07:00", status: "disponible", name: "teach" },
      { id: "6", hour: "08:00", status: "reservada", name: "learn" },
    ],

    3: [
      { id: "7", hour: "10:00", status: "disponible", name: "teach" },
      { id: "8", hour: "11:00", status: "reservada", name: "learn" },
    ],
  },
};

const febrero_2023: MonthCalendar = {
  id: "2",
  month: "febrero",
  year: 2023,
  calendar: {
    1: [
      { id: "1", hour: "07:00", status: "disponible", name: "teach" },
      { id: "2", hour: "08:00", status: "reservada", name: "learn" },
    ],
    3: [
      { id: "3", hour: "10:00", status: "disponible", name: "teach" },
      { id: "4", hour: "11:00", status: "reservada", name: "learn" },
    ],
  },
};

export const monthCalendar: MonthCalendar[] = [enero_2023, febrero_2023];
