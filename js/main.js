$(".home").animate({ height: "85vh" }, 1000, () => {
  $(".home .overlay .text-content").fadeIn(1000, () => {
    $(".duration").show(1000, () => {
      $(".details").fadeIn(2000, () => {
        $(".contact").show(1000);
      });
    });
  });
});

$("#open").click(function () {
  if ($(".home .overlay .navbar-menu").width() == 0) {
    $(this).animate({ left: "19%" });
    $(".home .overlay .navbar-menu").animate({ width: 300 });
  }
});

$("#open").click(function () {
  if ($(".home .overlay .navbar-menu").width() == 300) {
    $(".home .overlay .navbar-menu").animate({ width: 0 });
    $(this).animate({ left: "2%" });
  }
});

$("#close").click(function () {
  if ($(".home .overlay .navbar-menu").width() == 300) {
    $(".home .overlay .navbar-menu").animate({ width: 0 });
    $("#open").animate({ left: "2%" });
  }
});

let singers = document.querySelectorAll(
  ".duration .container .row .box .singer"
);
let allq = document.querySelectorAll(".duration .container .row .box p");

for (let i = 0; i < singers.length; i++) {
  $(singers[i]).click(() => {
    $(allq[i]).slideToggle();
  });
}

let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

let x = setInterval(() => {
  seconds.innerHTML++;
  if (seconds.innerHTML == 60) {
    seconds.innerHTML = 0;
    minutes.innerHTML--;
    if (minutes.innerHTML == 0) {
      minutes.innerHTML = 60;
    }
  }
}, 1000);

let regexName = /^[A-z][a-z]{1,}$/;
let regexEmail = /^[a-z|A-Z]{1,}[0-9]{1,5}@(yahoo|gmail).(com|eg|edu)$/;
let regexTextarea = /^[0-9]{1,100}$/;

send.addEventListener("click", (e) => {
  if (
    regexName.test($("#name").val()) === true ||
    regexEmail.test($("#email").val() === true)
  ) {
    return true;
  } else {
    e.preventDefault();
  }
});

let textarea = ".contact .container .row .box textarea";
let span = ".contact .container .row .box p span";
let p = ".contact .container .row .box p";

$(textarea).keyup(function () {
  $(span).text($(this).val().length);

  if (Number($(span).text()) > 100) {
    $(p).html("Not more than <span class='num px-2 text-danger'>100</span>");

    if (regexTextarea.test($(this).val.length) == true) {
      $(this).attr("readonly", "readonly");
      // $(this).val() = $(this).val().substring(0,100)
    }
  }
});

// read this
// show me how to make the num of span moving down when typing in the textarea

// $(".contact .container .row .box textarea").keyup(function () {
//   let text = $(".contact .container .row .box p span").text();
//   if ($(this).val() < 100) {

//   }
//   console.log(text);
// });
