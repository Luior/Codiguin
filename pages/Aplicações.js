function Abrir()
{
    document.querySelector("#menu").style.transform="translate(0vh, 0vh)"
    document.querySelector(".icon").style.margin="0vh 0vh 0vh 21vh"
    document.querySelector(".fa-arrow-left").style.opacity="1"
    document.querySelector("#icon_menu").style.opacity="0"
    document.querySelector("#icon_menu").style.cursor="default"
    document.querySelector(".icon").style.cursor="default"
}

function Fechar()
{
    document.querySelector("#menu").style.transform="translate(-31vh, 0vh)"
    document.querySelector(".icon").style.margin="0vh 0vh 0vh 0vh"
    document.querySelector(".fa-arrow-left").style.opacity="0"
    document.querySelector("#icon_menu").style.opacity="1"
    document.querySelector("#icon_menu").style.cursor="pointer"
    document.querySelector(".icon").style.cursor="pointer"
}