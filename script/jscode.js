//to add various expression enter by the user
const add=(num)=> 
{
    document.form.text.value=document.form.text.value + num
};

//to evaluate user entered expression
const equal= ()=>
{
    const data = document.form.text.value;
    if(data)
    {
        document.form.text.value=eval(data);
    }
    else
    {
        document.form.text.value="error";
    }


}
//to empty the input field
empty = ()=> document.form.text.value="";
//this function is used to take one step back 
function backward()    
{
    const data=document.form.text.value;
    document.form.text.value=data.substring(0,data.length-1);
}
