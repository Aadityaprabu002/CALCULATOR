var expression="";
var expbuffer="...";
var flag = true;

function getinput(string){
      
     if(string == "=")
     { 
         expression+="=";
         calculate();
         showoutput(expression);
     }
     else if(string=="CE")
     {
         expression = ""
         showoutput(expression);
         
     }
     else if(string == "Delete")
     {
          expression = expression.slice(0,expression.length-1);
          console.log(expression.length);
          bufferoverflow(string);
          if(flag == true)
            showoutput(expression);
     }
     else
     {
         bufferoverflow(string);
         expression+=string;
         console.log(expression.length);
         if(flag == true)
            showoutput(expression);
     }
}

function showoutput(op)
{
     document.getElementById('output').innerText=op;
}
function calculate()
{
   console.log("IN CALCULATE");
   console.log(expression);
   list=[];
   temp = ''
   if(expression[0]=='-')
        i=1;
   else 
        i=0;
           
   for(i ;i<expression.length-1;i++)
     {
          if(expression[i]>='0' && expression[i]<='9' || expression[i]=='.')
          {
               temp+=expression[i];
               console.log(expression[i]);
          }
          else{
                list.push(parseFloat(temp));
                list.push(expression[i]);
                temp='';
          }        
     }
     list.push(parseFloat(temp));
     if(expression[0]=='-')
         list[0]=parseFloat('-'+list[0].toString()); 

   console.log(list);
   x=compute(list).toString();
   console.log("in cal again");
   console.log(x);
   expression = x;
   
}
function compute(l)
{
     console.log("in compute");
     while(true)
     {
              console.log("COMPUTING");
              if(1+l.indexOf('/'))
              {
                  i=l.indexOf("/");
                  num1=l[i-1];
                  num2=l[i+1];
                  console.log(l);
                  l.splice(i-1,3,num1/num2); 
                  console.log(l);
                  continue;
              }
              else if(1+l.indexOf('x'))
              {
                i=l.indexOf("x");
                num1=l[i-1];
                num2=l[i+1];
                k = num1*num2;
                l.splice(i-1,3,k);
                console.log(l);
                continue;
              }
              else if(1+l.indexOf('+'))
              {
                i=l.indexOf("+");
                num1=l[i-1];
                num2=l[i+1];
                l.splice(i-1,3,num1+num2);
                continue;
              }
              else if(1+l.indexOf('-'))
              {
                i=l.indexOf("-");
                num1=l[i-1];
                num2=l[i+1];
                l.splice(i-1,3,num1-num2);
                continue;
              }
         break;
    }
           
     console.log(l);
     return l;
}
function bufferoverflow(string)
{
    if(expression.length>=24)
    {
        
        if(string == "Delete")
        {
           
           expbuffer = expbuffer.slice(0,expbuffer.length-1);
           showoutput(expbuffer);
           console.log(expbuffer);
           flag = false;
        }
        else
           expbuffer=expbuffer+string;flag = false;

        showoutput(expbuffer);
        
    }
    else
    {
         console.log("in overflow else");
         flag=true;
         expbuffer="...";
    }


}