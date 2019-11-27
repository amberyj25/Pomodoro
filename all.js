//先把輸入的印出來
//再做刪除
var btn1 =document.querySelector(".btn1");
var ul1=document.querySelector(".ul1");
var ul2=document.querySelector(".ul2");
var ul2Img=document.querySelector(".ul2 li img");
var toDoList=document.querySelector(".one");
var data=JSON.parse(localStorage.getItem("list")) ||[];
addList(data);
function updateList(){
    var text1 =document.querySelector(".text1").value;
    var text2={
        content:text1,
    };
    data.push(text2);
    addList(data);
    localStorage.setItem("list",JSON.stringify(data));
};
btn1.addEventListener("click",updateList,false); 
function addList(item){
    var str="";
    for(var i=0;i<item.length;i++){
        str +='<li data-num="'+i+'"><h2 data-num="'+i+'">'+item[i].content+'</h2><img src="img/icon6.png" data-num="'+i+'"></li>';
    }
    ul2.innerHTML=str;
};
function dele(e){
    var num =e.target.dataset.num;
    var nodeName=e.target.nodeName;
    if(nodeName== "H2"){return};
    if(nodeName =="IMG"){
        ul1.innerHTML="<li>"+data[num].content+"</li>";
    };
    console.log(nodeName);
    data.splice(num,1);
    localStorage.setItem("list",JSON.stringify(data));
    addList(data);
};
ul2.addEventListener("click",dele,false); 