using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Runtime.Serialization;

namespace PrjBusReservationWebAPI.Models
{
    public class ChangePassword
    {
        [DataContract]
        public class ChangePasswordModel
        {
            [DataMember]
            public string Password { get; set; }
            [DataMember]
            public int OTP { get; set; }
            [DataMember]
            public string EmailId { get; set; }
        }
    }
}