export interface Course {
  slug: string;
  title: string;
  content: string;
  snippet: string;
  order: number;
}

export interface CourseGroup {
  courses: Course[];
  order?: number;
  label?: string;
}
