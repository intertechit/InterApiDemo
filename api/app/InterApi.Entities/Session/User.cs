using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities.Session
{
    public class User
    {        
        public string Username { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
        public long CustomerNo { get; set; }
        public string AppKey { get; set; }
        public string SubscriptionKey { get; set; }
    }
}
