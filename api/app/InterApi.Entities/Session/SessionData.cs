using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities.Session
{
    public class SessionData
    {
        public User User { get; set; }
        public string ConversationId { get; set; }
        public string Ip { get; set; }
        public string Channel { get; set; }
        public string CallId { get; set; }

    }
}
