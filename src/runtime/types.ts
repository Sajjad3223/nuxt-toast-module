export interface Toast {
  id: string
  message: string
  resolve: (response: ToastResult) => void
  reject: (response: ToastResult) => void
  hasButtons: boolean
  hasTimer: boolean
}

export interface ToastManager {
  showToast: (message: string, hasButtons: boolean, hasTimer: boolean) => Promise<ToastResult>
}

export enum ToastResult {
  Confirm,
  Cancel,
  Timeout,
}
