import { useEffect,useState } from "preact/hooks";
export default function Toast({title}: {title: string}) {
  const [show, setShow] = useState<boolean>(false);
  useEffect(() => {
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }, []);
  return (
    <div class={"toast toast-end" + (show ? "" : "hide")}>
      <div class="alert alert-success">
        <span>{title}</span>
      </div>
    </div>
  );
}
