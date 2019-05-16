using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities.ApiModels.Request
{
    public partial class EftToAccountRequest
    {
        public string Explanation { get; set; }
        public string SenderName { get; set; }
        public string TransferReason { get; set; }
        public long DestinationBankCode { get; set; }
        public long EFTDestinationAccount { get; set; }
        public long DestinationBranchCode { get; set; }
        public string EFTDestinationType { get; set; }
        public long Amount { get; set; }
        public string TransactionDate { get; set; }
        public long CustomerNo { get; set; }
        public AccountInfo SourceAccount { get; set; }
        public string ReceiverName { get; set; }
    }
}
