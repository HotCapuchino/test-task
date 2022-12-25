import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { get, has, isNil, isUndefined, reduce } from "lodash";

export class HTTPRequestService {
  axiosInstance: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create({
      ...config,
      paramsSerializer: {
        serialize: (params: IRequestParams) => {
          const concatenatedParams = reduce<IRequestParams, Array<string>>(
            params,
            (acc, cur, key) => {
              if (!isNil(cur) && !isUndefined(cur)) {
                if (Array.isArray(cur)) {
                  cur.forEach((val) => {
                    acc.push(`${key}=${String(val)}`);
                  });
                } else {
                  acc.push(`${key}=${String(cur)}`);
                }
              }
              return acc;
            },
            []
          ).join("&");

          return concatenatedParams.length ? concatenatedParams : "";
        },
      },
    });

    this.setInterceptors();
  }

  private setInterceptors(): void {
    this.axiosInstance.interceptors.response.use(
      (response): any => {
        const responseObject: IResponseData<unknown> = {
          data: response.data,
        };

        const paginationResponse: IPaginationResponse = {
          total_amount: null,
        };

        if (has(response.headers, "x-pagination-total")) {
          paginationResponse.total_amount = Number(
            get(response.headers, "x-pagination-total", 0)
          );
          responseObject.pagination = paginationResponse;
        }

        return responseObject;
      },
      (err: AxiosError) => {
        const responseObject: IResponseData<null> = {
          data: null,
          error: {
            message: get(err?.response.data, "message", "Smth went wrong!"),
          },
        };

        return responseObject;
      }
    );
  }

  protected fetchPaginatedData<T, P>(
    url: string,
    params: P extends IPaginationParams ? P : IPaginationParams
  ): Promise<T> {
    return this.axiosInstance.get(url, { params });
  }
}
