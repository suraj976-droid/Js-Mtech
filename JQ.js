// $(document).ready(function(){

//     $("#btn1").click(function(){
//         alert("Button 1 clicked!");
//     });
// });

$(document).ready(function(){

  $("#shbtn").click(function (){
    const btn = $("#shbtn");
    const passw = $("#shpass");

    if (passw.attr('type') === "password"){
        passw.attr('type','text');
        btn.attr('value','Hide');
    }

    else {
        passw.attr('type','password');
        btn.attr('value','Show');
    }
  });
});