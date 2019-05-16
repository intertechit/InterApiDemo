using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InterApi.Client;
using InterApi.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Newtonsoft.Json;

namespace InterApiDemo.Api
{
    public class Startup
    {
        private bool useCors;

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var settings = Configuration.GetSection("Settings").Get<ApplicationSettings>();
            this.useCors = settings.UseCors;
            var envVars = Environment.GetEnvironmentVariables();

            services.AddSingleton<ApplicationSettings>(settings);

            Console.WriteLine(JsonConvert.SerializeObject(settings));

            var apiClient = new InterApiClient(settings);

            services.AddSingleton<IInterApiClient>(apiClient);
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);


            if (this.useCors)
            {
                services.AddCors();
            }
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (this.useCors)
            {
                app.UseCors(builder => builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader()
                .AllowCredentials());
            }

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseMvc();
        }
    }
}
