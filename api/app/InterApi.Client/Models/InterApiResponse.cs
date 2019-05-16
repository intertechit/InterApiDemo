using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Client.Models
{   
    public class InterApiResponse<T>
    {
        public ServiceExceptionMessage Error { get; set; }
        public T Data { get; set; }
        public bool IsSuccess
        {
            get
            {
                return this.Error == null || String.IsNullOrWhiteSpace(this.Error.Description);
            }
        }
    }
}
