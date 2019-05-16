using InterApi.Entities.ApiModels.Request;
using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities.ApiModels
{
    public partial class WireToIBANMessage
    {        
        public string TransactionCode { get; set; }
        public object TransactionSavingToken { get; set; }
        public bool ForceDuplicate { get; set; }
        public long ExpenseAmount { get; set; }
        public AccountInfo SourceAccount { get; set; }
        public DateTimeOffset TransactionDate { get; set; }
        public long AccountingReference { get; set; }
        public long TransactionId { get; set; }
        public long State { get; set; }
        public object CreditInfoForConfirmations { get; set; }
        public object ConfirmationToken { get; set; }
        public long RequiredConfirmationType { get; set; }
        public object Otp { get; set; }
        public object MobilePhoneNumber { get; set; }
        public bool CanUserCommitTransaction { get; set; }
    }
}
