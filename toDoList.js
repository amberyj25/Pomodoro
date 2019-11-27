var btn=document.querySelector("#btn2");
var toDoListUl = document.querySelector(".toDoContent");
var doneContentUl = document.querySelector(".doneContent");
var data =JSON.parse(localStorage.getItem("list")) || [];
list(data);
function  addList(){
    var text = document.querySelector(".text1").value;
    var allList={
        content: text,
    };
    data.push(allList);
    localStorage.setItem("list",JSON.stringify(data));
    list(data);
};
btn.addEventListener("click",addList,false); 
function list(item){
    var str="";
    for(var i=0;i<item.length;i++){
        str +='<li data-num="'+i+'"><h2 data-num="'+i+'">'+item[i].content+'</h2><img src="img/icon6.png" data-num="'+i+'"></li>';
    };
    toDoListUl.innerHTML=str;
};
var str1="";
function addDone(e){
    var text= e.target.textContent;
    var num=e.target.dataset.num;
    var nodeName=e.target.nodeName; 
    if(nodeName == "LI"){
    str1 +="<li>"+text+"</li>";
    doneContentUl.innerHTML=str1;
    console.log(num);
    console.log(e.target.nodeName);
    data.splice(num,1);
    localStorage.setItem("list",JSON.stringify(data));
    list(data)
    };
};
toDoListUl.addEventListener("click",addDone,false);
var toDoListDiv=document.querySelector(".toDoList");
function toDoListOpen(){
    self.location.href="toDoList.html";
};
toDoListDiv.addEventListener("click",toDoListOpen,false);
var analyticsDiv=document.querySelector(".analytics");
function analyticsOpen(){
    self.location.href="analytics.html";
};
analyticsDiv.addEventListener("click",analyticsOpen,false);
var ringTonesDiv=document.querySelector(".ringTones");
function ringTonesOpen(){
    self.location.href="ringTones.html";
};
ringTonesDiv.addEventListener("click",ringTonesOpen,false);