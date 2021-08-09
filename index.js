$('#button1').click(function(){
    var $p = $('p');
    for(var i=0; i<$p.length; i++){
      if($($p[i]).css('display') === 'none'){
        $($p[i]).css('display', 'block');
        break;
      }
    }
  });
  

function run(){
    curExp=0;
     lvl = parseInt(document.getElementById("input2").value);
    for( j=0 ; j<lvl ; j++){
    curExp += Math.pow(2,j);
    }
    console.log("Lvl to Exp = "+curExp);
    remLvlExp = parseInt(document.getElementById("input3").value);
    
    console.log("Lvl to Exp = "+curExp+"  Exp left at current Lvl to Exp = "+remLvlExp);
    i=0;
    total = parseInt(document.getElementById("input").value);
    total = parseInt(total +  curExp + remLvlExp)
    
    exp =1;
    for(i=0; exp<=total ;i++){
    console.log("exp="+exp+"  i="+i+" total = "+total);            
    total = total - exp;
    exp=Math.pow(2,i+1);
    }// input = 2, i=1, 1<2 true, exp= 1 i=1+1; 1<2; 

document.getElementById("output").innerHTML= i-lvl +" levels increased";
document.getElementById("output2").innerHTML= "remainder exp = (" + total+" / " + exp + ")" ;
}