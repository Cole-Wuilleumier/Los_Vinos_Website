
  //emailNotifaction runs when the submit button is clicked in the notifiaction modal
  function emailNotification(){
    var emailInput = $('#inputEmail').val();
    console.log(emailInput);
    //Makes sure emailInput is not empty
    if( emailInput != undefined && emailInput != '' && validateEmail(emailInput) ){
      $("#notificationEntered").empty();

      var signedUpMsg = '<div class="col-sm-12 col-lg-12 text-center">'
                      +'  <p>Thank you for signing up for Los Vinos email notifications!</p>'
                      +'  <p>You will now receive Los Vinos emails at ' + emailInput + '.</p>'
                      +'</div>';

      $("#notificationEntered").html(signedUpMsg);
      $('#validEmail').empty();
    } else {
      $('#validEmail').text("Please enter valid email.");
    }
  }

  //resetNotifaction runs when the close button is clicked in the nottification modal
  function resetNotification(){
    $("#notificationEntered").empty();

    var signedUpMsg = '<div class="col-sm-9 col-lg-9 text-center">'
                    +'  <input type="email" class="form-control" id="inputEmail" placeholder="Enter email">'
                    +'  <p id="validEmail"></p>'
                    +'</div>'
                    +'<div class="col-sm-3 col-lg-3 text-center">'
                    +'  <button type="submit" onclick="javascript:emailNotification();" class="btn btn-primary">Submit</button>'
                    +'</div>';

    $("#notificationEntered").html(signedUpMsg);

  }

  //validateEmail tests whether an email is valid or not
  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }



