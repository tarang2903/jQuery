
//hide & show with button
$(document).ready(function(){
    $("#bu1").click(function(){
        $("#show").slideDown(3000);
    });
});

$(document).ready(function(){
  $("#bu").click(function(){
    $("#show").stop();
    });
});

//hide & show
$(document).ready(function(){
  $("#flip").click(function(){
      $("#panel").slideToggle(3000);
  });
});

$(document).ready(function(){
    $("#flip").dblclick(function(){
        $("#panel").slideToggle(3000);
    });
});

//alert

$(document).ready(function(){
    $("#button").click(function() {
    alert("are you in danger")
    })   
});


$(document).ready(function(){
    $("#button2").click(function(){
      $("#div1").fadeToggle("fast");
      $("#div2").fadeToggle("");
      $("#div3").fadeToggle("slow"); 
    });
  });

  $(document).ready(function(){
    $("#button4").click(function(){
      $("#div5").fadeTo("fast", 0.4);
      $("#div6").fadeTo("", 0.4);
      $("#div7").fadeTo("slow", 0.4);
    });
  });

  $(document).ready(function(){
    $("#button3").click(function(){
      let div = $("#div4");
      div.animate({height: '400px', opacity: '0.4'}, "slow");
      div.animate({width: '500px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
  });

$(document).ready(function(){
    $("#hide").click(function(){
        $("#hide").hide(1500);
    })
});

$(document).ready(function() { 
    $("#p1").click(function () {
        $("#p1").fadeOut("slow");
    })
});


//validation form

$(document).ready(function(){
  $("#name").blur(function(){
    let uName = $("#name").val();
    if (uName == ""){
      $("#na").show()
    }
         
  });
});

$(document).ready(function(){
  $("#email").blur(function(){
    let uEmail = $("#email").val();
    if (uEmail == ""){
      $("#em").show()
    }
         
  });
});

$(document).ready(function(){
  $("#pass").blur(function(){
    let uPassword = $("#pass").val();
    console.log(uPassword);
    if (uPassword == ""){
      $("#pa").show()
    }
         
  });
});

  
$(document).ready(function(){
  $("#bom").click(function(){
      let uName = $("#name").val();
      let uEmail = $("#email").val()
      let uPassword = $("#password").val();


      if(uName == "" || uEmail == "" || uPassword == ""){
          alert("Enter Details")
      } 
      else(
      alert("Registration Success full")
      )

    })
})

