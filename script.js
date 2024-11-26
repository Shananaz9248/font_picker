const tb=document.getElementById("text_box");

const textColor=document.querySelectorAll(".tc button");
textColor.forEach(button=>{
    button.addEventListener("click",()=>{
       const col=button.style.background;
       tb.style.color=col;
    });
});

const backgroundColor=document.querySelectorAll(".bc button");
backgroundColor.forEach(button=>{
    button.addEventListener("click",()=>{
        const bcol=button.style.background;
        tb.style.background=bcol;
    });
});

const fb=document.querySelectorAll(".font-box button");
fb.forEach(button=>{
    button.addEventListener("click",()=>{
        const bfont=button.style.fontFamily;
        tb.style.fontFamily=bfont;
    })
})