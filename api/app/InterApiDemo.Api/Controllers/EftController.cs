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
    public class EftController : ControllerBase
    {
        private readonly IInterApiClient interApiClient;

        public EftController(IInterApiClient interApiClient)
        {
            this.interApiClient = interApiClient;
        }

        [HttpPost]
        [Route("account")]
        public async Task<ActionResult> ToAccount([FromBody]EftToAccountRequest eftRequest)
        {          
            var result = await this.interApiClient.ProcessEftRequestToAccountAsync(eftRequest);
            return Ok(result);
        }

        [HttpPost]
        [Route("iban")]
        public async Task<ActionResult> ToIban([FromBody]EftToIbanRequest eftRequest)
        {
            var result = await this.interApiClient.ProcessEftRequestToIbanAsync(eftRequest);

            return Ok(result);
        }
    }
}
