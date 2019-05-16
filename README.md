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

## Screenshots
|  | | |
| - | - | - |
| ![Menu](https://user-images.githubusercontent.com/50368463/57838214-f3461180-77cc-11e9-96b8-8687d19af307.png) | ![Accounts](https://user-images.githubusercontent.com/50368463/57838213-f2ad7b00-77cc-11e9-8746-eaff79e87865.png)| ![Account Transactions](https://user-images.githubusercontent.com/50368463/57838212-f2ad7b00-77cc-11e9-9b54-8782940bc12a.png)|
|![Wire To Account](https://user-images.githubusercontent.com/50368463/57838219-f3dea800-77cc-11e9-9c40-7a13bbac3b5a.png)|![Money Transfers](https://user-images.githubusercontent.com/50368463/57838215-f3461180-77cc-11e9-9004-14b28cae4422.png)| |
