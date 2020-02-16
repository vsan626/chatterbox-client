var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log('click!');


    //Saving values from html into variables
    let newInput = $('#message').val()
    let roomselect = $('#rooms select').val()

    //required format to use for Parse.create function to send to server
    let messageInput = {
      'username': 'Dannny',
      'text': newInput,
      'roomname': roomselect
    }


    Parse.create(messageInput)

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};