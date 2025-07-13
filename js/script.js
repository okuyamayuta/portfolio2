document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 50) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');

  // ヘッダーの表示/非表示
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
  });

  // フェードイン表示処理
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.2
  });

  document.querySelectorAll('.fadein').forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Swiperの初期化
  new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        centeredSlides: true,      // ← 追加：スマホで中央寄せ
        spaceBetween: 20
      },
      768: {
        slidesPerView: 3,
        centeredSlides: false,
        spaceBetween: 20
      }
    }
  });
});


