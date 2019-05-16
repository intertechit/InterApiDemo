export interface AccountActivity {
        date: string;
        dueDate?: string;
        explanation: string;
        amount: number;
        remainingBalance: number;
        transactionReference: number;
        transactionCode?: string;
        transactionBranchCode: number;
        channelCode?: string;
        time?: string;
        userCode?: string;
        groupRef?: string;
        availableBalance: number;
        referenceNumber?: string;
}
