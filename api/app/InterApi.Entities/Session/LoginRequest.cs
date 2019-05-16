using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities.Session
{
    public class LoginRequest
    {
        public string UserName { get; set; }
        public string Channel { get; set; }
        public long CustomerNo { get; set; }
        public string AppKey { get; set; }
        public string SubscriptionKey { get; set; }
    }
}
