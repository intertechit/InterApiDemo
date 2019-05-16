FROM microsoft/dotnet:2.2-sdk as builder
WORKDIR /app
COPY app/ .
RUN cd /app/InterApiDemo.Api && dotnet publish -c Release -o /app/

FROM microsoft/dotnet:2.2.0-aspnetcore-runtime
WORKDIR /app
COPY --from=builder /app .
ENTRYPOINT ["dotnet", "InterApi.Api.dll"]
