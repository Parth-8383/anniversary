function openLetter() {
    document.getElementById("popup").style.display = "flex";
}

function closeLetter() {
    document.getElementById("popup").style.display = "none";
}

/* Floating hearts */
setInterval(() => {
    let heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 95 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}, 350);

/* Music autoplay fix for iPhone */
document.addEventListener("click", () => {
    const bg = document.getElementById("bgMusic");
    if(bg && bg.paused) bg.play().catch(()=>{});
});
