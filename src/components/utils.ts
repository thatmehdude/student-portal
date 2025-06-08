export type Course = {
    id: string;
    title: string;
    description: string;
}

export type Student = {
    id: string
    name: string;
    grade: string;
    courses: Course[];
}