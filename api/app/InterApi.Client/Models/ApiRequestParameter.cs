using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Client.Models
{
    public class ApiRequestParameter
    {
        public ApiHeaderParameter Header { get; set; }
        public object[] Parameters { get; set; }
    }

    public class ApiHeaderParameter
    {
        public string AppKey { get; set; }
        public string Channel { get; set; }
        public string TellerName { get; set; }
        public string CallerId { get; set; }
        public string ChannelSessionId { get; set; }
        public string ChannelRequestId { get; set; }
    }
}
