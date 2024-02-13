import axios, { AxiosResponse, AxiosError } from "axios";
interface ApiResponse { }
export const FetchData = async (url: string): Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(url);
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
      'Content-Type': 'application/json',
    },
  };
  try {
    const response: AxiosResponse<any> = await axios.post(Url, Option, config);
    return response;
  } catch (error) {
    console.error("Error in Post  data:", AxiosError);
  }
}