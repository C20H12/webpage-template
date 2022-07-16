const phoneNumberBtn = document.querySelector("[data-phonenumber]");
const seeProductsBtn = document.querySelector("[data-see-products]");

phoneNumberBtn.addEventListener("click", () => {
  const isPhone = window.matchMedia("only screen and (max-width: 760px)").matches;
  if (isPhone) {
    const a = document.createElement('a');
    a.href = `tel:${phoneNumberBtn.innerHTML}`;
    a.click()
  }
});

seeProductsBtn.addEventListener("click", () => {
  const a = document.createElement('a');
  a.href = `#products`;
  a.click();
});