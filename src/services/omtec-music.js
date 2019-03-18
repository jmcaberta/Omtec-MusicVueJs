import trae from 'trae'
import configService from './config'

const omtecMusicService = trae.create({
  baseUrl: configService.apiUrl
})

export default omtecMusicService
