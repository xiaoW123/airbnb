import hyRequest from '../request'

export function getEntire() {
  return hyRequest.get({
    url: 'http://codercba.com:1888/airbnb/api/entire/list?offset=0&size=20'
  })
}