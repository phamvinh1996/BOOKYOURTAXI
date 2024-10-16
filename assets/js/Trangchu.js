/* hiệu ứng website */
window.addEventListener('load', function() {
  setTimeout(function() {
      var loading = document.getElementById('loading-wrapper');
      loading.style.display = 'none';
  }, 1000); // Đặt thời gian trễ 1 giây (1000ms) trước khi ẩn phần tử loading và hiển thị kết quả
  
});
/*  */
document.getElementById("searchBtn").addEventListener("click", function() {
    console.log(123)
    var searchContainer = document.getElementById("searchContainer");
    if (searchContainer.style.display === "none") {
      searchContainer.style.display = "block";
    } else {
      searchContainer.style.display = "none";
    }
  });
  /*  */
  document.addEventListener('DOMContentLoaded', function() {
    var iconContainer = document.querySelector('.icon-container');
    var carInfo = document.getElementById('carInfo');
    carInfo.style.display = 'none'; // Ẩn carInfo ban đầu
  
    iconContainer.addEventListener('click', function() {
      carInfo.style.display = carInfo.style.display === 'none' ? 'block' : 'none';
    });
  });
  
  /*  */
    
  
  /*  */
    $(document).ready(function() {
      var car = $('.car');
    
      function animateCar() {
        car.addClass('animate');
        setTimeout(function() {
          car.removeClass('animate');
        }, 3000);
      }
    
      setInterval(animateCar, 6000);
    });
  /*  */
  
    window.addEventListener('DOMContentLoaded', function() {
      var bannerImage = document.getElementById('banner-image');
      var overlay = document.getElementById('overlay');
      var border = document.getElementById('border');
    
      bannerImage.addEventListener('load', function() {
        overlay.style.width = bannerImage.clientWidth + 'px';
        overlay.style.height = bannerImage.clientHeight + 'px';
      });
    
      window.addEventListener('resize', function() {
        overlay.style.width = bannerImage.clientWidth + 'px';
        overlay.style.height = bannerImage.clientHeight + 'px';
      });
    });
  
  /*  */
    var prevScrollpos = window.pageYOffset;
  var navbar = document.getElementById("navbar");
  var toggleNav = document.getElementById("toggleNav");
  
  toggleNav.addEventListener("click", function() {
    navbar.classList.toggle("hidden");
  });
  
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.classList.remove("hidden");
    } else {
      navbar.classList.add("hidden");
    }
    prevScrollpos = currentScrollPos;
  }
  /*  */
  const cars = document.querySelectorAll('.car');
  
  function startAnimation() {
    cars.forEach(car => {
      car.style.animationPlayState = 'running';
    });
  }
  
  function stopAnimation() {
    cars.forEach(car => {
      car.style.animationPlayState = 'paused';
    });
  }
  
  /*  */
  const carIcon = document.querySelector('.car-icon');
  
  function startMoving() {
    carIcon.classList.add('move');
  }
  
  function stopMoving() {
    carIcon.classList.remove('move');
  }
  
  // Gọi hàm startMoving để bắt đầu di chuyển
  startMoving();
  
  /*  */
  
  /* chuyển động xe ô tô  foooter*/
  
  const car = document.querySelectorAll('.car');
  
  // Thiết lập thời gian chờ giữa mỗi lần di chuyển
  const delay = 2; // Thời gian chờ giữa các di chuyển (đơn vị giây)
  
  // Thiết lập di chuyển cho từng ô tô
  cars.forEach((car, index) => {
    car.style.animationDelay = `${index * delay}s`;
  });
  
  /* Dịch vụ nổi  bật */
  $('.single-item-rtl').slick({
    rtl: true
  });
  /* di chuyển trang dịch vụ nổi bât */
   $('.multiple-items').slick({
     infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
   });
  /*  */
  $(document).ready(function () {
    $('.slider').slick({
      slidesToShow: 3, // Hiển thị 3 slide cùng lúc
      slidesToScroll: 1, // Di chuyển 1 slide khi chuyển đổi
     autoplay: true, // Tự động chạy slide
      autoplaySpeed: 2000, // Tốc độ chạy slide (ms)
     responsive: [
      {
        breakpoint: 768, // Tùy chỉnh breakpoint cho responsive
         settings: {
           slidesToShow: 2, // Hiển thị 2 slide ở màn hình có độ rộng từ 768px trở xuống
         }
       },
       {
         breakpoint: 576,
          settings: {
           slidesToShow: 1, // Hiển thị 1 slide ở màn hình có độ rộng từ 576px trở xuống
          }
        }
    ]
    });
     // Bắt sự kiện click cho nút "Previous"
     $('.prev-btn').click(function(){
      $('.slider').slick('slickPrev'); // Di chuyển đến slide trước
    });
    // Bắt sự kiện click cho nút "Next"
    $('.next-btn').click(function(){
      $('.slider').slick('slickNext'); // Di chuyển đến slide kế tiếp
    });
  });
  /*  */
  $(document).ready(function () {
    $('.multiple-items').slick({
    });
  });
  /* code cắt thanh nav trangchu, phần menu */
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const content = document.querySelector('.content');
  const cartItems = document.querySelectorAll('.cart');
  const cartWidth = cartItems[0].offsetWidth;
  const containerWidth = content.offsetWidth;
  let currentIndex = 0;
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      content.scrollLeft = currentIndex * cartWidth;
    }
  });
  nextButton.addEventListener('click', () => {
    if (currentIndex < cartItems.length - 1) {
      currentIndex++;
      content.scrollLeft = currentIndex * cartWidth;
    }
  });
  /* hon 10000 */
  
  const carouselItems = document.querySelectorAll('.carousel-content');
  let currentItem = 0;
  
  function showItem(index) {
    carouselItems.forEach((item, i) => {
      if (i === index) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  function nextItem() {
    currentItem = (currentItem + 1) % carouselItems.length;
    showItem(currentItem);
  }
  
  function prevItem() {
    currentItem = (currentItem - 1 + carouselItems.length) % carouselItems.length;
    showItem(currentItem);
  }
  
  document.querySelector('.carousel').addEventListener('click', nextItem);
  document.querySelector('.carousel').addEventListener('contextmenu', (e) => {
    e.preventDefault();
    prevItem();
  });
  /*  */
  /* di chuyển trang hon 1000 khach hang */
  /* dich vu noi bat... */
document.getElementById('navbar-toggler').addEventListener('click', function() {
  const bars = document.querySelectorAll('.bar');
  bars.forEach(bar => bar.classList.toggle('active')); // Bật hoặc tắt lớp active
});