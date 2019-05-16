using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities.ApiModels.Request
{
    public partial class WireToAccountRequest
    {
        public long CustomerNo { get; set; }
        public string Explanation { get; set; }
        public long Amount { get; set; }
        public AccountInfo SourceAccount { get; set; }
        public AccountInfo DestinationAccount { get; set; }
        public string ReceiverName { get; set; }
    }
}
