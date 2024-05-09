let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newbtn=document.querySelector(".new");

let turno=true;



const resetgame=()=>{
    turno=true;
    win.innerText="";
    enabledbox();
}


const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno){
            box.innerHTML='X';
            turno=false;
        
        }
        else{
            box.innerHTML='O';
            turno=true;
        }
        box.disabled=true;
        checkwinner();
    })
});
const disabledbox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enabledbox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const win=document.querySelector(".win");
const checkwinner=()=>{
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos1==pos2 && pos2==pos3){
            if(pos1=="X"){
                win.innerText="X Won";
            }
            else{
                win.innerText="O Won";
            }

            // after winning all the button are disabled
            disabledbox();
        }
    }
}
resetbtn.addEventListener("click",resetgame);
newbtn.addEventListener("click",resetgame);
