/*- close-panel -*/
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".close-panel__btn").addEventListener("click", () => {
        document.querySelector(".close-panel").classList.add("hidden");
    });
});