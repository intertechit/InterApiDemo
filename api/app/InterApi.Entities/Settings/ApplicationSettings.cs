using System;

namespace InterApi.Entities
{
    public class ApplicationSettings
    {
        public ApiSetting Api { get; set; }
        public bool UseCors { get; set; }
        public string JwtTokenSecret { get; set; }
    }
}
