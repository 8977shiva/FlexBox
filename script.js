$(document).ready(function () {
    
    $('#flex').click(function (e) { 
        e.preventDefault();
        $('ul').css('display','flex')
        alert("display flex added")
    });
    $('#flex-d').change((e)=>{
        let direction=$("#flex-d").val();
        console.log(direction)
        $('ul').css('flex-direction',direction)
    })
});