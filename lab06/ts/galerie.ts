const images: string[] = [
  "../media/g1.jpeg",
  "../media/g2.jpeg",
  "../media/g3.jpeg"
];

const mainImage = document.getElementById(
  "carousel-image"
) as HTMLImageElement;

if (!mainImage) {
  throw new Error("Elementul carousel-image nu a fost găsit!");
}

let currentIndex = 0;

function showNextImage(): void {
  currentIndex = (currentIndex + 1) % images.length;
  mainImage.src = images[currentIndex]!;
}

setInterval(showNextImage, 3000);

const galleryTitle = document.getElementById("gallery-title");

if (galleryTitle) {
  galleryTitle.animate(
    [
      { opacity: 0, transform: "translateY(-20px)" },
      { opacity: 1, transform: "translateY(0)" }
    ],
    {
      duration: 1000,
      easing: "ease-out",
      fill: "forwards"
    }
  );
}
