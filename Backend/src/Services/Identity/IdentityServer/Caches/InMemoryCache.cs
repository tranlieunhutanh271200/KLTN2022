using Microsoft.Extensions.Caching.Memory;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Caches
{
    public class InMemoryCache
    {
        private IMemoryCache _cache = new MemoryCache(new MemoryCacheOptions
        {
            ExpirationScanFrequency = TimeSpan.FromMinutes(10)
        });
        private static Lazy<InMemoryCache> _instance = new Lazy<InMemoryCache>(() => new InMemoryCache());
        public static InMemoryCache Instance => _instance.Value;
        private InMemoryCache()
        {

        }
        public void Set(string key, object value, TimeSpan expired)
        {
            _cache.Set(key, value, expired);
        }
        public T Get<T>(string key)
        {
            if (_cache.TryGetValue(key, out var value))
                return (T)value;
            return default(T);
        }
    }
}
