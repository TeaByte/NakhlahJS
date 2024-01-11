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
        <div class="toast text-2xl text-center toast-start mr-4 animation-toast">
          {
            ToastSignal.value.type === "success" ? (
              <div class="alert alert-success">
              <span>{ToastSignal.value.message}</span>
            </div>
            ) : (
              ToastSignal.value.type === "error" ? (
                <div class="alert alert-error">
                <span>{ToastSignal.value.message}</span>
              </div>
              ) : (
                ToastSignal.value.type === "warning" ? (
                  <div class="alert alert-warning">
                  <span>{ToastSignal.value.message}</span>
                </div>
                ) : (
                  ToastSignal.value.type === "info" ? (
                    <div class="alert alert-info">
                    <span>{ToastSignal.value.message}</span>
                  </div>
                  ) : (
                    <div class="alert">
                    <span>{ToastSignal.value.message}</span>
                  </div>
                  )
                )
              )
            )
          }
        </div>
      )}
    </>
  );
}