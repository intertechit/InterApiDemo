using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InterApi.Client;
using InterApi.Client.Models;
using InterApi.Entities.ApiModels;
using InterApi.Entities.ApiModels.Request;
using Microsoft.AspNetCore.Mvc;

namespace InterApiDemo.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WireController : ControllerBase
    {
        private readonly IInterApiClient interApiClient;
        public WireController(IInterApiClient interApiClient)
        {
            this.interApiClient = interApiClient;
        }

        [HttpPost]        
        [Route("account")]
        public async Task<ActionResult> ToAccount([FromBody]WireToAccountRequest wireRequest)
        {            
            var result = await this.interApiClient.RequestWireToAccountAsync(wireRequest);
            return Ok(result);
        }

        [HttpPost]
        [Route("iban")]
        public async Task<ActionResult> ToIban([FromBody]WireToIbanRequest wireRequest)
        {
            var result = await this.interApiClient.RequestWireToIbanAsync(wireRequest);

            return Ok(result);
        }
    }
}
