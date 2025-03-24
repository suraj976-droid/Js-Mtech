    // function calculate(){
    //     var name,email,salary;

    //     name = document.getElementById("name").value;
    //     email = parseInt(document.getElementById("id").value);
    //     salary = parseFloat(document.getElementById("salary").value);

    //     document.getElementById("disp").innerHTML = `name is ${name}, id is ${email}, salary is ${salary}`;
    // }  

    // function addition(){
    //     num1 = parseInt(document.getElementById("num1").value);
    //     num2 = parseInt(document.getElementById("num2").value);
        
    //     document.getElementById("caladd").innerHTML = `Number 1 is ${num1} Number 2 is ${num2} And Addition is ${num1+num2}`;

    // }

    // function Add(){
    //     var noOfMcqs = parseInt(document.getElementById("noOfMcqs").value);
    //     var addhtml = document.getElementById("addhtml"); 

    //     for(i=1;i<=noOfMcqs;i++){
    //         addhtml.innerHTML += `<div>Q. <input type="text" id="question${i}"><br><br>
    // A. <input type="text" id="answer${i}"><br><br>
    // B. <input type="text" id="answerB${i}"><br><br>
    // C. <input type="text" id="answerC${i}"><br><br>
    // D. <input type="text" id="answerD${i}"><br><br>

    // Ans<input type="text" id ="ans${i}"></div>`;
    //     }

    // }

    // var obj = {
    //     "Hr": "John Doe, raj, aamir, roshan, krish",
    //     "IT" : "David, Kate, Mike, Sarah, Jane",
    //     "Finance" : "Peter, Jill, Emma, Olivia, Noah"
    // }



    // function display() {

    //     var department = document.getElementById("dept").value;

    //     var emp = obj[department].split(", ");
        
    
    //     document.getElementById("emp").innerHTML = "";


    //     var select = document.createElement("select");

    //     for (var i = 0; i < emp.length; i++) {
    //         var option = document.createElement("option");
    //         option.value = emp[i];
    //         option.textContent = emp[i];
    //         select.appendChild(option);
    //     }
    //     document.getElementById("emp").appendChild(select);
    // }

    // function pass(){
    //     var passEnter = document.getElementById("passEnter").value;
    //         if (passEnter.length > 0 &&  passEnter.length < 6) {
    //             stat = "Password is weak.";
    //         }
    //         else if (passEnter.length >= 6 && passEnter.length < 12) {
    //             stat = "Password is moderate.";
    //         }
    //         else if (passEnter.length >= 12) {
    //             stat = "Password is strong.";
    //         }
    //         document.getElementById("pass1").innerHTML = stat;
    // }

    // function fun(r) {
    //         a = 3.14 * r * r;
    //         alert("Area of circle is " + a);
    // }

    // fun(3);

    // x= function (r){
    //     a = 3.14 * r * r;
    //     alert("Area of circle is " + a);
    // }
    // x(4);

    // y = (r) => {
    //     a = 3.14 * r * r;
    //     alert("Area of circle is " + a);
    // }

    // y(5);

    // function test(name,id){
    //     this.name = name;
    //     this.id = id;
    // }

    // function display(){

    //     var emp = new test("john Doe",123);
    //     alert(`name is ${emp.name} and id is ${emp.id}`);
    // }

    // display();

    function objConvertJson(){
        var name,salary,id;
        name = document.getElementById("name1").value;
        salary = document.getElementById("salary1").value;
            id = document.getElementById("id1").value;
        var obj = {
           "name": name,
           "saalry": salary,
           "id": id
        }    
         var json = JSON.stringify(obj);
         document.getElementById("jsonObj").innerHTML = json;
    }

    function Empdata(){
        
        var name = formdata.name.value;
        var salary = formdata.salary.value;
        var id = formdata.id.value

        var emp = {
            "name": name,
            "salary": salary,
            "id": id
        }
       
        console.log(emp);
    }