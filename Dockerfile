FROM microsoft/dotnet:2.2-sdk AS build-env

ENV ASPNETCORE_URLS=http://*:8080
WORKDIR /app


RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs
# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM microsoft/dotnet:2.2-aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/out .

# Entry point doesnt seem to work well with heroku
# ENTRYPOINT ["dotnet", "Lee.dll"]
CMD dotnet Lee.dll
# CMD ASPNETCORE_URLS=http://*:$PORT dotnet Lee.dll
