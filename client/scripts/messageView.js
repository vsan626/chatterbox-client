var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= ${data.username} %></div>
        <div></div>
      </div>
    `)

};