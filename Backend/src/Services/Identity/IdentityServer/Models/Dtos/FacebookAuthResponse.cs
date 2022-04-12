﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityServer.Models.Dtos
{
    public class FacebookAuthResponse : IAuthResponse
    {
        public string Email { get; set; }
        public string Fullname { get; set; }
        public string PhoneNumber { get; set; }
        public string Avatar { get; set; }
        public int MyProperty { get; set; }
    }
}
