
/* code carousel, slick, slide ,  */



$(document).ready(function () {

  $('.table-1').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, // Tự động chuyển đổi slide
    autoplaySpeed: 2000 // Thời gian chờ giữa các slide (ms)
  });

  $('.select2').select2();

  jQuery('#datepicker').datetimepicker({
    timepicker: false,
  });
  jQuery('#timepicker').datetimepicker({
    datepicker: false,
  });
  $('.slider').slick({





    dots: true,
    slidesToShow: 3, // Hiển thị 3 slide cùng lúc
    slidesToScroll: 1, // Di chuyển 1 slide khi chuyển đổi
    autoplay: true, // Tự động chạy slide
    autoplaySpeed: 2000, // Tốc độ chạy slide (ms)
    //  prevArrow: ' < button class = "slick-prev" > Previous < /button>', // Nút điều khiển slide trước
    // nextArrow: ' < button class = "slick-next" > Next < /button>', // Nút điều khiển slide kế tiếp
    responsive: [{
      breakpoint: 768, // Tùy chỉnh breakpoint cho responsive
      settings: {
        slidesToShow: 2, // Hiển thị 2 slide ở màn hình có độ rộng từ 768px trở xuống
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1, // Hiển thị 1 slide ở màn hình có độ rộng từ 576px trở xuống
      }
    }]
  });

  $('.multiple-items').slick({});


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
