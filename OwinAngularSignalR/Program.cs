using Microsoft.Owin.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OwinAngularSignalR
{
    class Program
    {
        static void Main(string[] args)
        {
            using (WebApp.Start<Startup>("http://localhost:8080/"))
            {
                Console.WriteLine("Server running at http://localhost:8080/");

                string input = null;

                do
                {
                    input = Console.ReadLine();

                    DiagnosticHub.Send(input);
                }
                while (input != "exit");
            }
        }
    }
}
