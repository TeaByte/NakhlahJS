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
        <div class="toast text-2xl text-center toast-start mr-4 animation-toast z-[1000]">
          {ToastSignal.value.type === "success"
            ? (
              <div class="alert alert-success flex">
                <span>{ToastSignal.value.message}</span>
              </div>
            )
            : (
              ToastSignal.value.type === "error"
                ? (
                  <div class="alert alert-error flex">
                    <span>{ToastSignal.value.message}</span>
                  </div>
                )
                : (
                  ToastSignal.value.type === "warning"
                    ? (
                      <div class="alert alert-warning flex">
                        <span>{ToastSignal.value.message}</span>
                      </div>
                    )
                    : (
                      ToastSignal.value.type === "info"
                        ? (
                          <div class="alert alert-info flex">
                            <span>{ToastSignal.value.message}</span>
                          </div>
                        )
                        : (
                          <div class="alert flex">
                            <span>{ToastSignal.value.message}</span>
                          </div>
                        )
                    )
                )
            )}
        </div>
      )}
    </>
  );
}
