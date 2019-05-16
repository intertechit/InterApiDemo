import { AccountInfo } from './accountInfo';

export interface WireToIbanRequest {
    customerNo?: number;
    explanation?: string;
    amount?: number;
    sourceAccount?: AccountInfo;
    iBANNumber?: string;
    receiverName?: string;
}
