const btn = document.getElementById("getBtn");
const contain = document.getElementById("container");
async function getAnyAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const result = await response.json();
    const htmlTemple = `  <p class="Advice">Advice Slip: ${result.slip.id} #</p>
        <p id="displays" class="open">
          " ${result.slip.advice}"
        </p>`;
    contain.innerHTML = htmlTemple;
    const Advice = contain.querySelector(".Advice");
    const open = contain.querySelector(".open");
    Advice.classList.add("fade-in");
    open.classList.add("fade-in");
    console.log(Advice) 
  } catch (error) {
    console.log(error);
    contain.innerHTML ="<i> Oops! Something went wrong. Please try again. </i>";
  }
}
btn.addEventListener("click", getAnyAdvice);
setInterval(getAnyAdvice, 2000);
