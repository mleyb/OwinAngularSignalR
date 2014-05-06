using Microsoft.AspNet.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OwinAngularSignalR
{
    public class DiagnosticHub : Hub
    {
        public override Task OnConnected()
        {
            return base.OnConnected();
        }
    }
}
