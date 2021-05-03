import axios, { AxiosRequestConfig } from 'axios';

const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

export interface AxiosTypedResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: object;
    config: AxiosRequestConfig;
}

export type AxiosTypedPromise<T> = Promise<AxiosTypedResponse<T>>

export const getTransports = (): AxiosTypedPromise<Transport[]> => client.get('transport');

export const getRoutes = (): AxiosTypedPromise<any[]> => client.get('route');

export const createTransportRequest = ({
  transportNumber,
  model,
  transportType,
  purchaseDate,
  mileage,
  status,
}: any): AxiosTypedPromise<any> => client.post('transport/create', {
  transportNumber,
  model,
  transportType,
  purchaseDate,
  mileage,
  status,
});

export const createRouteRequest = ({
  startCity,
  endCity,
  distance,
  departureDate,
  transportType,
  revenue,
  arrivalDate,
  status,
}: any): AxiosTypedPromise<any> => client.post('route/create', {
  startCity,
  endCity,
  distance,
  departureDate,
  transportType,
  revenue,
  arrivalDate,
  status,
});

export const editTransportRequest = ({
  id,
  transportNumber,
  model,
  transportType,
  purchaseDate,
  mileage,
  status,
}: any): AxiosTypedPromise<any> => client.put(`transport/update/${id}`, {
  transportNumber,
  model,
  transportType,
  purchaseDate,
  mileage,
  status,
});

export const editRouteRequest = ({
  id,
  startCity,
  endCity,
  distance,
  departureDate,
  transportType,
  revenue,
  arrivalDate,
  status,
}: any): AxiosTypedPromise<any> => client.put(`route/update/${id}`, {
  startCity,
  endCity,
  distance,
  departureDate,
  transportType,
  revenue,
  arrivalDate,
  status,
});

export const deleteTransportRequest = ({
  id,
}: any): AxiosTypedPromise<any> => client.delete(`transport/delete/${id}`);

export const deleteRouteRequest = ({
  id,
}: any): AxiosTypedPromise<any> => client.delete(`route/delete/${id}`);
