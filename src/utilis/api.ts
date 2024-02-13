import axios, { AxiosResponse, AxiosError } from "axios";
interface ApiResponse {}
export const FetchData = async (url: string):Promise<any> => {
  try {
    const response: AxiosResponse<any> = await axios.get(url);
    return response.data;
  } catch (error) {
    const axiosError: any = error;
    console.error("Error feteching data:", axiosError.message);
    throw new Error("Error feteching data");
  }
};
