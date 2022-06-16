// ユーザー関連
export const useIsLoggedInState = () =>
  useState<boolean>('isLoggedInState', () => false)

// me
const initialMe = {}
export const useMeState = () =>
  useState<typeof initialMe>('meState', () => initialMe)
