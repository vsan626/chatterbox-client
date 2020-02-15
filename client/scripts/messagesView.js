var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {


  },

  render: function() {

  },

  renderMessage: function(data) {
    let chatList=""
    if(Array.isArray(data.results)){
      for(let key in data){
        for(let i = 0; i < data[key].length; i++){
          var combinedData = data[key][i]
          var messages = {"username": combinedData.username, "text": combinedData.text}

          chatList += MessageView.render(messages)
        }
        // console.log('all data', data)
        $('#chats').append(chatList)
    }
    } else {
      chatList += MessageView.render(data)
      $('#chats').append(chatList)

    }

  }

};