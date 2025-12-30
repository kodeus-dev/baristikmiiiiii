const yesBtn = document.getElementById("yes8tn");
const noBtn = document.getElementById("no8tn");
const celebration = document.getElementById("celebration");

noBtn.addEventListener("click", () => {
    const parent = noBtn.parentNode;
    // Butonların mevcut sırasını al
    const buttons = Array.from(parent.children);
    // Butonları ters sıraya koy
    parent.insertBefore(buttons[1], buttons[0]);
});

yesBtn.addEventListener("click", () => {
    celebration.style.display = "block";
});
