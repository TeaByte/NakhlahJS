export interface Course {
  slug: string;
  title: string;
  content: string;
  snippet: string;
  order: number;
}

export interface CourseGroup {
  courses: Course[];
  order: number;
  label: string;
  lableSlug: string;
}

export interface CourseAttributes {
  title: string;
  snippet: string;
  order: number;
}

export interface student {
  sessionId: string;
  completedCourses: string[];
}

export interface Result {
  ok: boolean;
}
