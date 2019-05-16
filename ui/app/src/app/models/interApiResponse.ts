import { ServiceExceptionMessage } from './serviceExceptionMessage';

export interface InterApiResponse<T> {
    error: ServiceExceptionMessage;
    data?: T;
    isSuccess: boolean;
}
