var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log('click!');


    //trying to submit input messages
    let newInput = $('#message').val()
    console.log('THIS IS NEWINPUT', newInput)

    //required format to use for Parse.create function to send to server
    let messageInput = {
      'username': 'Dannny',
      'text': newInput
    }


    Parse.create(messageInput)

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};