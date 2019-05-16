using InterApi.Client.Models;
using InterApi.Entities;
using InterApi.Entities.ApiModels;
using InterApi.Entities.ApiModels.Request;
using Newtonsoft.Json;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace InterApi.Client
{
    public class InterApiClient : IInterApiClient
    {
        private readonly ApplicationSettings applicationSettings;
        private readonly RestClient restClient;

        public InterApiClient(ApplicationSettings applicationSettings)
        {
            this.applicationSettings = applicationSettings;
            this.restClient = new RestClient(this.applicationSettings.Api.BaseUrl);
        }

        private async Task<InterApiResponse<U>> ExecuteAsync<U>(string uri, params object[] parameters)
        {
            return await this.ExecuteAsync<U>(uri, Method.POST, parameters);
        }

        private async Task<InterApiResponse<U>> ExecuteAsync<U>(string uri, Method method = Method.POST, params object[] parameters)
        {
            //test ortamı ise header ekleme

            ApiHeaderParameter header = null;

            header = new ApiHeaderParameter
            {
                AppKey = this.applicationSettings.Api.AppKey,
                //CallerId = "456",
                Channel = applicationSettings.Api.Channel,
                ChannelSessionId = "",
                // ChannelRequestId = "EE",
                TellerName = applicationSettings.Api.TellerName
            };

            var bodyParam = new ApiRequestParameter
            {
                Header = header,
                Parameters = parameters
            };

            var baseUri = new Uri(this.applicationSettings.Api.BaseUrl);
            var urlPath = new Uri(baseUri, uri).ToString();

            var restRequest = new RestRequest(urlPath, method);

            restRequest.AddHeader("Ocp-Apim-Subscription-Key", this.applicationSettings.Api.SubscriptionKey);
            string jsonString = JsonConvert.SerializeObject(bodyParam, Formatting.None, new JsonSerializerSettings { NullValueHandling = NullValueHandling.Ignore });
            restRequest.AddParameter("application/json", jsonString, ParameterType.RequestBody);


            var cancellationTokenSource = new CancellationTokenSource();
            var result = await this.restClient.ExecuteTaskAsync<InterApiResponse<U>>(restRequest, cancellationTokenSource.Token);
            if (result.ErrorException != null || !result.IsSuccessful)
            {
                var errorMessage = result.ErrorException?.Message;
                var message = String.IsNullOrWhiteSpace(errorMessage) ? result.Content : ("network call error status:" + (int)result.StatusCode + " message: " + errorMessage);
                var error = new ServiceExceptionMessage(message, -1);
                return new InterApiResponse<U>
                {
                    Error = error
                };
            }

            return result.Data;
        }

        public async Task<object> CreateIBUserAsync(CreateIBRequestModel model)
        {
            var result = await this.ExecuteAsync<object>("CreateIBUser", model);
            return result;
        }

        public async Task<InterApiResponse<AccountListMessage>> GetAccountListAsync(string customerNo)
        {
            var result = await this.ExecuteAsync<AccountListMessage>("GetAccountList", new { CustomerNo = customerNo });
            return result;
        }

        public async Task<InterApiResponse<AccountActivityListMessage>> GetAccountTransactionListAsync(AccountActivityFilter accountActivityFilter)
        {
            var result = await this.ExecuteAsync<AccountActivityListMessage>("GetAccountTransactionList", accountActivityFilter);
            return result;
        }

        public async Task<InterApiResponse<WireToAccountMessage>> RequestWireToAccountAsync(WireToAccountRequest wireToAccountRequest)
        {
            var result = await this.ExecuteAsync<WireToAccountMessage>("RequestWireToAccount", wireToAccountRequest);
            return result;
        }

        public async Task<InterApiResponse<WireToIBANMessage>> RequestWireToIbanAsync(WireToIbanRequest wireToIbanRequest)
        {
            var result = await this.ExecuteAsync<WireToIBANMessage>("RequestWireToIBAN", wireToIbanRequest);
            return result;
        }
        public async Task<InterApiResponse<IbanEftMessage>> ProcessEftRequestToIbanAsync(EftToIbanRequest eftToIbanRequest)
        {
            var result = await this.ExecuteAsync<IbanEftMessage>("ProcessEftRequestToIban", eftToIbanRequest);
            return result;
        }

        public async Task<InterApiResponse<AccountEftMessage>> ProcessEftRequestToAccountAsync(EftToAccountRequest eftToAccountRequest)
        {
            var result = await this.ExecuteAsync<AccountEftMessage>("ProcessEftRequestToAccount", eftToAccountRequest);
            return result;
        }
    }
}
