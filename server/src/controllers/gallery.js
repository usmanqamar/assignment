import express from 'express'
import {API_BASE, CLIENT_ID} from "../config";
import request from 'request-promise'

class GalleryController {

  registerRoutes() {
    const router = express.Router()
    router.route('*').get(this.getGalleryData())
    return router
  }


  getGalleryData() {
    return async (req, resp, next) => {
      try {
        const { params, query: {showViral} } = req
        const options = {
          uri: `${API_BASE}${params[0]}?showViral=${showViral}`,
          headers: {
            Authorization: `Client-ID ${CLIENT_ID}`,
          },
          json: true
        };

        console.log(options.uri, showViral)

        const result = await request(options)
        resp.json(result)
      } catch (error) {
        next(error)
      }
    }
  }
}
module.exports = new GalleryController()
