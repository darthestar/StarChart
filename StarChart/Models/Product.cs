using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace StarChart.Models
{
    public class Product
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string LongDescription { get; set; }
        public bool Available { get; set; }
        public string Vendor { get; set; }
        public int Price { get; set; }
    }
}