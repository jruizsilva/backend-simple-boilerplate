import { Schema, model } from 'mongoose'
import { Post } from '../interfaces'

const PostSchema = new Schema<Post>({
  content: {
    type: String,
    required: true
  }
})

const PostModel = model('posts', PostSchema)
