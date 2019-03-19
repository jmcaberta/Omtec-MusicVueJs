import omtecMusicService from './omtec-music.js'

const trackService = {}

trackService.search = function (q) {
  const type = 'track'
  return omtecMusicService.get('/search', {
    params: { q, type }
  })
    .then((res) => res.data)
}

export default trackService
