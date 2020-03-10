const links = document.querySelectorAll(".main-content li a");

for (const link of links) {
  link.target = "_blank";
}
