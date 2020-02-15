var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {


  },

  render: function() {

  },

  renderMessage: function(data) {
    let chatList=""
    // let stringifyData = JSON.stringify(data.results)
    // console.log(stringifyData)

      for(let i = 0; i < data.results.length; i++){
        // for(let key in data.results[i]){

          chatList += MessageView.render(JSON.stringify(data.results[i]))
          // chatList += MessageView.render(data.results[i].text)
          // console.log(data.results[i][key])
          // }

      }

    $('#chats').append(chatList)

    // var i, html = "";
    // for (i = 0; i < data.length; i++) {
    //   html += renderMessage(data[i]);
    // }
    // $("#chats").append(html);

    console.log(chatList)
  console.log("missing data!", data)


  }

};