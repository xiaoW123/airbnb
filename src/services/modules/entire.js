import hyRequest from '../request'

export function getEntire(offset = 0, size = 20) {
  return hyRequest.get({
    url: '/entire/list',
    params: {
      offset,
      size
    }
  })
}