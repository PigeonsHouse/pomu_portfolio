export const hashChange = (hash: string | null) => {
  window.history.pushState({}, "", hash ? `#${hash}` : "/");
  const hashEvent = new HashChangeEvent("hashchange");
  window.dispatchEvent(hashEvent);
};
