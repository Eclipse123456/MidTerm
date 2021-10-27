function sub(){
    fname = document.getElementById("name").value;
    id = document.getElementById("number").value;
    answers = 0;

    if(fname=="" || id==0){
        alert("You have to enter a Name and your ID!");
    }else{
        if(document.getElementById("ans4").checked){
            answers+=1;
        }
        if(document.getElementById("ans6").checked){
            answers+=1;
        }
        if(document.getElementById("ans9").checked){
            answers+=1;
        }
        document.getElementById("result").innerHTML = fname + " " + id +" got: " + answers + " right and it only took him " + counter() + " seconds";
    }
}


function Valid(){
    sname = document.getElementById("sname").value;
    fname = document.getElementById("fname").value;
    studentid = document.getElementById("id").value;
    email = document.getElementById("email").value;
    note = document.getElementById("note").value;
    if(fname=="" || sname=="" || id==0 || email=="" || note==""){
        alert("You have to enter all the fields!");
    }else{
        
        let object={
            sname,
            fname,
            studentid,
            email,
            note
        };
        localStorage.setItem("Info", JSON.stringify(object));
        alert("Successfully updated!");
    }
}

var date = new Date();
function counter(){
    
    return (new Date()-date)/1000;
}