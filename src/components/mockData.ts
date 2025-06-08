import type { Student } from "./utils";

export const students: Student[] = [
  {
    id: "1",
    name: "Alice",
    grade: "A",
    courses: [
      { id: "c1", title: "Mathematics", description: "Advanced Mathematics covering algebra, calculus, and statistics" },
      { id: "c2", title: "Biology", description: "Introduction to Biology - cell structure, genetics, and ecology" },
    ],
  },
  {
    id: "2",
    name: "Bob",
    grade: "B",
    courses: [
      { id: "c3", title: "Physics", description: "Fundamentals of Physics including mechanics, thermodynamics, and electromagnetism" },
      { id: "c4", title: "Chemistry", description: "Basic Chemistry principles and laboratory techniques" },
    ],
  },
  {
    id: "3",
    name: "Cynthia",
    grade: "C",
    courses: [
      { id: "c5", title: "English Literature", description: "Study of classic and contemporary literature" },
      { id: "c6", title: "History", description: "World Wars and Empires" },
    ],
  },
  {
    id: "4",
    name: "Denny",
    grade: "A",
    courses: [
      { id: "c7", title: "Computer Science", description: "Programming fundamentals and software development" },
      { id: "c8", title: "Mathematics", description: "Advanced Mathematics covering algebra, calculus, and statistics" },
    ],
  },
];
