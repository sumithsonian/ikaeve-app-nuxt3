// 大会関連
export const useTournamentRuleModalState = () =>
  useState<boolean>('tournamentRuleModalState', () => false)
export const useTournamentResultReportModalState = () =>
  useState<boolean>('tournamentResultReportModalState', () => false)
export const useEntryTournamentModalState = () =>
  useState<boolean>('entryTournamentModalState', () => false)
export const useDeleteTournamentModalState = () =>
  useState<boolean>('deleteTournamentModalState', () => false)
export const useCancelTournamentModalState = () =>
  useState<boolean>('cancelTournamentModalState', () => false)

// 大会シリーズ関連
export const useDeleteTournamentSeriesModalState = () =>
  useState<boolean>('deleteTournamentSeriesModalState', () => false)

// team関連
export const useEntryTeamModalState = () =>
  useState<boolean>('entryTeamModalState', () => false)
export const useApprovalTeamMemberModalState = () =>
  useState<boolean>('approvalTeamMemberModalState', () => false)
export const useDeleteTeamMemberModalState = () =>
  useState<boolean>('deleteTeamMemberModalState', () => false)
export const useDeleteTeamModalState = () =>
  useState<boolean>('deleteTeamModalState', () => false)

// プレイヤー関連
export const useDeletePlayerModalState = () =>
  useState<boolean>('deletePlayerModalState', () => false)
export const useLoginModalState = () =>
  useState<boolean>('loginModalState', () => false)
