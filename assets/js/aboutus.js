
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
      autoplay: false, // Tự động chạy slide
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





    /* code thanh cuộn */
    

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  let navbar = document.getElementById("nav-scroll");
  let currentScroll = window.scrollY;

  if (currentScroll > lastScrollTop && currentScroll > 250) {
    navbar.classList.add("show"); // Hiện navbar khi cuộn xuống
  } else if (currentScroll <= 50) {
    navbar.classList.remove("show"); // Ẩn navbar khi quay về đầu trang
  }

  lastScrollTop = currentScroll;
});
