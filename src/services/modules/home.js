import HYRequest from '@/services/request'

export function getGoodpriceData() {
  return HYRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighscoreData() {
  return HYRequest.get({
    url: "/home/highscore"
  })
}

export function getHotrecommenddestData() {
  return HYRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getLongforData() {
  return HYRequest.get({
    url: '/home/longfor'
  })
}

export function getHomeDiscountData() {
  return HYRequest.get({
    url: '/home/discount'
  })
}

export function getPlusData() {
  return HYRequest.get({
    url: '/home/plus'
  })
}