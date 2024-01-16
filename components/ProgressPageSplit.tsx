import Progress from "../islands/Progress.tsx";
import Icon from "./Icon.tsx";
import ProgressBar from "./ProgressBar.tsx";

export default function ProgressPageSplit(props: { completed: number, total: number }) {
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
      <div className="flex flex-col gap-2">
        <h1 className="text-sm">لقد تعلمت {props.completed} من أصل {props.total} درس</h1>
        <ProgressBar progress={Math.floor((props.completed / props.total) * 100)} />
      </div>
    </>
  );
}
