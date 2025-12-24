export const hashChange = (hash: string) => {
  window.history.pushState({}, "", `#${hash}`);
  const hashEvent = new HashChangeEvent("hashchange");
  window.dispatchEvent(hashEvent);
};
