document.addEventListener("DOMContentLoaded", () => {
  const html__value = document.querySelector("textarea[name='html']");
  const style = document.querySelector("style");
  const css__value = document.querySelector("textarea[name='css']");
  const run__code = document.querySelector(".run");
  const output = document.querySelector(".output");
  console.log(style);
  run__code.addEventListener("click", () => {
    output.innerHTML = `${html__value.value}`;
    style.innerHTML = `${css__value.value}`
  });
});
