function renderLink() {
  const $project = $("#project");
  links.project.forEach(link => {
    let $wrapper = $(doms.li);
    $wrapper.text(link.name);

    a(link, $wrapper);

    $project.append($wrapper);
  });

  const $review = $("#review");
  a(links.review, $review);
}

function a(link, $parents) {
  link.urls.forEach(url => {
    let $a = $(doms.a);
    $a.prop("href", url.url);
    $a.text(`(${url.name})`);
    $a.addClass(link.className);

    $parents.append($a);
  });
}

function toggleDisableCheckbox(e) {
  const cookie = {
    url: COOKIE_URL,
    path: "/",
    name: COOKIE_NAME,
    value: "",
    expirationDate: ""
  };

  if(e.target.checked) {
    cookie.value = "true";
    cookie.expirationDate = makeDateTime(365);
  } else {
    cookie.value = "false";
    cookie.expirationDate = makeDateTime(-1);
  }
  chrome.cookies.set(cookie);
}

function bindEvent() {
  const disableCheckbox = document.querySelector("#disableCheckbox");
  disableCheckbox && disableCheckbox.addEventListener("click", toggleDisableCheckbox);
}

function renderView() {
  const disableCheckbox = document.querySelector("#disableCheckbox");
  try {
    chrome.cookies.get({url: COOKIE_URL, name: COOKIE_NAME}, function(c){
      const isDisable = c && c.value;

      disableCheckbox.checked = isDisable === "true";
    });
  } catch (e) {
    console.log(e);
  }
}

function init() {
  renderLink();
  renderView();
  bindEvent();
}

function makeDateTime(exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  return d.getTime();
}

window.addEventListener("load", init);
