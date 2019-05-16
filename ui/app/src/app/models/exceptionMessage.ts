export interface ExceptionMessage {
    code: number;
    isEsbException: boolean;
    esbErrorCode?: string;
    systemMessage?: string;
    ybpErrorCode?: string;
    innerException?: any;
    exceptionSourceUrlWithQueryString?: string;
    fraudResponseCode?: string;
    parameters?: any;
    description?: string;
    isKnown: boolean;
    backLevel: number;
    historyGoBackCount?: string;
    transactionId: number;
    exceptionType: number;
}
