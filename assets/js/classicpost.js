
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
    // slidesToShow: 3, // Hiển thị 3 slide cùng lúc
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
  /* mục about company */
// Open the modal and load the video
function openVideo(event) {
event.preventDefault(); // Prevent the default anchor behavior
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('youtubeVideo');

// Show the modal
modal.style.display = 'block';

// Set the YouTube video URL with autoplay
iframe.src = "https://www.youtube.com/embed/lrf-GAYUOkQ?autoplay=1";
}

// Close the modal and stop the video
function closeVideo() {
const modal = document.getElementById('videoModal');
const iframe = document.getElementById('youtubeVideo');

// Hide the modal
modal.style.display = 'none';

// Stop the video by resetting the iframe source
iframe.src = "";
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
const modal = document.getElementById('videoModal');
if (event.target === modal) {
  closeVideo();
}
};
