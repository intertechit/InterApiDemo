import { AccountInfo } from './accountInfo';

export interface WireToAccountRequest {
    CustomerNo: number;
    Explanation?: string;
    Amount: number;
    SourceAccount: AccountInfo;
    DestinationAccount: AccountInfo;
    ReceiverName: string;
}
