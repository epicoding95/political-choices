$(document).ready(function() {
  $("#add").submit(function(event) {
    event.preventDefault();

    

    var number1 = parseInt($("#government option:selected").val());
    var number2 = parseInt($("#values option:selected").val());
    var number3 = parseInt($("#religion option:selected").val());
    // var number2 = ($("#add1").val());
    // var number3 = ($("#add2").val());

    var total = number1 + number2 + number3;
    if(total <= 10){
      $("p#liberal").show();
      $("p#conservative").hide();
      $("p#moderate").hide();

    }else if((total >= 11)&& (total <=30)){
      $("p#conservative").show();
      $("p#liberal").hide();
      $("p#moderate").hide();
    }else{
    $("p#moderate").show();
    $("p#conservative").hide();
    $("p#liberal").hide();
    }

  });
  });
