

import axios, { AxiosInstance,AxiosResponse,AxiosRequestConfig } from "axios";


class ApiBuilder {
  private client: AxiosInstance;

  constructor(baseURL: string) {
    this.client = this.getAxiosInstance(baseURL);
  }

  public get<D>(url: string, config?: AxiosRequestConfig):Promise<AxiosResponse<D, any>> {
    return this.client.get<D>(url, config);
  }
  public post(url: string, data?: any,config?: AxiosRequestConfig):Promise<AxiosResponse<any, any>> {
    return this.client.post(url, data,config);
  }
  public put(url: string, data?: any,config?: AxiosRequestConfig):Promise<AxiosResponse<any, any>> {
    return this.client.put(url, data,config);
  }

  public patch(url: string, data?: any,config?: AxiosRequestConfig) :Promise<AxiosResponse<any, any>>{
    return this.client.patch(url, data,config);
  }

  public delete(url: string, config?: AxiosRequestConfig) {
    return this.client.delete(url, config);
  }

  private getAxiosInstance(baseURL:string): AxiosInstance {
    return axios.create({
      baseURL,
    });
  }

}



export { ApiBuilder };
