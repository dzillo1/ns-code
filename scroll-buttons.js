document.addEventListener('DOMContentLoaded', () => {
    const cardWrap = document.getElementById('cardWrap');
    const scrollLeftBtn = document.getElementById('scrollLeftBtn');
    const scrollRightBtn = document.getElementById('scrollRightBtn');
    scrollRightBtn.style.opacity = '1';
    function updateButtonOpacity() {
        if (cardWrap.scrollLeft === 0) {
            scrollLeftBtn.style.opacity = '0.5';
        } else {8
            scrollLeftBtn.style.opacity = '1';
        }
        if (cardWrap.scrollLeft + cardWrap.clientWidth >= cardWrap.scrollWidth) {
            scrollRightBtn.style.opacity = '0.5';
        } else {
            scrollRightBtn.style.opacity = '1';
        }
    }
    scrollLeftBtn.addEventListener('click', function() {
        cardWrap.scrollBy({
            left: -300, 
            behavior: 'smooth'
        });
    });
    scrollRightBtn.addEventListener('click', function() {
        cardWrap.scrollBy({
            left: 300, 
            behavior: 'smooth'
        });
    });
    cardWrap.addEventListener('scroll', updateButtonOpacity);
    updateButtonOpacity();
	});
