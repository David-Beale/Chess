export const cameraSlice = (set) => ({
  cameraEnabled: true,
  toggleCamera: () => {
    set((state) => {
      return { cameraEnabled: !state.cameraEnabled };
    });
  },
});
