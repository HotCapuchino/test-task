import { CommentModel } from "api/models/CommentModel";
import { PostModel } from "api/models/PostModel";
import { PostService } from "api/services/PostService";
import { action, makeObservable, observable } from "mobx";
import { BasicStore } from "./BasicStore";

export class PostStore extends BasicStore {
  private remoteSource: PostService;
  posts: PostModel[] = [];
  selectedPost: PostModel = null;
  comments: Map<number, CommentModel[]> = new Map();

  constructor(api: PostService) {
    super();
    makeObservable(this, {
      posts: observable,
      selectedPost: observable,
      comments: observable,
      fetchPosts: action,
      findPost: action,
      fetchPostComments: action,
    });
    this.remoteSource = api;
  }

  async fetchPosts(
    userId: number,
    pagination: IPaginationParams
  ): Promise<IPaginationResponse> {
    const postsObj = await this.remoteSource.fetchPosts(userId, pagination);
    if (postsObj.error) {
      this.showErrorSnackbar(postsObj.error);
      return Promise.reject();
    } else {
      this.posts = postsObj.data;

      return postsObj.pagination;
    }
  }

  async findPost(id: number): Promise<void> {
    const targetIndex = this.posts.findIndex((post) => post.id === id);

    if (targetIndex >= 0) {
      this.selectedPost = this.posts[targetIndex];
    } else {
      const postObj = await this.remoteSource.findPost(id);

      if (postObj.error) {
      }
      this.selectedPost = (await this.remoteSource.findPost(id)).data;
    }
  }

  async fetchPostComments(postId?: number): Promise<void> {
    const id = postId || this.selectedPost?.id;

    if (!this.comments.has(id)) {
      const posts = (await this.remoteSource.fetchPostComments(id)).data;
      this.comments.set(id, posts);
    }
  }
}
