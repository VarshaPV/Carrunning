margin=0;

function start()
{
    y=setInterval(car,100);
    
    function car()
    {
        if(margin==1110)
            {
                clearInterval(y);
                margin=0;
            }
        else
            {
                   margin+=10;
    var x=document.getElementById('car');
    x.style.marginLeft=margin+"px"; 
            }
    }
    
          
        }
            

function stop()
{
    clearInterval(y);
   
}