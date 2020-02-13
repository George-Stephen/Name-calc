function calc(){
    alert("calculating....")
    var Century,Year,Month,Day,gender,Date;
    Century =document.getElementsByClassName('century').value;
    Year =document.getElementsByClassName('year').value;
    Month =document.getElementsByClassName('month').value;
    Day =document.getElementsByClassName('day').value;
    gender =document.getElementsByClassName('gender').value;
    document.getElementById('demo').innerHTML= (gender)
    Date =( ( (Century/4) -2*Century-1) + ((5*Year/4) ) + ((26*(Month+1)/10)) + Day ) mod 7 ;
    alert(Date)

};