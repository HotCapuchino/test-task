declare type IRequestParams = {
  [x: string]: string | number | boolean | Array<string | number>;
};

declare type IPaginationParams = {
  page: number;
  per_page: number;
};

declare interface IPaginationResponse {
  total_amount: number;
}

declare interface IResponseData<T> {
  data: T;
  pagination?: IPaginationResponse;
  error?: { message: string };
}

declare type SubtractKeys<T, K> = Omit<T, keyof K>;

declare type Gender = "male" | "female";

declare type OnlineActivity = "active" | "inactive";
