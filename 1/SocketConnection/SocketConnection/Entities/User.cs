namespace SocketConnection.Entities
{
    public class User
    {
        public string UserName { get; set; }
        public string Ip { get; set; }
        public int Port { get; set; }
        public int RecipientPort { get; set; }
        public string RecipientIp { get; set; }
        public User(string userName, string ip, int port, int recipientPort, string recipientIp)
        {
            this.UserName = userName;
            this.Ip = ip;
            this.Port = port;
            this.RecipientPort = recipientPort;
            this.RecipientIp = recipientIp;
        }
        
        public User()
        {

        }
    }
}
