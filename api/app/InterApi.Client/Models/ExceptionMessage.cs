using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Client.Models
{
    public partial class ExceptionMessage
    {
        public string Type { get; set; }
        public long Code { get; set; }
        public bool IsEsbException { get; set; }
        public string EsbErrorCode { get; set; }
        public string SystemMessage { get; set; }
        public string YbpErrorCode { get; set; }
        public object InnerException { get; set; }
        public string ExceptionSourceUrlWithQueryString { get; set; }
        public string FraudResponseCode { get; set; }
        public object Parameters { get; set; }
        public string Description { get; set; }
        public bool IsKnown { get; set; }
        public long BackLevel { get; set; }
        public string HistoryGoBackCount { get; set; }
        public long TransactionId { get; set; }
        public long ExceptionType { get; set; }
    }
}