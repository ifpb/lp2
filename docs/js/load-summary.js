const h1 = document.querySelector(".main-content h1");
const titles = Array.from(document.querySelectorAll(".main-content h2"));
let summary = "";

for (const index in titles) {
  const content = titles[index].innerHTML;
  const href = titles[index].id;
  summary += `<a href="#${href}">${content} ${dates[index]}</a><br>`;
  titles[index].insertAdjacentHTML("beforeend", " " + dates[index]);
}

h1.insertAdjacentHTML("afterend", `<p>${summary}</p>`);
