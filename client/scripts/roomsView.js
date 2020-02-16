var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', function(){
      let roomName = prompt(`What's your room name?`);
      RoomsView.renderRoom(roomName)
    })
  },

  render: function() {


  },

  renderRoom: function(newRoom){
    RoomsView.$select.append(`<option>${newRoom}</option>`)

  }
}

