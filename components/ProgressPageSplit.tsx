import Icon from "./Icon.tsx";
import ProgressBar from "./ProgressBar.tsx";

export default function ProgressPageSplit(
  props: { completed: number; total: number; className?: string },
) {
  return (
    <div class={"flex-col w-1/2" + props?.className}>
      <h2 className="text-xl font-bold py-2">تقدمك في إنجاز الدروس:</h2>
        <ProgressBar
          progress={Math.floor((props.completed / props.total) * 100)}
        />
    </div>
  );
}
