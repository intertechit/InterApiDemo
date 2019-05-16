using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities.ApiModels
{
    public class AccountInfo
    {
        public long BranchCode { get; set; }
        public long CustomerNo { get; set; }
        public long AccountSuffix { get; set; }
        public string CurrencyCode { get; set; }
        public string IbanNo { get; set; }
        public string ShortName { get; set; }
    }
}
