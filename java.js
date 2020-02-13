function calc(){


    //-Names--/
    var Days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    var maleName =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",];
    var femaleName =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",];

    alert("calculating ...")
    var Year =ParseInt(document.getElementsByid("year").value);
    var Month =ParseInt(document.getElementsByid("month").value);
    var Day =ParseInt(document.getElementsByid("day").value);
    var gender =document.getElementsByid("gender").value;

    if(Month<=0||Month>12){
        alert("Add a correct month!!!");

    }
    else if(Day <=1 ||Day>31){
        alert("Add the correct day !!!")
    }
    
    var day= new Date(Year+"/"+ Month+"/"+day);
    var Birthday= day.getday() 
    if(gender=="male"){
        alert("your name is"+ maleName[Birthday] )
    } else if(gender=="female"){
        alert("Your name is"+ femaleName[Birthday] )
    }
}