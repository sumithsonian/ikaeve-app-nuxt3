// ユーザー関連
export const useIsLoggedInState = () =>
  useState<boolean>('isLoggedInState', () => false)

// me
const initialMe = { id: null }
export const useMeState = () =>
  useState<typeof initialMe>('meState', () => initialMe)
