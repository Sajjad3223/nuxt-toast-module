import {useToaster} from "./composables/useToaster";
import type {ToastResult} from "../runtime/types";

export const ToastManager = () => {

  const toast = useToaster();
  const addToast = (message:string,hasButtons:boolean = false,hasTimer:boolean = true):Promise<ToastResult> =>{
    return toast.showToast(message,hasButtons,hasTimer);
  }

  return{
    addToast
  }
}
