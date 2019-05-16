using System.Collections.Generic;
using System.Threading.Tasks;
using InterApi.Client.Models;
using InterApi.Entities.ApiModels;
using InterApi.Entities.ApiModels.Request;

namespace InterApi.Client
{
    public interface IInterApiClient
    {
        Task<object> CreateIBUserAsync(CreateIBRequestModel model);
        Task<InterApiResponse<AccountListMessage>> GetAccountListAsync(string customerNo);
        Task<InterApiResponse<AccountActivityListMessage>> GetAccountTransactionListAsync(AccountActivityFilter accountActivityFilter);
        Task<InterApiResponse<WireToAccountMessage>> RequestWireToAccountAsync(WireToAccountRequest wireToAccountRequest);
        Task<InterApiResponse<WireToIBANMessage>> RequestWireToIbanAsync(WireToIbanRequest wireToIBANRequest);
        Task<InterApiResponse<IbanEftMessage>> ProcessEftRequestToIbanAsync(EftToIbanRequest eftToIbanRequest);
        Task<InterApiResponse<AccountEftMessage>> ProcessEftRequestToAccountAsync(EftToAccountRequest eftToAccountRequest);
    }
}