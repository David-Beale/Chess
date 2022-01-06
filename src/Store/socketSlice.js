export const socketSlice = (set) => ({
  connected: false,
  link: null,
  partnerConnected: false,
  setConnected: (boolean) => set(() => ({ connected: boolean, link: null })),
  setLink: (link) => set(() => ({ link })),
  setPartnerConnected: (boolean) => set(() => ({ partnerConnected: boolean })),
  resetSocket: () => set(() => ({ link: null, partnerConnected: false })),
});
