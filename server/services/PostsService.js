import { dbContext } from '../db/DbContext'

class PostsService {
  async getAllPosts() {
    const posts = await dbContext.Posts.find()
    return posts
  }
}
export const postsService = new PostsService()
