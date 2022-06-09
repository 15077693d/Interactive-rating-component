import * as starImgSrc from './images/icon-star.svg'
import * as paymentImgSrc from './images/illustration-thank-you.svg'

// preload image
;[starImgSrc, paymentImgSrc].map((src) => {
  const img = new Image()
  img.src = src.default
})
export { starImgSrc, paymentImgSrc }
