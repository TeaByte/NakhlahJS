import { useEffect, useState } from "preact/hooks";
import ProgressBar from "../components/ProgressBar.tsx";

function Progress() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    console.log(localStorage);
    const done = Object.keys(localStorage).filter((key) => {
      return localStorage.getItem(key) === "done";
    });
    const notdone = Object.keys(localStorage).filter((key) => {
      return localStorage.getItem(key) === "notdone";
    });
    setProgress(done.length / (done.length + notdone.length));
    setDone(done.length);
    setTotal(done.length + notdone.length);
  }, []);
  return (
    <div className="flex flex-col gap-2">
        <h1 className="text-sm">لقد تعلمت {done} من أصل {total} درس</h1>
        <ProgressBar progress={Math.floor(progress * 100)}  />
    </div>
  );
}

export default Progress;
