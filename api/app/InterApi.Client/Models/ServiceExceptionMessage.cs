using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Client.Models
{
    public class ServiceExceptionMessage
    {   
        public long Code { get; set; }
        public string Description { get; set; }
        public List<object> Parameters { get; set; }
        public long TransactionId { get; set; }

        public ServiceExceptionMessage()
        {
        }

        public ServiceExceptionMessage(string description, int code)
        {
            this.Description = description;
            this.Code = code;
        }

    }
}

