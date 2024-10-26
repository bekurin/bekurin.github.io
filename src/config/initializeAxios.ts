import axios, { AxiosInstance } from "axios";

let customAxios: AxiosInstance | null = null;

export const initializeAxios = (baseUrl?: string): AxiosInstance => {
  customAxios = axios.create({
    baseURL: baseUrl,
    timeout: 1000,
  });
  return customAxios;
};

export const getAxios = (): AxiosInstance => {
  if (!customAxios) {
    throw new Error("API client is not initialized. Please call initializeAxios first.");
  }
  return customAxios;
};
