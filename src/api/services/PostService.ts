import { CommentModel } from "api/models/CommentModel";
import { PostModel } from "api/models/PostModel";
import { HTTPRequestService } from ".";

export class PostService extends HTTPRequestService {
  fetchPosts(
    userId: number,
    pagination: IPaginationParams
  ): Promise<IResponseData<PostModel[]>> {
    return this.fetchPaginatedData(`/users/${userId}/posts`, pagination);
  }

  findPost(id: number): Promise<IResponseData<PostModel>> {
    return this.axiosInstance.get(`/posts/${id}`);
  }

  fetchPostComments(id: number): Promise<IResponseData<CommentModel[]>> {
    return this.axiosInstance.get(`/posts/${id}/comments`);
  }
}
