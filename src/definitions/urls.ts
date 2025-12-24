export const Url = {
  Instagram: (id: string) => `https://instagram.com/${id}`,
  X: (id: string) => `https://x.com/${id}`,
  GasServer: (deployId: string) =>
    `https://script.google.com/macros/s/${deployId}/exec`,
};
