export const getLocal = (name) => {
  console.log('name', localStorage.getItem(name))
  return localStorage.getItem(name)
}
export const setLocal = (name, value) => {
  localStorage.setItem(name, value)
}