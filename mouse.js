var outerDiv = document.getElementById('outer');
outer.addEventListener('mouseover',function(){
    console.log('mouse over');
});
outer.addEventListener('mouseout',function(){
    console.log('mouse out');
});

var inputsearch=document.getElementById('search');
inputsearch.addEventListener('keypress',function(event){
    console.log('key press',event.keyCode);

});

document.addEventListener('keypress',function(event){
    console.log('key press',event.keyCode);
});