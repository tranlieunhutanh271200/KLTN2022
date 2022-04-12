using IdentityServer.Caches;
using IdentityServer.Models.Dtos;
using IdentityServer.Persistence.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Service.Core.Models.DTOs.Identities;
using Service.Core.Persistence.Interfaces;
using Service.Core.Utils;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Controllers
{
    [ApiController]
    [Route("api/v1/[Controller]")]
    public class IdentityController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IAccountRepository _accountRepository;
        public IdentityController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
            _accountRepository = unitOfWork.GetRequiredRepository<IAccountRepository, AccountRepository>();
        }
        #region Check Hashing Function
        //[HttpGet("ping")]
        //public async Task<IActionResult> Ping(string password)
        //{
        //    CryptoUtil.MD5.Hash(password, out var salt, out var hashed);

        //    return Ok(new {salt = salt, hashed = hashed});
        //}
        //[HttpGet("check")]
        //public async Task<IActionResult> Check(string password, string salt, string hashed)
        //{
        //    return Ok(CryptoUtil.MD5.CompareHash(password, salt, hashed));
        //}
        #endregion

        #region Check Cache
        //[HttpGet("SetCache")]
        //public async Task<IActionResult> SetCache(string key, string value)
        //{
        //    InMemoryCache.Instance.Set(key,value, TimeSpan.FromSeconds(30));
        //    return Ok();
        //}
        //[HttpGet("GetCache")]
        //public async Task<IActionResult> GetCache(string key)
        //{
        //    return Ok(InMemoryCache.Instance.Get<string>(key));
        //}
        #endregion
        [AllowAnonymous]
        [Authorize]
        [HttpGet("auth")]
        [ProducesResponseType((int)HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        public IActionResult AuthUser()
        {
            if (User.Identity.IsAuthenticated)
            {
                return Ok();
            }
            return Unauthorized();
        }
        [HttpGet("token")]
        [AllowAnonymous]
        [ProducesDefaultResponseType]
        [ProducesResponseType(typeof(TokenResponseDTO), (int) HttpStatusCode.OK)]
        [ProducesResponseType((int)HttpStatusCode.Unauthorized)]
        public async Task<IActionResult> Token(string domain, string password)
        {
            _unitOfWork.CreateTransaction();
            try
            {
                LoginDTO loginDTO = new LoginDTO()
                {
                    Domain = domain,
                    Password = password
                };
                var token = await _accountRepository.GenerateToken(loginDTO);
                return Ok(token);
            }
            catch (Exception ex)
            {
                _unitOfWork.Rollback();
                throw;
            }
            return Ok();
        }
        [AllowAnonymous]
        [HttpPost("social")]
        [ProducesDefaultResponseType]
        [ProducesResponseType((int) HttpStatusCode.Unauthorized)]
        [ProducesResponseType((int)HttpStatusCode.OK)] 
        public async Task<IActionResult> SocialAuth()
        {
            return Ok("Authorized");
        } 
        [HttpGet("accounts")]
        public async Task<IActionResult> MonitorAccount()
        {
            return Ok();
        }
        [HttpPut("accounts/{id}/edit")]
        public async Task<IActionResult> EditAccount()
        {
            return Ok();
        }
        [HttpPost("add")]
        public async Task<IActionResult> Register(string returnUrl)
        {
            return Ok();
        }
        [HttpPost("import")]
        public async Task<IActionResult> Import()
        {
            return Ok();
        }
    }
}
