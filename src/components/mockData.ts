import type { Student } from "./utils";

export const students: Student[] = [
  {
    id: "1",
    name: "Alice",
    grade: "A",
    courses: [
      { id: "c1", title: "Biology", description: "Intro to Biology" },
      { id: "c2", title: "Chemistry", description: "Basics of Chemistry" },
    ],
  },
  {
    id: "2",
    name: "Bob",
    grade: "B",
    courses: [
      { id: "c3", title: "Physics", description: "Fundamentals of Physics" },
    ],
  },
];
