import { Course, CourseGroup } from "../utils/types.ts";
import Icon from "./Icon.tsx";

export default function ProgressPageSplit(
    props: { courses: (Course | CourseGroup)[] },
) {
    return (
        <>
            <div className="flex gap-2">
                <h1 className="text-2xl font-bold">مرحباً بك في</h1>
                <Icon />
            </div>
            <p className="text-lg">
                وجهتك الأمثل لاكتساب مهارات جافاسكربت بسهولة وفعالية. رحلة تعليمية شيقة
                تمتد من الأساسيات إلى المستويات المتقدمة
            </p>
            <h2 className="text-xl font-bold">تقدمك في إنجاز الدروس:</h2>
            {/* TODO: Make this a component */}
        </>
    );
}