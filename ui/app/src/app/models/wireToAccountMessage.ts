import { AccountInfo } from './accountInfo';

export interface WireToAccountMessage {
    transactionCode?: string;
    transactionSavingToken?: string;
    forceDuplicate?: string;
    ExpenseAmount?: number;
    sourceAccount?: AccountInfo;
    transactionDate?: string;
    ccountingReference?: number;
    transactionId?: number;
    state?: number;
    creditInfoForConfirmations?: string;
    confirmationToken?: string;
    requiredConfirmationType?: number;
    mobilePhoneNumber?: string;
    canUserCommitTransaction?: boolean;
}
