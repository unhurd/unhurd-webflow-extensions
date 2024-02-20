(() => {
    if(document.querySelector(".code-text")){
        const copyCodeBtn = document.querySelector(".code-text");
        const code = document.querySelector(".code").innerText

        function copyCode(e){
            navigator.clipboard.writeText(code);
        }

        copyCodeBtn.addEventListener("click", copyCode)
    }
})()