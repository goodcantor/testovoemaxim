function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  let countdown = setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      clearInterval(countdown);
      display.textContent = "00:00";
    }
  }, 1000);
}

window.onload = function () {
  let fiveMinutes = 60 * 5,
    display = document.querySelector("#timer");
  startTimer(fiveMinutes, display);
};

function handleSubmit(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  let currentUrl = new URL(window.location.href);
  let searchParams = currentUrl.searchParams;

  searchParams.set("email", email);
  searchParams.set("phone", phone);

  let proxyUrl = "https://salebot.site/6442191d104621e96657af29022194b5_1";
  let redirectUrl = new URL(proxyUrl);

  redirectUrl.search = searchParams.toString();

  // window.location.href = redirectUrl.href;
  console.log(redirectUrl.href);
}

document
  .getElementById("subscription-form")
  .addEventListener("submit", handleSubmit);
