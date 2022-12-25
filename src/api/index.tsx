import React from "react";
import { AxiosRequestConfig } from "axios";
import { isNil, isUndefined } from "lodash";
import { UserService } from "./services/UserService";
import { PostService } from "./services/PostService";

export class API {
  private static api: API;
  userService: UserService;
  postService: PostService;

  static init(): API {
    if (isNil(API.api) || isUndefined(API.api)) {
      const singletoneInstance = new API();
      API.api = singletoneInstance;
    }

    return API.api;
  }

  private constructor() {
    const config = this.createConfig();

    this.userService = new UserService(config);
    this.postService = new PostService(config);
  }

  private createConfig(): AxiosRequestConfig {
    return {
      baseURL: "https://gorest.co.in/public/v2",
    };
  }
}

const api = API.init();
const apiContext = React.createContext(api);
export const useAPI = () => React.useContext(apiContext);

export function APIProvider<T extends {children: React.ReactNode}>(obj: T): JSX.Element { 
  return <apiContext.Provider value={api}>{obj.children}</apiContext.Provider>
}
