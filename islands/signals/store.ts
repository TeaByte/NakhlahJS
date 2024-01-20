import { signal } from "@preact/signals";
export const ToastSignal = signal({ show: false, message: "", type: "" });
export const newPassSignal = signal(0);