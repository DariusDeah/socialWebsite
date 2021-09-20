import { Auth0Provider } from '@bcwdev/auth0provider'
import { postsService } from '../services/PostsService.js'
import BaseController from '../utils/BaseController'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getPosts)
      .get('/:id', this.getPostsById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPost)
  }

  async getPosts(req, res, next) {
    try {
      const posts = await postsService.getAllPosts()
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }

  async getPostById(req, res, next) {
    try {
      const post = await postsService.getPostsById()
    } catch (error) {

    }
  }

  async createPost(req, res, next) {
    // we need to do this to set the req body creator id to be be auth0 userIfo id so that way the client never sets there own id
    req.body.creatorId = req.userInfo.id
    try {
      const post = await postsService.createPost(req.body)
      res.send(post)
    } catch (error) {
      next(error)
    }
  }
}
