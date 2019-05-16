using System;
using System.Collections.Generic;
using System.Net;
using System.Text;

namespace InterApi.Client.Models
{
    public class InterApiException: Exception
    {

        public InterApiException(string errorMessage, Exception exception = null, int errorCode = 0, HttpStatusCode httpStatusCode = HttpStatusCode.OK)
        {
            this.ErrorMessage = errorMessage;
            this.ErrorMessage = errorMessage;
            this.ErrorCode = errorCode;
            this.HttpStatusCode = httpStatusCode;
        }
        public string ErrorMessage { get; }
        public int ErrorCode { get;  }
        public Exception Exception { get; }
        public HttpStatusCode HttpStatusCode { get; }
    }
}
