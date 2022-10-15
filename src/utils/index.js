import {VUE_APP_API_KEY, API_URL, IMG_URL, SEARCH_URL} from '@/constans'

export const generateUrl = path => `${API_URL}${path}?api_key=${VUE_APP_API_KEY}`
export const generateSearchUrl = query => `${SEARCH_URL}?api_key=${VUE_APP_API_KEY}&query=${query}`
export const generateImageUrl = path => `${IMG_URL}${path}`
export const generateBackgroundImgUrl = path => `${BCKGRND_IMG_URL}${path}`

export const convertDate = date => new Date(date).toDateString()
export const generateRaiteng = vote => vote/2

export const calculatePopularity = popularity => Math.round(popularity / 100)
export const isEmpty = dataArray => dataArray.length === 0