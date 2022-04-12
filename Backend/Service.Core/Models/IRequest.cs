using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models
{
    public interface IRequest
    {
        int StatusCode { get; set; }
        string FunctionName { get; set; }
        string Message { get; set; }
        string Data { get; set; }
        IResponse BuildResponse(int statusCode, string data);
    }
}
