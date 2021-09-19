import { dbContext } from '../db/DbContext'

class PostsService {
  async createPost(postData) {
    const post = await dbContext.Posts.create(postData)
    return post
  }

  async getAllPosts() {
    const posts = await dbContext.Posts.find()
    return posts
  }
}
export const postsService = new PostsService()
