using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities.ApiModels
{
    public class AccountActivity
    {
        public string Date { get; set; }
        public string DueDate { get; set; }
        public string Explanation { get; set; }
        public long Amount { get; set; }
        public long RemainingBalance { get; set; }
        public long TransactionReference { get; set; }
        public string TransactionCode { get; set; }
        public long TransactionBranchCode { get; set; }
        public string ChannelCode { get; set; }
        public string Time { get; set; }
        public string UserCode { get; set; }
        public string GroupRef { get; set; }
        public long AvailableBalance { get; set; }
        public string ReferenceNumber { get; set; }
    }
}
