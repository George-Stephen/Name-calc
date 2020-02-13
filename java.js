function calc(){
    //-Names--/
    var Days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",];
    var maleNames =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",];
    var femaleName =["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",];
    
    alert("calculating....")
    //-Variable--//
    var Year,Month,Day,gender,;
    Year =ParseInt(document.getElementsByClassName('year').value);
    Month =ParseInt(document.getElementsByClassName('month').value);
    Day =ParseInt(document.getElementsByClassName('day').value);
    gender =document.getElementsByClassName('gender').value;
    //--IF functions--//
    if(Month<=0||Month>12){
        alert("Add a correct month!!!");
    }
    else if(Day <=1 ||Day>31){
        alert("Add the correct day !!!")
    }

    var day=new Date(Year+"/"+ Month+"/"+day);
    var Birthday=day.getDay();

    if(gender=="male"){
        alert("your name is"+maleNames[maleNames])
    } else if(gender=="female"){
        alert("Your name is"+femaleNames[femaleNames])
    }
}