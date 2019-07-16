# inter-Api OpenBanking Integration Sample

inter-API is openbanking solution of Intertech.

The demo application consisted from two main application. Ionic/Angular UI Application and Asp.Net Core 2.2 Backend application.

![Application Architecture](https://user-images.githubusercontent.com/50368463/57836245-f7703000-77c8-11e9-9c93-dcf974b3090a.JPG)

**UI Application** is a Ionic 4/Angular 7 Application written in Typescript 3. UI application constains two modules: "Accounts" and "Money Transfers".
Accounts Module lets you to query accounts and account details for a given customer number.

"Money Transfers" module lets you to execute: "wire to account", "wire to iban", "eft to account" and "eft to iban" transactions.

UI application makes REST calls to Asp.Net Core backend to fetch data. 

**Backend Application** is a Asp.Net Core 2.2 application. It uses [RestSharp Library](https://github.com/restsharp/RestSharp) to manage REST api calls made to [inter-API Intertech Open Banking Platform](https://api.intertech.com.tr/).


## Running The Application

1. Install docker if it is not installed.
2. Get your subscription key from [InterApi Platform](https://api.intertech.com.tr/get-started) and use it as the **INTERAPI_SETTINGS__API__SUBSCRIPTIONKEY** environment variable value. 
3. Use your favourite command line program to execute **docker-compose up** command in the project root folder
4. After the application initialized navigate to http://localhost:9999.

Demo application address : https://interapiapps.azurewebsites.net 

## Screenshots
|  | | |
| - | - | - |
| ![Menu](https://user-images.githubusercontent.com/50368463/59108220-19ca1900-8943-11e9-8b64-1a0806490048.png) | ![Accounts](https://user-images.githubusercontent.com/50368463/59108265-2a7a8f00-8943-11e9-83ba-09598a45ede7.png)| ![Account Transactions](https://user-images.githubusercontent.com/50368463/59108306-3cf4c880-8943-11e9-9bfb-cb38faf22fdd.png)|
|![Wire To Account](https://user-images.githubusercontent.com/50368463/59108320-49792100-8943-11e9-9ba2-11bd4c8a7426.png)|![Money Transfers](https://user-images.githubusercontent.com/50368463/59108336-5564e300-8943-11e9-8d6e-6d501cb5a1f0.png)| |
