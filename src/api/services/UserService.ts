import { UserModel } from "api/models/UserModel";
import { HTTPRequestService } from ".";

export class UserService extends HTTPRequestService {
  fetchUsers(
    pagination: IPaginationParams
  ): Promise<IResponseData<UserModel[]>> {
    return this.fetchPaginatedData("/users", pagination);
  }

  findUser(id: number): Promise<IResponseData<UserModel>> {
    return this.axiosInstance.get(`/users/${id}`);
  }
}
