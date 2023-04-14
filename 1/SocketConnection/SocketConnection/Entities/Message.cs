namespace SocketConnection.Entities
{
    internal class Message
    {
        public int Id { get; set; }
        public string Text { get; set; }

        public Message(int id, string text)
        {
            this.Id = id;
            this.Text = text;
        }

        public Message()
        {
        }
    }
}
