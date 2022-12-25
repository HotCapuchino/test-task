import React from "react";
import { isNil, isUndefined } from "lodash";
import { PostStore } from "./PostStore";
import { UserStore } from "./UserStore";
import { API } from "api";


class AppStore {
    private static singletoneInstance: AppStore;
    userStore: UserStore;
    postStore: PostStore;

    static init(): AppStore {
        if (isNil(AppStore.singletoneInstance) || isUndefined(AppStore.singletoneInstance)) {
            const singletoneInstance = new AppStore();
            AppStore.singletoneInstance = singletoneInstance;
        }
      
        return AppStore.singletoneInstance;
    }

    private constructor() {
        const api = API.init();

        this.userStore = new UserStore(api.userService);
        this.postStore = new PostStore(api.postService);
    }
}

const appStore = AppStore.init();
const appStoreContext = React.createContext(appStore);
export const useStore = () => React.useContext(appStoreContext);

export function StoreProvider<T extends {children: React.ReactNode}>(obj: T): JSX.Element {
    return <appStoreContext.Provider value={appStore}>{obj.children}</appStoreContext.Provider>
}