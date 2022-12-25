import { UserModel } from "api/models/UserModel";
import { UserService } from "api/services/UserService";
import { action, makeObservable, observable } from "mobx";
import { BasicStore } from "./BasicStore";

export class UserStore extends BasicStore {
  private remoteSource: UserService = null;
  users: UserModel[] = [];
  selectedUser: UserModel = null;

  constructor(api: UserService) {
    super();
    makeObservable(this, {
      users: observable,
      selectedUser: observable,
      fetchUsers: action,
      findUser: action,
    });
    this.remoteSource = api;
  }

  async fetchUsers(
    pagination: IPaginationParams
  ): Promise<IPaginationResponse> {
    const usersObj = await this.remoteSource.fetchUsers(pagination);
    if (usersObj.error) {
      this.showErrorSnackbar(usersObj.error);
      return Promise.reject();
    } else {
      this.users = usersObj.data;

      return usersObj.pagination;
    }
  }

  async findUser(id: number): Promise<void> {
    const targetIndex = this.users.findIndex((user) => user.id === id);

    if (targetIndex >= 0) {
      this.selectedUser = this.users[targetIndex];
    } else {
      const userObj = await this.remoteSource.findUser(id);
      if (userObj.error) {
        this.showErrorSnackbar(userObj.error);
        return Promise.reject();
      } else {
        this.selectedUser = userObj.data;
      }
    }
  }
}
