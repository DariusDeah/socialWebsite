import { postsService } from '../services/PostsService.js'
import BaseController from '../utils/BaseController'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getPosts)
  }

  async getPosts(req, res, next) {
    try {
      const posts = await postsService.getAllPosts()
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }
}
