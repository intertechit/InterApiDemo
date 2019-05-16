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
    public class AccountController : ControllerBase
    {
        private readonly IInterApiClient interApiClient;
        //private static InterApiResponse<AccountListMessage> accounts = null;

        public AccountController(IInterApiClient interApiClient)
        {
            this.interApiClient = interApiClient;
        }

        [HttpGet]
        [Route("AccountList")]
        public async Task<ActionResult> AccountList(string customerNumber)
        {
            var result = await this.interApiClient.GetAccountListAsync(customerNumber);
            return Ok(result);

        }

        [HttpGet]
        [Route("TransactionList")]
        public async Task<ActionResult> TransactionList(int accountSuffix, int branchCode, int customerNo)
        {
            var accountActivityFilter = new AccountActivityFilter
            {
                ActivityCount = 10,
                QueryEndDate = DateTime.UtcNow.ToString("s"),
                QueryStartDate = DateTime.UtcNow.AddMonths(-3).ToString("s"),
                SourceAccount = new AccountInfo
                {
                    AccountSuffix = accountSuffix,
                    BranchCode = branchCode,
                    CustomerNo = customerNo
                }
            };
            var accountActivities = await this.interApiClient.GetAccountTransactionListAsync(accountActivityFilter);

            return Ok(accountActivities);
        }       
    }
}
