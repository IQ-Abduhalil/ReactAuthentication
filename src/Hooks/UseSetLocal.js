export function UseSetLocal(setLocal, setValue) {
  let localItem = window.localStorage.setItem(setLocal, setValue);
  return localItem;
}
