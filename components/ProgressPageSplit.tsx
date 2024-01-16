import Icon from "./Icon.tsx";
import ProgressBar from "./ProgressBar.tsx";

export default function ProgressPageSplit(
  props: { completed: number; total: number },
) {
  return (
    <>
      <h2 className="text-xl font-bold">تقدمك في إنجاز الدروس:</h2>
      <div className="flex flex-col gap-2">
        <h1 className="text-sm">
          لقد أنجزت {props.completed} من أصل {props.total} درس
        </h1>
        <ProgressBar
          progress={Math.floor((props.completed / props.total) * 100)}
        />
      </div>
    </>
  );
}
