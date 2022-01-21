var task=document.getElementById('new-task');
var add=document.getElementById('add');
var incom= document.getElementById('incomplete-tasks');
var del=document.getElementById('cont')
var end=document.getElementById('end')
var filter=document.getElementById('filter-task');
var inp=document.getElementById('inp')
var local=document.getElementById('deletelocal')


add.addEventListener('click',addtask);
del.addEventListener('click',deletetask);
local.addEventListener('click',deletefromlocal);
end.addEventListener('click',deletealltask);
filter.addEventListener('keyup',filtertask);
getfromlocal();
function addtask(e){
    e.preventDefault();
    if(task.value =="")
        alert('no input')
    else{
        console.log('hii',task.value);
        addtolocal(task.value);
        getfromlocal();


        // var list=document.createElement('li');
        // //list.innerHTML=task.value;
        // list.setAttribute('id','task');
        // list.setAttribute('class','total');
        // var but=document.createElement('button');
        // but.textContent='DELETE'
        // but.setAttribute('id','delete');
        // but.style.float='right';
        // list.appendChild(document.createTextNode(task.value))
        // list.append(but)
        // incom.appendChild(list);
       
         console.log('hh',incom.childElementCount)
        
        if(incom.hasChildNodes()){
        document.getElementById('deleteall').style.display='block';
       
        }
        task.value=''
    }
        
}

function addtolocal(data){
let tasks=[];
tasks.push(data);
if(localStorage.getItem('tasks')==null){
    localStorage.setItem('tasks',JSON.stringify(tasks));
}
else{
    var l=localStorage.getItem('tasks');
    var l_new=JSON.parse(l);
    l_new.push(data);
        localStorage.setItem('tasks',JSON.stringify(l_new));


}
}
function getfromlocal(){
    let data=localStorage.getItem('tasks');
    data=JSON.parse(data);
    data.forEach(d=>{
 var list=document.createElement('li');
        //list.innerHTML=task.value;
        list.setAttribute('id','task');
        list.setAttribute('class','total');
        var but=document.createElement('button');
        but.textContent='DELETE'
        but.setAttribute('id','delete');
        but.style.float='right';
        list.appendChild(document.createTextNode(d))
        list.append(but)
        incom.appendChild(list);
    })
   

}
function deletefromlocal(){
    if(confirm('are you sure?')){
        localStorage.removeItem('tasks');
        window.location.reload();
    }
}
function deletetask(e){
if(e.target.id=='delete'){
    e.target.parentElement.remove()
     console.log('hh',incom.childElementCount)
     
}
 console.log('hh',incom.childElementCount)
 if(incom.childElementCount==0){
             document.getElementById('deleteall').style.display='none';
 }
}

function deletealltask(){
    
    
    var l=document.getElementsByTagName("li");
    console.log('ll,',l);
    var len=l.length;
    while(len > 0){                   
              incom.removeChild(l[0]);
              len--;
           }

}
function filtertask(e){
    //var l=incom.children;
    var l=document.querySelectorAll('.total')
    arr=Array.from(l)
    console.log('arr',arr);
    
    l.forEach(em => {
       if(em.childNodes[0].data.toLowerCase().indexOf(e.target.value.toLowerCase())!=-1){
           console.log('ttttrrrrr',em.childNodes[0].data);
          em.style.display='block';


       }
       else{
           em.style.display='none';

       }
        
    });


}