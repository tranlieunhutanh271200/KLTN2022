using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Core.Models
{
    public class RequestDTO : IRequest
    {
        public int StatusCode { get; set; }
        public IResponse Response { get; set; }
        public string FunctionName { get; set; }
        public string Message { get; set; }
        public string Data { get; set; }

        public IResponse BuildResponse(int statusCode, string data)
        {
            Response.StatusCode = statusCode;
            Response.Data = data;
            return Response;
        }
    }
}
