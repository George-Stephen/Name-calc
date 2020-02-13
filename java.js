function calc(){
    //-Names--/
    var Days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    var maleName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",];
    var femaleName =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",];

    alert("calculating ...")
    var Year =parseInt(document.getElementById("year").value);
    var Month = parseInt(document.getElementById("month").value);
    var day =parseInt(document.getElementById(day).value);
    var gender =document.getElementById("gender").value;

    if (Month<=0||Month >12){
        alert("Add a correct month!!!");

    }
    else if(Day <=1 ||Day>31){
        alert("Add the correct day !!!")
    }
    var day= new Date(Year+"/"+ Month+"/"+day);
    var BirthDay=day.getDay();

    if(gender=="male"){
        alert("your name is"+maleName[BirthDay] )
    } else if(gender=="female"){
        alert("Your name is"+femaleName[BirthDay] )
    }
}