import axios, { AxiosInstance } from 'axios';

export class HttpClient {
  private constructor() {}
  public static httpClient: HttpClient;
  private instance!: AxiosInstance;

  public static getHttpClient(): HttpClient {
    if (!HttpClient.httpClient) {
      HttpClient.httpClient = new HttpClient();
    }
    if (!HttpClient.httpClient.instance) {
      HttpClient.httpClient.instance = axios.create({
        baseURL: ' http://core.sdp:7000/',
        timeout: 5000,
        headers: {},
      });
    }
    return HttpClient.httpClient;
  }

  public async post(url: string, body?: object) {
    return this.instance.post(url, body);
  }
  public async get(url: string, queryParams?: object) {
    return this.instance.get(url, { params: queryParams });
  }
}
