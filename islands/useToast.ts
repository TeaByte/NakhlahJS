import { ToastSignal } from "./signals/store.ts";
export function useToast() {
  function showToast(msg: string, type: "success" | "error" = "success") {
    ToastSignal.value = { show: true, message: msg, type: type };
    setTimeout(() => {
      ToastSignal.value = { show: false, message: "", type: "success" };
    }, 6000);
  }

  return { showToast };
}