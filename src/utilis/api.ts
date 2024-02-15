import axios, { AxiosResponse, AxiosError } from "axios";
export const FetchData = async (url: string): Promise<any> => {
  try {
    const config = {
      withCredentials: true,
      header: {
        "Content-Type": "application/json",
      }
    }
    const option={
      url:url,
      method:"GET"
    }
    const proxy="http://localhost:3000/api/proxy/";
    const response: AxiosResponse<any> = await axios.post(proxy,option,config);
    return response;
  } catch (error) {
    const axiosError: any = error;
    console.error("Error feteching data:", AxiosError);
    throw new Error("Error feteching data");
  }
};
export const PostData = async (Option: any, Url: string): Promise<any> => {
  const config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response: AxiosResponse<any> = await axios.post(Url, Option, config);
    return response;
  } catch (error) {
    console.error("Error in Post  data:", AxiosError);
  }
};
export const PutData = async (Option: any, Url: string): Promise<any> => {
  const config = {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response: AxiosResponse<any> = await axios.put(Url, Option, config);
    return response;
  } catch (error) {
    throw error;
  }
};
