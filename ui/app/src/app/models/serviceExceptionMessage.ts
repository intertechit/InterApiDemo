import { ExceptionMessage } from './exceptionMessage';

export interface ServiceExceptionMessage {
    code: number;
    description?: string;
    parameters?: ExceptionMessage[];
    transactionId: number;
}
