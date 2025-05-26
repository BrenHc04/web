document.addEventListener('DOMContentLoaded', function(){
    let currentIndex = 0;
    const images = document.querySelectorAll('.carousel-images img');
    const totalImages = images.length;
    let intervalId;

    function showImage(index){
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
    }

    function nextImage(){
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage(){
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    function startAutoplay(){
        intervalId = setInterval(nextImage, 3000);
    }

    function stopAutoplay(){
        clearInterval(intervalId);
    }

    document.querySelector('.carousel-next').addEventListener('click', () => {
        stopAutoplay();
        nextImage();
        startAutoplay();
    });

    document.querySelector('.carousel-prev').addEventListener('click', () => {
        stopAutoplay();
        prevImage();
        startAutoplay();
    })

    showImage(0);
    startAutoplay();
})