const STORAGE_KEY = "expense-tracker-state";

export const loadState = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return undefined;
    return JSON.parse(raw);
  } catch {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch {}
};
