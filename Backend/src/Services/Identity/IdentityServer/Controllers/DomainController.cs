using IdentityServer.Models;
using IdentityServer.Persistence.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Service.Core.Models.Identities;
using Service.Core.Persistence.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Controllers
{
    [AllowAnonymous]
    [Route("api/v1/[Controller]")]
    [ApiController]
    public class DomainController: ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        public DomainController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllDomain()
        {
            return Ok(await _unitOfWork.GetRequiredRepository<IDomainRepository, DomainRepository>().GetAllAsync());
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetDomain(Guid id)
        {
            return Ok();
        }
        [HttpPost]
        public async Task<IActionResult> CreateDomain()
        {
            try
            {
                _unitOfWork.CreateTransaction();
                var domain = new Domain
                {
                    School = "University of Technology and Education",
                    Abbreviation = "UTE",
                    IsActive = true,
                };
                var repository = _unitOfWork.GetRequiredRepository<IDomainRepository, DomainRepository>();

                await repository.CreateSampleDomain(domain);

                await _unitOfWork.SaveChangesAsync();
                _unitOfWork.Commit();
                return Ok(domain);
            }
            catch (Exception ex)
            {
                _unitOfWork.Rollback();
                throw;
            }  
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDomain(Guid id,[FromBody] Domain domain)
        {
            return Ok();
        }
        [HttpPut("{id}/[Action]")]
        public async Task<IActionResult> ToggleActivate(Guid id)
        {
            return Ok();
        }
    }
}
