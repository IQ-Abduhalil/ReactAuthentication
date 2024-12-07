export function UseGetLocal(getLocal) {
  let local = window.localStorage.getItem(getLocal);
  return local;
}
