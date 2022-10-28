import axios from '../utils/axios'

export const getHome = () => {
  return axios.get('./index-infos')
}