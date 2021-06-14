
console.clear();
var num1 = "";
var equation = "";
var display = "";


btone.onclick = function fun1()
{
  
   
     num1+= "1";
     console.log(num1);
     equation += "1";
     display += "1";
     display_input.innerText = display;
     
    
     
    
   
}

bttwo.onclick = function fun2(){
    num1+="2";
    console.log(num1);
    equation+= "2";
    display += "2";
    display_input.innerText = display;
     
    
    
};

btthree.onclick = function fun3(){
    num1+="3";
    console.log(num1);
    equation+= "3";
    display += "3";
    display_input.innerText = display;
};

btfour.onclick = function fun4(){
    num1+="4";
    console.log(num1);
    equation+= "4";
    display += "4";
    display_input.innerText = display;
};

btfive.onclick = function fun5(){
    num1+="5";
    console.log(num1);
    equation+= "5";
    display += "5";
    display_input.innerText = display;
};

btsix.onclick = function fun6(){
    num1+="6";
    console.log(num1);
    equation+= "6";
    display += "6";
    display_input.innerText = display;
};

btseven.onclick = function fun7(){
    num1+="7";
    console.log(num1);
    equation+= "7";
    display += "7";
    display_input.innerText = display;
};

bteight.onclick = function fun8(){
    num1+="8";
    console.log(num1);
    equation+= "8";
    display += "8";
    display_input.innerText = display;
};

btnine.onclick = function fun9(){
    num1+="9";
    console.log(num1);
    equation+= "9";
    display += "9";
    display_input.innerText = display;
};

btzero.onclick = function fun0(){
    num1+="0";
    console.log(num1);
    equation+= "0";
    display += "0";
    display_input.innerText = display;
};


btres.onclick= function res()
{
    
     
    if(equation.includes("exp"))
    {
        let y = equation.indexOf("exp");
        let z = equation.substr(0,y);
        console.log(z);
        let sub1 = equation.lastIndexOf("p");
        sub1 += 1;
        let sub2 = equation.substr(sub1);
        console.log(Math.pow(eval(z),eval(sub2)));
        display += "=";
        display_input.innerText = display;
        display = "";
        display +=  Math.pow(eval(z),eval(sub2));
        display_input.innerText = display;
    }
    else if(equation.includes("ec"))
    {
        let y = equation.indexOf("ec");
        let z = equation.substr(0,y);
        console.log(z);
        let sub1 = equation.lastIndexOf("c");
        sub1 += 1;
        let sub2 = equation.substr(sub1);
        function per(a, b)
        {
            let per1 = a/100 * b;
            return per1;
        }
        per(eval(z),eval(sub2));
        display += "=";
        display_input.innerText = display;
        display = "";
        display += per(eval(z),eval(sub2)) ;
        display_input.innerText = display;
        //console.log(Math.pow(eval(z),eval(sub2)));
    }
    else if(equation.includes("root"))
    {
        let y = equation.indexOf("root");
        let z = equation.substr(0,y);
        console.log(z);
        let sub1 = equation.lastIndexOf("t");
        sub1 += 1;
        let sub2 = equation.substr(sub1);
        if(sub2.includes("2"))
        {
        console.log(Math.sqrt(eval(z),eval(sub2)));
        display += "=";
        display_input.innerText = display;
        display = "";
        display += Math.sqrt(eval(z),eval(sub2)) ;
        display_input.innerText = display;
        }
        else if(sub2.includes("3"))
        {
        console.log(Math.cbrt(eval(z),eval(sub2)));
        display += "=";
        display_input.innerText = display;
        display = "";
        display += Math.cbrt(eval(z),eval(sub2)) ;
        display_input.innerText = display;
        }
        else
        {
            console.clear();
            display = "";
            display_input.innerText = display;
        }
    }
    else
    {
        var result = eval(equation);
        console.log(result);
        display += "=";
        display_input.innerText = display;
        display = "";
        display += result ;
        display_input.innerText = display;
    }
        
   
}

btnplus.onclick = function sum()
{
  equation += "+";
  display += "+";
  display_input.innerText = display;
  for(var i= 0;i<equation.length; i++)
  {
      if(equation[i] == equation[i+1])
      {
          //let x = charAt(equation[i+1]);
          //console.log(x);
          console.log(equation);
          equation = equation.replace(/(.)(?=.*\1)/g, "");
          console.log(equation);
          
      }
  }
}

btnmul.onclick = function mul()
{
    equation += "*";
    display += "*";
    display_input.innerText = display;
}

btnmin.onclick = function min()
{
    equation += "-";
    display += "-";
    display_input.innerText = display;
    for(var i= 0;i<equation.length; i++)
    {
        if(equation[i] == equation[i+1])
        {
            //let x = charAt(equation[i+1]);
            //console.log(x);
            console.log(equation);
            equation = equation.replace(/(.)(?=.*\1)/g, "");
            console.log(equation);
            
        }
    }
}

btndiv.onclick = function div()
{
    equation += "/";
    display += "/";
    display_input.innerText = display;
    for(var i= 0;i<equation.length; i++)
    {
        if(equation[i] == equation[i+1])
        {
            //let x = charAt(equation[i+1]);
            //console.log(x);
            console.log(equation);
            equation = equation.replace(/(.)(?=.*\1)/g, "");
            console.log(equation);
            
        }
    }
}
btnexp.onclick = function exp()
{
    equation += "exp";
    display += "^";
    display_input.innerText = display;
    
}

btnroot.onclick = function root()
{
    equation += "root";
    display += "√";
    display_input.innerText = display;
}
btnpi.onclick = function pi()
{
    equation += "3.14";
    display += "3.14";
    display_input.innerText = display;
}
btnlog.onclick = function log1()
{
    equation += "log"
   
    if(equation.includes("log"))
    {
        let y = equation.indexOf("log");
        let z = equation.substr(0,y);
       
        console.log(Math.log(eval(z)));  
        display += "log";
        display_input.innerText = display;
        display = "";
        display += Math.log(eval(z)) ;
        display_input.innerText = display;
    }
}
btnopn.onclick = function opn()
{
    num1 += "(";
    console.log(num1)
    equation += "(";
    display += "(";
     display_input.innerText = display;
}
btncls.onclick = function cls()
{
    equation+=")";
    num1 += ")";
    console.log(num1);
    display += ")";
     display_input.innerText = display;
}
btnperct.onclick = function ec()
{
    equation += "ec";
    display += "%";
     display_input.innerText = display;
}



