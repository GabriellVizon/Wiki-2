document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".sword-grid article");

  cards.forEach(card => {
    const img = card.querySelector("img");
    const video = card.querySelector(".sword-video");
    const bgColor = card.getAttribute("data-bg");

    img.addEventListener("click", () => {
      // Muda o fundo da página
    

      // Alterna visibilidade do vídeo
      if (video.style.display === "none" || video.style.display === "") {
        video.style.display = "block";
        video.play();
      } else {
        video.pause();
        video.style.display = "none";
      }
    });

    // Esconde o vídeo após terminar com delay
    video.addEventListener("ended", () => {
      setTimeout(() => {
        video.style.display = "none";
        video.currentTime = 0;
      }, 2000);
    });
  });
});
