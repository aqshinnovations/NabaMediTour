import { toast } from "react-toastify";
import type { TypeOptions } from "react-toastify";

const customId = "custom-id-yes";

export const showToast = (type: TypeOptions = "success", msg: string): void => {
  if (type === "success") {
    toast.success(msg, {
      theme: "colored",
      toastId: customId,
    });
  }

  if (type === "error") {
    toast.error(msg, {
      theme: "colored",
      toastId: customId,
    });
  }
};

export const showSuccess = (msg: string): void => {
  showToast("success", msg);
};

export const showError = (msg: string): void => {
  showToast("error", msg);
};
