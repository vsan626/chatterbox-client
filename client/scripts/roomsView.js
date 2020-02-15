var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', function(){
      let roomName = prompt(`What's your room name?`);
      console.log(roomName)
      RoomsView.render(roomName)
    })
  },

  render: function(newRoom) {

    RoomsView.$select.append(`<option>${newRoom}</option>`)

  },
  renderRoom: function(rooms){
    console.log(rooms)

  }
}
//   renderRoom: function(data) {
//     let rooms = ""
//     if(Array.isArray(data.results)){
//       for(let key in data){
//         for(let i = 0; i < data[key].length; i++){
//           var combinedData = data[key][i]
//           var rooms = {"rooms": combinedData.roomname}

//           rooms += RoomView.render(rooms)
//         }
//         // console.log('all data', data)
//         $select.append(rooms)
//     }
//     } else {
//       rooms += RoomView.render(data)
//       $select.append(rooms)

//     }
//   }

// }
