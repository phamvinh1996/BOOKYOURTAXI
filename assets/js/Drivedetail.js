
/* code carousel, slick, slide ,  */



$(document).ready(function () {

  $('.table-1').slick({
    arrows: false,
    dots: true,
    // dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,

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















    // dots: true,
    // slidesToShow: 2, // Hiển thị 3 slide cùng lúc
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









/* dùng điện thoại */


 $(document).ready(function () {
  function initializeSlider() {
    // Xóa slider nếu đã khởi tạo trước đó
    if ($('.table-1').hasClass('slick-initialized')) {
      $('.table-1').slick('unslick');
    }

    // Kiểm tra kích thước màn hình
    if (window.matchMedia("(max-width: 768px)").matches) {
      // Thiết lập cho màn hình nhỏ
      $('.table-1').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Hiển thị 1 slide trên màn hình nhỏ
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      });
    } else {
      // Thiết lập cho màn hình lớn
      $('.table-1').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Hiển thị 2 slide trên màn hình lớn
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000
      });
    }
  }

  // Gọi hàm khởi tạo khi tải trang
  initializeSlider();

  // Lắng nghe sự thay đổi kích thước màn hình
  $(window).resize(function () {
    initializeSlider();
  });
});







