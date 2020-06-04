$(document).ready(function () {
  $("#flex").click(function (e) {
    e.preventDefault();
    $("ul").css("display", "flex"); // display:flex
    alert("display flex added");
  });
  $("#flex-d").change((e) => {
    let direction = $("#flex-d").val();
    console.log(direction);
    $("ul").css("flex-direction", direction); // flex-drection:
  });
  $("#flex-w").change((e) => {
    let wrap = $("#flex-w").val();
    console.log(wrap);
    $("ul").css("flex-wrap", wrap); // flex-wrap:
  });
  $("#flex-f").click(() => {
    $("ul").css("flex-flow", "row wrap"); // flex-flow:
  });
  $('#jc').change(()=>{
      let content=$('#jc').val();
    //   console.log(content)
      $('ul').css("justify-content", content);

  });
  
  $('#ai').change(()=>{
       let  align=$('#ai').val();
      console.log(align)
      $('ul').css("align-items", align)
  })
});
