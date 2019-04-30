# Lee Portfolio
Built with asp.netcore backend and React frontend
What you will learn:
Correct buildpacks for a asp.netcore with React web application
Hosting ASP.NET Core on Heroku (with Docker&CircleCI) free

## heroku setup (unsure if buildpacks are neded)
Reference this guide as needed (in order): https://zimmergren.net/building-an-asp-net-5-web-application-net-core-and-host-it-in-the-heroku-cloud/
https://elements.heroku.com/buildpacks/jincod/dotnetcore-buildpack


Create buildpacks by using (run these commands in root directory):

NOTE: For heroku create you can add a custom beginning domain name if you fill in the custom name field if you would like to

```bash
heroku create --buildpack https://github.com/jincod/dotnetcore-buildpack.git or heroku create {CUSTOMNAME} --buildpack https://github.com/jincod/dotnetcore-buildpack.git
heroku buildpacks:set jincod/dotnetcore
heroku buildpacks:add --index 1 heroku/nodejs
```



After heroku setup here is finish as CircleCi will be used and Docker

NOTE: Do not need to put package json in root directory this will read the one in ClientApp folder

## Dockerize and CircleCi Setup
Follow instructions in https://codingblast.com/hosting-asp-net-core-on-heroku-with-dockercircleci-for-free/

Follow exact instructions except in step 2. Dockerize ASP.NET Core application your DockerFile should look like

```python
FROM microsoft/dotnet:2.2-sdk AS build-env


# Unsure if Expose and ENV are needed
EXPOSE 8080
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

# this alone will not work working answer is last CMD
# CMD dotnet Lee.dll

CMD ASPNETCORE_URLS=http://*:$PORT dotnet Lee.dll

```
Below CMD will allow the app to run without any kestral errors.
```
CMD ASPNETCORE_URLS=http://*:$PORT dotnet Lee.dll
```


Without the below npm error will happen reference-> https://hjerpbakk.com/blog/2018/06/25/aspnet-react-and-docker
```
RUN curl -sL https://deb.nodesource.com/setup_10.x |  bash -
RUN apt-get install -y nodejs
```



## Helpful links
-If error
```
Did you mean to run dotnet SDK commands? Please install dotnet SDK from:
```
Possible explaination and fix https://github.com/aspnet/aspnet-docker/issues/322


-https://stackoverflow.com/questions/45493124/heroku-push-rejected-failed-to-compile-asp-net-core-app this helps explain how to set up DockerFile if error

-https://blog.devcenter.co/deploy-asp-net-core-2-0-apps-on-heroku-eea8efd918b6 another helpful doc to explain how to use heroku with .netcore

-https://github.com/aspnet/AspNetCore/issues/4699 explains
```
EXPOSE 8080
ENV ASPNETCORE_URLS=http://*:8080
```
unsure if this is needed


## License
[MIT](https://choosealicense.com/licenses/mit/)
