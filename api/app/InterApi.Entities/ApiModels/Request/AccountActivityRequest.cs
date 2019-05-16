using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities.ApiModels.Request
{
    public partial class AccountActivityFilter
    {
        public AccountInfo SourceAccount { get; set; }
        public string QueryStartDate { get; set; }
        public string QueryEndDate { get; set; }
        public long QueryMinimumAmount { get; set; }
        public long QueryMaximumAmount { get; set; }
        public long ActivityCount { get; set; }
    }
}
