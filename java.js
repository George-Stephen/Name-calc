function calc(){
    //-Names--/
    var Days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    var maleName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",];
    var femaleName =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",];

    alert("calculating ...")
    var Year =parseInt(document.getElementsByid("year").value);
    var Month =parseInt(document.getElementsByid("month").value);
    var Day =parseInt(document.getElementsByid("day").value);
    var gender =document.getElementsByid("gender").value;

    if(Month<=0||Month >12){
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