import { useEffect } from "preact/hooks";
import { ToastSignal } from "./signals/store.ts";
export default function Toast() {
  useEffect(() => {
    // You can call showToast here or from any other component
    // showToast('Hello, world!');
  }, []);
  
  return (
    <>
      {ToastSignal.value.show && (
        <div class="toast toast-start mr-4 animation-toast">
          {
            ToastSignal.value.type === "success" ? (
              <div class="alert alert-success">
              <span>{ToastSignal.value.message}</span>
            </div>
            ) : (
              <div class="alert alert-error">
              <span>{ToastSignal.value.message}</span>\
            </div>
            )
          }
        </div>
      )}
    </>
  );
}