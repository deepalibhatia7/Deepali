//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace PrjBusReservationWebAPI.Models
{
    using System;
    
    public partial class sp_cancelTicket_Result
    {
        public int Booking_Id { get; set; }
        public Nullable<int> Bus_Id { get; set; }
        public System.DateTime Start_Date { get; set; }
        public int Cancellation_Id { get; set; }
        public int Transaction_Id { get; set; }
        public int Total_Amount { get; set; }
        public double Refunded_Amount { get; set; }
        public int Registration_Id { get; set; }
    }
}
