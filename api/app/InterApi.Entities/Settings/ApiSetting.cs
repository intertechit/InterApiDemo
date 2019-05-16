using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities
{
    public class ApiSetting
    {
        public string SubscriptionKey { get; set; }
        public string  Channel { get; set; }
        public string TellerName { get; set; }
        public string BaseUrl { get; set; }
        public string AppKey { get; set; }
        public bool IsProd { get; set; }
    }
}
