export const notificationsSlice = (set) => ({
  opponentDisconnected: [false],
  setOpponentDisconnect: () => set(() => ({ opponentDisconnected: [true] })),
  errorJoining: [false],
  setErrorJoining: () => set(() => ({ errorJoining: [true] })),
});
