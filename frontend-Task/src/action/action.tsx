export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";

interface IFetchDataRequest {
    type: string;
    payload: Array<Object>;
}
export function fetchDataRequest(data: Array<Object>) {
    return {
      type : FETCH_DATA_REQUEST,
      payload : data
    };
  }