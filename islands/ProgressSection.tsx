import { useEffect, useState } from "preact/hooks";
import ProgressBar from "./ProgressBar.tsx";

export default function ProgressPageSplit(
  props: { total: number; className?: string },
) {
  const [completed, setCompleted] = useState(0);
  useEffect(() => {
    const passedTEXT = localStorage.getItem("passedCourses");
    let passed: string[] = [];
    if (passedTEXT) {
      passed = JSON.parse(passedTEXT);
    }
    setCompleted(passed.length);
  }, []);
  return (
    <div class={"flex-col py-2 " + props?.className}>
      <h2 className="text-xl font-bold pb-2">تقدمك في إنجاز الدروس</h2>
      <ProgressBar
        progress={Math.floor((completed / props.total) * 100)}
      />
    </div>
  );
}
