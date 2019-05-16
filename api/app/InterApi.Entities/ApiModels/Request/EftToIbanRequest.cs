using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities.ApiModels.Request
{
    public partial class EftToIbanRequest
    {
        public string Explanation { get; set; }
        public string IBANNo { get; set; }
        public string SenderName { get; set; }
        public long DestinationBankCode { get; set; }
        public long Amount { get; set; }
        public long CustomerNo { get; set; }
        public string TransactionDate { get; set; }
        public AccountInfo SourceAccount { get; set; }
        public string ReceiverName { get; set; }
    }
}
