interface IResponse {
  status: boolean;
  meta: {
    code: number;
    message: string;
  };
  data: Object | Object[];
}
