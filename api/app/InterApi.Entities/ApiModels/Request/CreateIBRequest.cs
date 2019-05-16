using InterApi.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace InterApi.Entities.ApiModels.Request
{
    public class CreateIBRequest
    {
        public CustomerInfo CustomerInfo { get; set; }
        public bool IsTcknLogin { get; set; }
        public long CellPhone { get; set; }
    }
}