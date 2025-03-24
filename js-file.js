// $(document).ready(function(){
// $("#mbtn").click(function ()
// {
//     $("#exampleModal").modal('show');
//     $("#exampleUsername").show();
//     $("#labusername").show();
//     $("#exampleModalLabel").text("Sign Up");
//     $("#sinup1").show();
//     $("#sinin1").hide();

//     $("#sinup1").click(function (){
//         var email =  document.getElementById("exampleInputEmail1").value;
//         var pass=  document.getElementById("exampleInputPassword1").value;
//         var username = document.getElementById("exampleUsername").value;
        
//         if (email == "" || pass == "" || username == ""){
//             alert("Empty fields are required");
//         }

//          alert(`Email is ${email} and pass is ${pass} and username is ${username}`);
//     });

// });





// $("#closebtn").click(function ()
// {
//     $("#exampleModal").modal('hide');
// });


// $("#mbtn2").click(function ()
// {
//     $("#exampleModal").modal('show');
//     $("#exampleUsername").hide();
//     $("#labusername").hide();
//     $("#exampleModalLabel").text("Sign In");
//     $("#sinup1").hide();
//     $("#sinin1").show();
//     $("#sinin1").click(function (){
//         var email =  document.getElementById("exampleInputEmail1").value;
//         var pass=  document.getElementById("exampleInputPassword1").value;
    
     
//          alert(`Email is ${email} and pass is ${pass} `);
//     });
// });

// });

//create object store key value pair array It department and it employees and Hr department with employees

var obj = {
    "IT": ["John Doe", "Raj", "Aamir", "Roshan", "Krish"],
    "HR" : ["David", "Kate", "Mike", "Sarah", "Jane"]
}

// on select from dropdown with id= dept display the respective employees from the obj in the another dropdown which has id=emp your code not working please correct it

$(document).ready(function(){
    $("#dept").change(function(){
        var department = $(this).val();
        $("#emp").empty();
        $("#emp").append("<option value=''>Select Employee</option>");
        obj[department].forEach(function(employee){
            $("#emp").append("<option value="+employee+">"+employee+"</option>");
        });
    });
});