using InterApi.Entities.ApiModels.Request;
using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities.ApiModels
{
    public class WireToAccountMessage
    {
        public string TransactionCode { get; set; }
        public string TransactionSavingToken { get; set; }
        public bool ForceDuplicate { get; set; }
        public long ExpenseAmount { get; set; }
        public AccountInfo SourceAccount { get; set; }
        public string TransactionDate { get; set; }
        public long AccountingReference { get; set; }
        public long TransactionId { get; set; }
        public long State { get; set; }
        public string CreditInfoForConfirmations { get; set; }
        public string ConfirmationToken { get; set; }
        public long RequiredConfirmationType { get; set; }
        public string MobilePhoneNumber { get; set; }
        public bool CanUserCommitTransaction { get; set; }
    }
}
