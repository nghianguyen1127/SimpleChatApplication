import { toast } from "react-toastify";

export const ToastType = {
  ERROR: "error",
  SUCCESS: "success",
  WARN: "warn",
  INFO: "info",
};

export const showToast = (message = "", type = ToastType.INFO) => {
  return toast[type](message, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
