export const getLocal = (name) => {
  console.log('name', localStorage.getItem(name))
  return localStorage.getItem(name)
}