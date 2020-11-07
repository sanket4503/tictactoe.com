let a ;
let b ;
let c;
onevalue();
function onevalue()
{
  a=1;
  b=1;
  c=1;
}




function store1()
{
 let player1=document.getElementById("pname1").value;

 localStorage.clear();
 localStorage.setItem("value1",player1);


}



function store2()
{
 let player2=document.getElementById("pname2").value;



localStorage.setItem("value2",player2);

}

let fpname=localStorage.getItem('value1');
let spname=localStorage.getItem('value2');
let sign = "x";
let disp = document.getElementById("notice");
let divvalue;


function scorename()
{
  document.getElementById("pnumber1").innerHTML = localStorage.getItem("value1");


document.getElementById("pnumber2").innerHTML = localStorage.getItem("value2");

  


}








function play(number){
    let divvalue = document.getElementById("d"+number);
  console.log(divvalue);

  if(divvalue.innerText==""){


  divvalue.innerText=sign;
  

  winner();


  checksign();
  
    printname();


  
  }
  
  
}
function checksign(){
    if(sign=="x")
    	{
    		sign ="o";


}

    else sign = "x";
   
}
function getbox(no){
    return document.getElementById("d"+no).innerHTML;
}
function checkmove(a,b,c,m){
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
       return true;
    else return false;   
}

function winner(){
if(checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)
    ||checkmove(1,4,7,sign)||checkmove(2,5,8,sign)||checkmove(3,6,9,sign)
    ||checkmove(1,5,9,sign)||checkmove(7,5,3,sign)){

	if(sign=="x")
	{


    swal("congratulations "+ fpname +"... You Win The Game");

    
    
    document.getElementById("P1points").innerHTML=a;
    a++;

}else

	{
		swal("congratulations "+ spname +"... You Win The Game");

        document.getElementById("P2points").innerHTML=b;
        b++;

	}



    for(let i=1;i<=9;i++){
        document.getElementById("d"+i).innerHTML="";
    }
   
}else{
    if(getbox(1)!=""&& getbox(2)!=""&& getbox(3)!=""&&
   getbox(4)!=""&& getbox(5)!=""&& getbox(6)!=""&&
   getbox(7)!=""&& getbox(8)!=""&& getbox(9)!=""){

        swal("OPPS ! THIS GAME  IS TIE ...");
    for(let i=1;i<=9;i++){
        document.getElementById("d"+i).innerHTML="";


    	}

      document.getElementById("tie").innerHTML=c;
      c++;

    	    
    }



  
}
} 


function printname()
{
	if(sign=="x")
	{

		document.getElementById("notice").innerHTML ="<center> "+fpname+"</br>Now This is Your Turn </center";
	}else
	{

		document.getElementById("notice").innerHTML ="<center>"+spname+" </br>Now This is Your Turn</center>";
	}
}
 
