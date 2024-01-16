import { student, Result } from "./types.ts";

const kv = await Deno.openKv();
export const createStudent = async (): Promise<student> => {
    const student: student = { 
        sessionId: crypto.randomUUID(),
        completedCourses: [],
    }
    const res = await kv.set(["student", student.sessionId], student)
    if (res.ok) {
        return student
    } else {
        return { sessionId: "", completedCourses: [] } as student
    }
}
export const getStudent = async (sessionId: string): Promise<student> => {
    const student = await kv.get(["student", sessionId])
    if (student) {
        return student.value as student
    } else {
        return { sessionId: "", completedCourses: [] } as student
    }
}
export const updateStudent = async (sessionId: string, student: student): Promise<Result> => {
    const res = await kv.set(["student", sessionId], student)
    if (res.ok) {
        return res
    } else {
        return {ok: false} as Result
    }
}
export const addCompletedCourse = async (sessionId: string, course: string) : Promise<Result> => {
    const student = await getStudent(sessionId)
    if (student.completedCourses.includes(course)) {
        return { ok: true }
    }
    const completedCourses = student.completedCourses
    completedCourses.push(course)
    student.completedCourses = completedCourses
    try {
        const res = await updateStudent(sessionId, student)
        return res
    } catch {
        return { ok: false } as Result
    }
}