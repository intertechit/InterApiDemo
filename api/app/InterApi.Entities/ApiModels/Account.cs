using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities.ApiModels
{
    public class Account
    {
        public bool IsBlockedAccount { get; set; }
        public string BlockageType { get; set; }
        public bool IsPartialBlockedAccount { get; set; }
        public bool IsAggregatedAccount { get; set; }
        public long AccountSuffix { get; set; }
        public long BranchCode { get; set; }
        public long CustomerNo { get; set; }
        public string ProductCode { get; set; }
        public string OriginalProductCode { get; set; }
        public string ProjectCode { get; set; }
        public string ShortName { get; set; }
        public bool IsClosed { get; set; }
        public bool IsDisplayedOnInternet { get; set; }
        public bool IsAutoInvested { get; set; }
        public string CurrencyCode { get; set; }
        public string AnalysisCode { get; set; }
        public long ReceivableInterestRate { get; set; }
        public long DebtInterestRate { get; set; }
        public long AmountOfBalance { get; set; }
        public long AmountOfBalanceGross { get; set; }
        public long AvailableCaptainBalance { get; set; }
        public long AvailableBalance { get; set; }
        public long AvailableBalanceGross { get; set; }
        public long PreviousDateBalanceGross { get; set; }
        public bool IsPersonnelAccount { get; set; }
        public string AccountName { get; set; }
        public string IbanNo { get; set; }
        public long CaptainAccountFundBalance { get; set; }
        public long CaptainAccountBalance { get; set; }
        public long AvailableCreditDepositBalance { get; set; }
        public bool CaptainAccountFlag { get; set; }
        public string ValueDate { get; set; }
        public string MaturityDate { get; set; }
        public string AccountClosingDate { get; set; }
        public string AccountClosingUserCode { get; set; }
        public string AccountOpenningDate { get; set; }
        public string AccountOpenningUserCode { get; set; }
        public string ReverseBalancePositionFlag { get; set; }
        public string CdaFlag { get; set; }
        public string BlockageCodeName { get; set; }
        public string BlockageName { get; set; }
        public string BlockageReasonCode { get; set; }
        public string BlockageReasonCodeName { get; set; }
        public string BlockageExplanation { get; set; }
        public string BlockageUserCode { get; set; }
        public long BlockageAmount { get; set; }
        public string BlockageMaturityDate { get; set; }
        public string BlockageValueDate { get; set; }
        public long PreviousDateBalance { get; set; }
        public long TotalPartialBlockageAmount { get; set; }
        public long DebitAccuredInterestAmountForKmh { get; set; }
        public long CaptainAvailableBalance { get; set; }
        public string HasSchoolPayment { get; set; }
        public long AvailableCreditDeposit { get; set; }
        public string BatchDate { get; set; }
        public long DelayCount { get; set; }
        public long MinPaymentAmount { get; set; }
        public string LastPaymentDate { get; set; }
        public long DebitAccruedInterestAmount { get; set; }
        public long DayToMaturity { get; set; }
        public long CreditInterestRate { get; set; }
        public long NetInterestAmount { get; set; }
        public long CreditAccruedInterestAmount { get; set; }
        public string RollType { get; set; }
        public bool IsSuitableForIncomeAndOut { get; set; }
        public bool IsPos { get; set; }
        public long CdaCashSuffix { get; set; }
        public long CdaLimit { get; set; }
        public long CdaAvailableLimit { get; set; }
        public bool IsDormantAccount { get; set; }
    }
}
