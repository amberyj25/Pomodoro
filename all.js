//先把輸入的印出來
//再做刪除
var btn1 =document.querySelector(".btn1");
var ul2=document.querySelector(".ul2");
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
        str +='<li><h2 data-num="'+i+'">'+item[i].content+'</h2><img src="img/icon6.png"></li>';
    }
    ul2.innerHTML=str;
};

function dele(e){
    var num =e.target.dataset.num;
    var nodeName=e.target.nodeName;
    console.log(num);
    if(nodeName !== "H2"){return};
    data.splice(num,1);
    addList(data);
};
ul2.addEventListener("click",dele,false);