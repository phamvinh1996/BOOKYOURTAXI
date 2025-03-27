/* taxi liên tỉnh giá tốt */
.header-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eee;
    padding: 10px;
    margin-top: -66px;
  }
  
  
  .navbar-left {
    flex-grow: 1;
  }
  
  .navbar-right {
    display: flex;
    gap: 10px;
  }
  
  .navbar-on1 {
    position: relative;
    left: 35px;
    top: 86px;
    font-size: 15px;
    font-weight: bold;
    padding: 22px;
  }
  
  /* code css màu menu thanh nav */
  
  p {
    font-size: 28px;
    text-align: left;
  }
  
  .call-for-ride {
    color: #999;
    font-weight: 400;
  }
  
  .find1 {
    color: #999;
    font-weight: 400;
  }
  
  .email {
    color: #999;
    font-weight: 400;
  }
  
  .phone-number {
    color: orange;
    font-size: 28px;
  }
  
  /*  */
  .every111 {
    color: #999;
    font-weight: 400;
  }
  
  .logoridekft {
    width: 206px;
  }
  
  .doctt1 {
    padding: 10px;
    text-align: left;
    font-size: 20px;
    color: white;
  }
  
  /* code css chữ taxi giá liên tỉnh */
  .navbar-link-Help {
    position: absolute;
    left: 63%;
    color: #666;
    top: 1%;
  }
  
  .navbar-link-Support {
    position: absolute;
    left: 66%;
    color: #666;
    top: 1%;
  }
  
  .navbar-link-FAQ {
    position: absolute;
    left: 70%;
    color: #666;
    top: 1%;
  }
  
  /* youtube  iocon*/
  .navbar-icon-tt {
    position: absolute;
    left: 74%;
    top: 1%;
    font-size: 15px;
    color: #666;
  }
  
  /*  */
  /* hình ins */
  .navbar-icon-ins {
    position: absolute;
    left: 76%;
    top: 1%;
    font-size: 15px;
    color: #666;
  }
  
  /*  */
  .navbar-icon-link {
    position: absolute;
    left: 78%;
    top: 1%;
    font-size: 15px;
    color: #666;
  }
  
  /* hình iconfb */
  .navbar-icon-fb {
    position: absolute;
    left: 73%;
    top: 1%;
    font-size: 15px;
    color: #666;
  }
  
  /*  */
  .navbar-text01 {
    color: #666;
    position: relative;
    left: 271px;
    font-size: 15px;
    letter-spacing: -0.2px;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
  
  }
  
  .navbar-link {
    text-decoration: none;
    color: #333;
    font-size: 16px;
    margin-right: 10px;
  }
  
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: #fff;
    transform: skewX(10deg);
    width: 7%;
  }
  
  /* logo  RIDEK... hotline...*/
  /* khoảngcach */
  .logo-container {
    margin-right: 383px;
  }
  
  /* logo */
  .logo-brand {
    top: 33px;
    position: relative;
    width: 199px;
  }
  
  /* logo ridek thanh */
  .logo {
    width: 180px;
    /* Adjust the width of the logo as per your needs */
  }
  
  .contact-info {}
  
  .contact-info span {
    display: block;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    margin-right: px;
  }
  
  .icon {
    width: 60px;
    /* Adjust the width of the icons as per your needs */
    height: 80px;
    /* Adjust the height of the icons as per your needs */
    margin-right: 20px;
    /* Adjust the spacing between icons as per your needs */
  }
  
  .text {
    font-size: 15px;
    color: #666;
    position: relative;
    left: 2%;
    font-size: 14px;
    font-weight: 500;
    display: block;
    top: -12px;
  }
  
  .text1 {
    font-size: 18px;
    color: #222;
    position: relative;
    left: -28%;
    font-size: 18px;
    font-weight: 500;
  }
  
  .text-02 {
    color: #252525;
    /* position: relative; */
    left: -21%;
    font-size: 17px;
    font-weight: 500;
    text-transform: capitalize;
    top: 13px;
  }
  
  .text-03 {
    font-size: 17px;
    color: #222;
    /* position: relative; */
    left: -22%;
    font-weight: 500;
    text-transform: capitalize;
    top: 13px;
  }
  
  /* bỏ dấu ghạch chân helf */
  .navbar-right a {
    text-decoration: none;
  }
  
  /* Tạo css thanh Nav ngang Trang chủ, ... */
  .navbar-yellow {
    left: 29%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ff9900;
    padding: 10px;
    width: 43%;
    position: relative;
    top: 43px;
    height: 87px;
  }
  
  /* kich co thanh nav trang chu... */
  .navbar::before {
    content: '';
    /* Tạo một pseudo-element */
    position: absolute;
    /* Vị trí tuyệt đối */
    left: -3%;
    /* Điều chỉnh theo left của navbar */
    width: 101%;
    /* Chiều rộng 100% */
    height: 100%;
    /* Chiều cao 100% */
    background-color: inherit;
    /* Màu nền giống với navbar */
    clip-path: polygon(0 0, 100% 0, 500% 100%, 3% 160%);
    /* Áp dụng clip-path */
    z-index: -1;
    /* Đảm bảo pseudo-element hiển thị phía sau phần tử navbar */
  }
  
  .menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .menu li {
    margin-right: 10px;
  }
  
  /* thanh nav bỏ dấu dropdown */
  .dropdown-toggle::after,
  .dropdown-btn::after {
    display: none;
  }
  
  /* thanh nav chữ */
  /* dấu ghạch chân thanh nav chữ */
  /* chữ trên thanh nav màu cam */
  .menu li a {
    margin-left: 14px;
    right: 3px;
    position: relative;
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
  }
  
  .menu li a:hover {
    border-bottom: 1px solid #ffffff;
    font-weight: bold;
  }
  
  .icons {
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  
  .search-icon,
  .menu-icon {
    width: 95px;
    height: 50px;
    cursor: pointer;
    margin-left: 10px;
  }
  
  /* màu menu thanh NAV */
  /*  */
  /* code css tạo hiển thị menu trên thanh NAV trangchu........ */
  div#offcanvasDarkNavbar {
    background-color: #000000;
    color: #f3ebeb;
    /* width: 500px; */
  }
  
  .text-bg-dark h5,
  .text-bg-dark p,
  .text-bg-dark a {
    /* color: #999; */
  }
  
  /* nằm chèn mục liên hệ */
  /* thanh cuộn nút Search */
  .search-icon1 .icon-img-1 {
    float: left;
    margin: 2px;
    height: 70%;
    position: absolute;
    top: 27px;
    left: -382px;
  }
  
  /* nút tìm kiếm thanh nav  */
  /* nut tìm kiếm thanh nav trang chu... */
  /* thanh search tren thanh nav  */
  .search-icon img,
  .menu-icon img {
    max-width: 100%;
    filter: brightness(0) invert(1);
    color: white;
  }
  
  .menu-icons .btn-search {
    width: 41px;
    height: 50px;
    background-color: transparent;
    padding: 0;
    outline: 0;
    border: 0;
    position: absolute;
    right: 96px;
  }
  
  .menu-icons .btn-search:focus {
    box-shadow: none;
  }
  
  /* thanh menu */
  /* Tạo thanh chọn trên thanh nav */
  .navbar-dark .navbar-toggler {
    position: relative;
    /* margin: -417%; */
    /* margin-left: 0; */
    top: 43px;
    border: none;
    background-color: transparent;
    align-items: center;
  }
  
  .navbar-dark .navbar-toggler:focus {
    outline: none;
    box-shadow: none;
  }
  
  /* nút search  nut tim kiem*/
  .collapse {
    display: none;
    /* width: 200px; */
    /* Set the desired width */
    height: 500px;
    /* Set the desired height */
  }
  
  /* nút css menu trangchu... */
  .navbar-toggler {
    float: right;
    margin: -127px;
    width: 130px;
    /* Set the desired width */
    height: 40px;
    /* Set the desired height */
  }
  
  /* nút trên thanh nav màu cam trang chu, lien he */
  .dropdown-toggle.black-text,
  .dropdown-menu .black-text {
    /* color: #666; */
    font-size: 15px;
    top: 5px;
    /* left: 6px; */
    position: relative;
    color: #666;
    white-space: nowrap;
  }
  
  .mau1 {
    color: #000;
    background-color: #000;
  }
  
  /* code css tạo comtact  thanh NAV TRANGCHU...*/
  .contact-nav {
    position: absolute;
    top: -19%;
    /* Adjust the distance from the top as needed */
    left: 101%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: #fff;
    transform: skewX(0deg);
    width: 19%;
    /* Adjust the width as needed */
    height: 73px;
    font-weight: bold;
  }
  
  /* nut css  chinh kich co  thanh nav menu trang chu... */
  .navbar {
    /* transform: skewX(0deg);
    width: 45%; */
    height: 10%;
    z-index: 999;
  }
  
  .navbar-brand img {
    width: 50px;
  }
  
  .navbar-text {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  
  .navbar-text img {
    width: 300px;
    height: auto;
    margin-right: 10px;
    right: -61%;
    position: absolute;
  }
  
  /*  */
  .navbar-text p {
    margin: 0;
    color: #f4f5f8;
    display: inline-block;
    margin: 0;
    font-size: 20px;
    /* Thay đổi kích thước chữ theo ý muốn */
    white-space: nowrap;
    /* Ngăn chữ xuống dòng */
    overflow: hidden;
    /* Ẩn nội dung dư thừa */
    text-overflow: ellipsis;
    /* Hiển thị dấu chấm 3 chấm (...) khi chữ bị cắt ngang */
    position: relative;
    right: -100%;
    top: 60%;
  }
  
  .contact-info {
    margin-top: 10px;
    color: #f4f5f8;
    font-size: 20px;
  }
  
  .content {
    margin-top: 80px;
    /* Đảm bảo nội dung không bị che phủ bởi thanh navbar */
  }
  
  /* code css độ dài thanh  nav tìm kiếm trangchu... */
  /* thanh css nut menu trangchu...*/
  .col-right-nav {
    display: flex;
    flex-direction: row;
  }
  
  .navbar-colright {
    height: 53px;
    width: 53px;
    color: #ff9900;
  }
  
  .nav.navbar.navbar-dark.bg-dark {
    width: 50px;
  }
  
  .container {
    position: relative;
    z-index: 9999;
  }
  
  /* code css tạo nút search thanh nav */
  .modal {
    /* Position the modal in the center of the page */
    position: fixed;
    top: 57%;
    left: 69%;
    transform: translate(-63%, -129%);
    /* Set the size of the modal */
    width: 136%;
    height: 80%;
    /* Add a z-index to ensure the modal is on top of other elements */
    z-index: 9999;
    /* Add a white background */
    background-color: #ffffff;
    /* Add some padding to the modal content */
    padding: 20px;
    /* Add a border and border-radius to the modal */
    border: 1px solid #ffffff;
    border-radius: 5px;
    /* Add a box-shadow to the modal */
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
  
  /* kích thước nút thanh search */
  .modal-content {
    top: 480px;
    position: relative;
  }
  
  /* dùng thư viện di chuyển trang book you */
  .carousel {
    height: 630px;
    width: auto;
    /* Đảm bảo carousel phủ kín chiều ngang của màn hình */
    position: relative;
  }
  
  .carousel-inner {
    height: 100%;
  }
  
  
  .carousel-item img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  
  /*mục 
  Book your taxi from anywhare today !  */
  
  .carousel-item {
    position: relative;
  }
  
  .carousel-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #222; /* Màu nền đen */
    opacity: 0.2; /* Điều chỉnh độ mờ */
    z-index: 1;
  }
  
  /* Đảm bảo nội dung hiển thị trên overlay */
  
  
  /*  */
  .carousel-caption {
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0%;
    transform: translateY(-83%);
    width: 70%;
    padding-left: 15px;
  }
  
  .carousel-caption h1 {
    margin-bottom: 20px;
    color: #faf1f1;
    text-align: start;
    font-size: 47px;
    position: absolute;
    left: 30%;
  }
  
  .carousel-caption .img-car {
    left: 1046px;
    position: relative;
    bottom: 220px;
    width: 500px;
  }
  
  /*  */
  /*  */
  /* code css tạo đường chéo book your */
  .carousel-caption::before {
    content: "";
    position: absolute;
    top: -50%;
    bottom: 0%;
    left: 89%;
    width: 213px;
    height: 220%;
    transform: skew(-30deg);
    background-color: #ff9900;
    border-right: 4px solid transparent;
  }
  
  .section-onlinecar .img-car {
    position: absolute;
    width: 350px;
    right: -250px;
    top: -100px;
  }
  
  /* code css tạo hình chữ nhật đứng màu đen */
  .chunhat1 {
    position: absolute;
    top: 50%;
    left: 63%;
    transform: translate(-50%, -50%) rotate(30deg) skewY(-28deg);
    width: 100px;
    height: 850px;
    background-color: rgb(17, 16, 14);
    z-index: 1;
  }
  
  .chunhatden {
    position: absolute;
    top: -5%;
    left: 135%;
    transform: translate(-50%, -50%) rotate(29deg) skewY(-27deg);
    width: 100px;
    height: 650px;
    background-color: rgb(8, 7, 5);
  }
  
  /* code css màu chữ book you p */
  /* NÚT LIÊN HỆ BOOK YOUR */
  .btn-view-more {
    background-color: #ff9900;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition: background-color 0.3s ease, color 0.3s ease;
    float: left;
    left: 5%;
    width: 23%;
    border-radius: 5px;
    font-size: 16px;
    position: absolute;
    margin-top: 5px;
    font-weight: 500;
  }
  
  .btn-view-more:hover {
    background-color: black;
    color: orange;
  }
  
  /* code css chuyển động qua trang book */
  .carousel-caption {
    position: absolute;
    top: 56%;
    left: 23%;
    width: 50%;
    height: 50%;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  .carousel-item.active .carousel-caption {
    opacity: 1;
  }
  
  /*  */
  /* CODE THE BOOK 1/2 */
  
  .total-slide {
    position: relative;
    left: 7px;
    top: -8px;
    color: #9b8394;
  }
  
  .carousel-indicators li .total-slide {
    font-size: 16px;
    color: #9b8394;
    font-family: "Space Grotesk", sans-serif;
  }
  
  .active {
    font-family: "Space Grotesk", sans-serif;
  }
  
  .carousel-caption h1 {
    font-weight: bold;
    left: 31%;
    margin-bottom: -7px;
    animation: slide-up 0.5s ease forwards;
    text-align: text;
    position: relative;
    font-family: "Space Grotesk", sans-serif;
    font-size: 53px;
    top: 13px;
    line-height: 60px;
    color: #fff;
  }
  
  .carousel-caption p {
    font-size: 18px;
    animation: slide-up 0.5s ease 0.3s forwards;
    text-align: text;
    position: relative;
    left: 29%;
    color: #ddd;
    font-family: "Space Grotesk", sans-serif;
  }
  
  /* Travel securely with us THE BOOK */
  .doct1 {
    position: relative;
    left: -51%;
    top: 1%;
    font-family: "Space Grotesk", sans-serif;
    font-size: 18px;
  }
  
  .carousel-caption .btn-view-more {
    font-size: 16px;
    animation: slide-up 0.5s ease 0.6s forwards;
    position: relative;
    left: -46px;
  }
  
  .carousel-caption .img-car {
    position: absolute;
    width: 675px;
    height: auto;
    /* right: 100%; */
    top: -99px;
    opacity: 0;
    animation: drive-in 1s ease 0.9s forwards;
  }
  
  @keyframes slide-up {
    from {
      transform: translate(-50%, 50%);
      opacity: 0;
    }
  
    to {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
  
  @keyframes drive-in {
    from {
      transform: translate(100%, -50%);
      opacity: 0;
    }
  
    to {
      transform: translate(-50%, -50%);
      opacity: 1;
    }
  }
  
  /* code css chỉnh nút button book */
  /* nút chỉnh butoon  book your */
  .button-carousel {
    position: relative;
    bottom: 73px;
    height: 47px;
    top: 18%;
    left: 9%;
    text-align: center;
    width: 270px;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    position: absolute;
    bottom: 20px;
    /* Điều chỉnh khoảng cách từ nút đến phía dưới của trang */
    left: 130px;
    /* Điều chỉnh khoảng cách từ nút đến phía trái của trang */
    background-color: black;
    /* Đặt màu nền của nút là trắng */
    border: none;
    /* Xóa viền của nút */
    color: black;
    /* Đặt màu chữ là đen */
    padding: 20px;
    /* Điều chỉnh khoảng cách giữa nút và văn bản bên trong nút */
    position: fixed;
    top: -11%;
  
  }
  
  /*  */
  /* code chu pre - next */
  .previous-word {
    font-size: 17px;
    z-index: 1;
    bottom: 30px;
    display: flex;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
  }
  
  .next-word {
    font-size: 17px;
    z-index: 1;
    position: relative;
    right: -95%;
    display: flex;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
  }
  
  /*  */
  .la-long-arrow-alt-right {
    font-size: 30px;
    /* Thay đổi giá trị này để điều chỉnh kích thước */
    position: relative;
    right: -78px;
  }
  
  .la-long-arrow-alt-left {
    font-size: 30px;
    /* Thay đổi giá trị này để điều chỉnh kích thước */
  }
  
  /* hover */
  .carousel-control-next:focus,
  .carousel-control-next:hover,
  .carousel-control-prev:focus,
  .carousel-control-prev:hover {
    color: #ff9900;
    text-decoration: none;
    outline: 0;
    opacity: .9;
  }
  
  .page-number {
    color: orangered;
    font-size: 20px;
    z-index: 1;
    position: relative;
    right: 7%;
  }
  
  .page-number1 {
    font-size: 30px;
    color: orangered;
    z-index: 1;
    position: relative;
    right: 7%;
  }
  
  button.carousel-control-prev {
    width: 100px;
    position: absolute;
    left: -9%;
  }
  
  button.carousel-control-next {
    width: 100px;
    position: absolute;
    left: 60%;
  }
  
  /* code hiện số trang */
  /*  code css màu nút button book*/
  .button-carousel button {
    /* background-color: black; */
    background-color: white;
    /* Đặt màu nền của nút là đen */
    color: black;
    /* Đặt màu chữ là trắng */
    border: none;
    /* Xóa viền của nút */
    padding: 10px;
    /* Điều chỉnh khoảng cách giữa nút và văn bản bên trong nút */
  }
  
  .button-carousel button:hover {
    /* background-color: darkgray; */
    /* Thay đổi màu nền của nút khi di chuột qua */
  }
  
  .button-carousel button:focus {
    outline: none;
    /* Xóa viền xung quanh nút khi được tập trung */
  }
  
  /*  */
  /*  */
  /*  */
  /* clip path cắt ảnh boook you */
  .carousel-inner::after {
    content: "";
    position: absolute;
    width: 500px;
    height: 90px;
    bottom: 0;
    left: 0;
    background-color: white;
    z-index: 1;
  }
  
  .search-bar {
    left: 0px;
    position: relative;
  }
  
  .nav-menu {
    margin-bottom: -6px;
  }
  
  /* phần code css số trang BOOK */
  #carouselExampleFade .carousel-indicators li {
    right: -28px;
    position: relative;
    /* height: auto; */
    color: #ff9900;
    background-color: transparent;
    width: auto;
    background-clip: unset;
    text-indent: 0;
    top: -7px;
    height: auto;
    font-size: 43px;
  
  }
  
  #carouselExampleFade .carousel-indicators li:not(.active) {
    display: none;
  
  }
  
  #carouselExampleFade .carousel-indicators {
    /* position: absolute; */
    /* left: -1400px; */
    color: orange;
    font-size: 30px;
    font-weight: bold;
    right: auto;
  }
  
  /* nut tim kiem */
  /* code css giới thiệu về chúng tôi */
  /*  Code chi cột về chúng tôi*/
  /* thẻ p về chúng tôi */
  .pict1 {
    font-size: 17px;
    line-height: 26px;
    margin-bottom: 15px;
    color: rgb(102, 102, 102);
    font-family: "Space Grotesk", sans-serif;
    top: -56px;
    right: 6px;
    position: relative;
  }
  
  /* hiệu ứng ảnh về chúng tôi */
  /* CSS */
  .my-heading {
    color: rgb(222, 222, 226);
  }
  
  /* thanh nav trang chu menu ảnh logo */
  /* giới thiệu về chững tôi  chữ màu cam*/
  /*code màu chữ gioi thieu ve chung toi */
  .section-heading {
    position: relative;
  }
  
  .section-heading h4 {
    font-weight: bold;
    font-size: 16px;
    position: relative;
    color: #f90;
    padding-left: 50px;
    display: flex;
    line-height: 16px;
    top: -62px;
    left: -21px;
  }
  
  .section-heading h4 span,
  .section-heading h4 span:before,
  .section-heading h4 span::after {
    background-color: #f90;
    width: 5px;
    height: 16px;
    display: inline-block;
    position: absolute;
  }
  
  .section-heading h4 span {
    left: 32px;
    transform: skew(-20deg, 0deg);
  }
  
  .section-heading h4 span:after {
    content: "";
    left: -10px;
    opacity: 0.5;
  }
  
  .section-heading h4 span:before {
    content: "";
    left: -20px;
    opacity: 0.2;
  }
  
  /* code css khoảng cách mục about our company */
  .section-online-vechungtoi {
    padding-bottom: 156px;
  }
  
  /*  Code CSS VỀ CHÚNG TÔI */
  /* thẻ chữ book you */
  /* Khoảng cách Giua anh va chu VE CHUNG TOI */
  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 30px;
    /* Adjust the value as needed */
  }
  
  .form-group1 {
    margin-left: 40px;
    padding: 110px 40px;
    /* Adjust the value as needed */
    position: relative;
    background-color: #ff9900;
    background-image: repeating-linear-gradient(45deg, #f7a20f 0, #f7a20f 2px, transparent 0, transparent 50%);
    background-size: 10px 10px;
  }
  
  /*  */
  /* về chúng tôi  tổng phần chữ*/
  .form-group {
    right: -153px;
    top: 40px;
    position: relative;
    margin-bottom: 1rem;
    margin-top: 7%;
  }
  
  /* code css chữ về chúng tôi */
  
  /*  */
  p {
    margin: 0;
  }
  
  /*  */
  
  .about-us {
    position: relative;
    /* left: -36%; */
    color: black;
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 42px;
    top: -51px;
    left: -8px;
  }
  
  .image {
    width: 220px;
    height: auto;
  }
  
  /* code css tạo di chuyển ảnh tròn */
  .section-online-vechungtoi {
    position: relative;
  }
  
  .image-container {
    position: relative;
  }
  
  .Image {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    z-index: 1;
  }
  
  /* Tạo css chuyển động ảnh tròn */
  .Image {}
  
  /*  */
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
  
  .image-container .Image {
    left: 416px;
    top: 108px;
    width: 11%;
    /* Loại bỏ hoạt hình mặc định */
  }
  
  .ExperienceText {
    animation: rotate 3s infinite linear;
    /* Áp dụng hoạt hình vòng quay */
  }
  
  .image-animation {
    position: absolute;
    top: 48px;
    left: 351px;
    animation-name: rotateImage;
    animation-duration: 4s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    transform-origin: center center;
  
  }
  
  
  @keyframes rotateImage {
    0% {
      transform: rotate(0deg);
    }
  
    100% {
      transform: rotate(360deg);
    }
  }
  
  /* code css tạo đường chéo về chứng tôi */
  
  
  .image-container {
    position: relative;
  }
  
  .image-container::after {
    content: "";
    position: absolute;
    top: 0%;
    left: 244px;
    right: 20%;
    width: 43%;
    height: 123%;
    transform: skew(-26deg);
    background-color: #ff9900;
    z-index: -1;
  }
  
  /* chữ số điện thoại về chúng tôi */
  
  .hot1 {
    left: 43%;
    color: #666;
    font-size: 17px;
    /* position: absolute; */
    top: 10%;
    /* transform: translate(252px, 17px); */
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 500;
    position: relative;
    left: 37px;
    top: 10px;
  }
  
  .color1 {
    color: orange;
    right: 29%;
    top: 41%;
    /* transform: translate(-62px, 37px); */
      font-size: 28px;
    font-weight: bold;
  }
  
  
  /* ảnh 01 về chúng tôi */
  .image01 {
    /* position: absolute; */
    left: 17%;
    top: 35%;
    width: 139px;
    margin-left: 2%;
    margin-top: 5%;
   
  }
  
  /* ảnh về chúng tôi */
  .ceo1 {
    position: absolute;
    right: 65%;
    top: 10%; 
    font-size: 17px;
    color: #666;
    border-radius: 50px;
    font-weight: 500;
    position: absolute;
    /* transform: translate(98px, 21px); */
  }
  
  /* picture vè chung toi */
  .ceo101 {
    position: relative;
    left: 6px;
    border-radius: 90px;
    width: 86px;
    top: 1px;
  }
  
  /*  */
  
  img.image-car1 {
    left: -9%;
    position: relative;
    width: 300px;
  }
  
  /*  */
  .image-car2-container {
    display: flex;
  }
  
  img.image-car2 {
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    position: relative;
    top: 84px;
    position: relative;
    width: 196px;
  
  }
  
  /* về chúng tôi */
  /* chữ màu cam about company */
  .info-container {
    display: flex; /* Sử dụng Flexbox để căn chỉnh các phần tử */
    /* align-items: center; Căn giữa theo chiều dọc */
    /* justify-content: space-between; Khoảng cách đều giữa các phần tử */
    padding: 0px; /* Khoảng cách bên trong */
    /* background-color: #f9f9f9; Màu nền cho thẻ div */
    /* border: 1px solid #ccc; Đường viền cho thẻ div */
    border-radius: 0px; /* Bo tròn góc */
    position: relative;
      top: -39px;
      left: -11px;
  }
  
  .info-container img {
    max-width: 130px; /* Giới hạn kích thước ảnh */
    margin-right: 10px; /* Khoảng cách giữa ảnh và văn bản */
  }
  
  .info-container h1, .info-container h4, .info-container p {
    margin: 0; /* Bỏ khoảng cách mặc định */
  }
  
  
  /* Dịch vụ nỗi bật css */
  
  /* CODE DỊCH VỤ NỖI BẬT */
  .cover-image {
    background-image: url("https://html.dynamiclayers.net/dl/ridek/assets/img/bg-1.jpg");
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    height: 600px;
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: rgb(227, 215, 215);
    position: relative;
    overflow: hidden;
  }
  
  .cover-image .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Màu tối với độ mờ */
    z-index: 1;
  }
  
  .cover-image .content {
    position: relative;
    z-index: 2;
  }
  /* code css mục Start your journey with
  Ridek Taxi Company! */
  
  .cover-image::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #222; /* Overlay đen */
    z-index: 1;
    opacity: 0.2; /* Điều chỉnh độ mờ */
  }
  
  
  
  
  /*  */
  /* chữ màu cam */
  /* carrt anhr chen anh banner dich vu noi bat */
  .cart-service {
    position: relative;
    bottom: 140px;
    z-index: 1;
    top: -241px;
  }
  
  .cover-image .text {
    font-size: 36px;
    position: relative;
    top: -39%;
  }
  
  .cover-image .textdichvunoibat {
    color: #fff;
    position: relative;
    top: 58px;
    left: 678px;
    font-weight: 700;
    line-height: 50px;
    /* Màu chữ trắng */
  }
  
  .container .card h2 {
    color: #222;
    /* Màu chữ trắng */
    font-weight: bold;
  }
  
  .cover-image p {
    position: relative;
    top: 143px;
    font-size: 17px;
    /* margin-top: -23px; */
    font-family: "Space Grotesk", sans-serif;
    color: #ddd;
    /* left: 213px; */
    margin-left: 212px;
  }
  
  /*  */
  
  /*  */
  /* dòng chữ start your journey with ridekcompany */
  .second-line {
    display: block;
    animation: fadeIn 1s ease-in-out;
    color: #ddd;
    position: relative;
    right: 38px;
  }
  
  .card {
    background-color: #f2f2f2;
    padding: 20px;
    border-radius: 8px;
  }
  
  .card-banner {}
  
  .car-in-card {
    width: 150%;
    border-radius: 8px;
  }
  
  .card h2 {
    font-size: 22px;
    margin-left: 12px;
    text-align: left;
  }
  
  .button {
    padding: 10px 20px;
    background-color: #ff9900;
    color: white;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .button:hover {
    background-color: rgb(190, 97, 17);
  }
  
  
  /* code css what we offter */
  .text-1 {
    color: #252525;
    font-size: 19px;
    top: 13px;
    right: 75px;
    text-transform: capitalize;
    font-weight: 500;
  }
  
  .vuong1 {
    position: relative;
    top: 10px;
  }
  
  /*  */
  /* tạo css nút chuyển trang  dịch vụ nổi bật*/
  .card-navigation {
    position: absolute;
    bottom: -70px;
    left: 50%;
    transform: translateX(-70%);
  }
  
  /* start your jnoyey tạo khoảng cách card ảnh */
  .cart-service .card {
    margin-right: 30px;
    /* Khoảng cách giữa các card */
    margin-bottom: 30px;
    /* Khoảng cách giữa các hàng */
  }
  
  .cart-service .card:last-child {
    margin-right: 0;
    /* Không có khoảng cách ở card cuối cùng của hàng */
  }
  
  /* kich co anh css cart picture */
  
  .card-image {
    width: 113%;
    height: auto;
    position: relative;
    top: -20px;
    left: -20px;
  }
  
  /*  */
  .card-image2 {
    width: 65%;
    height: auto;
    position: absolute;
    float: right;
    bottom: -17px;
    right: -6%;
    z-index: 3;
  
    transition: all .3s cubic-bezier(.165, .85, .45, 1);
  }
  
  /* hiệu ứng css xe car dịch vụ nỗi bật */
  
  .card-image2:hover {
    animation: imageEffect 0.5s ease-in-out;
  }
  
  @keyframes imageEffect {
    0% {
      transform: scale(1);
    }
  
    50% {
      transform: scale(1.2);
    }
  
    100% {
      transform: scale(1);
    }
  }
  
  /* nút xem thêm dịch vụ nỗi bật */
  /* Nut xem them dich vu noi bat */
  .nutxemthem {
    background-color: #ff9900;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    font-size: 15px;
    top: -3px;
    position: relative;
    left: -1171px;
    transition: background-color 0.3s ease;
    /* cắt nút bên phải button */
    clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0% 100%);
    font-weight: 500;
  }
  
  .nutxemthem:hover {
    background-color: black;
    color: white;
  }
  
  /*  */
  /* canh chữ dòng chữ nỗi bật*/
  .card-bottom {
    display: inline-block;
  }
  
  /* code css tạo đặt carousel cart ảnh dịch vụ */
  /* nút di chuyển trang */
  .triangle-buttons {
    display: flex;
    justify-content: space-between;
    width: 200px;
  }
  
  .triangle-button {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    position: relative;
    top: 10%;
    left: 10%;
  }
  
  .arrow-left,
  .arrow-right {
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    position: absolute;
    top: 50%;
    transform: translateY(-2600%);
    background-color: orange;
  }
  
  .arrow-left {
    border-right: 12px solid rgb(15, 10, 10);
    left: 320px;
  
  }
  
  .arrow-right {
    border-left: 12px solid rgb(31, 20, 20);
    right: -1300px;
  }
  
  
  .vuongvang {
    position: absolute;
    top: 53%;
    left: 72%;
    transform: translate(-50%, -50%) rotate(10deg) skewY(-10deg);
    width: 80px;
    height: 150px;
    background-color: #ff9900;
    z-index: 1;
  }
  
  .vuongden1 {
    position: absolute;
    top: 65%;
    left: 59%;
    transform: translate(-50%, -50%) rotate(10deg) skewY(-10deg);
    width: 69px;
    height: 120px;
    background-color: rgb(22, 20, 14);
    z-index: 2;
  }
  
  .vuongden2 {
    position: absolute;
    top: 66%;
    left: 83%;
    transform: translate(-50%, -50%) rotate(10deg) skewY(-10deg);
    width: 49px;
    height: 120px;
    background-color: rgb(22, 20, 14);
    z-index: 2;
  }
  
  
  .card-top {
    position: relative;
  }
  
  /* hiệu ứng 1 */
  
  .vuongden1:hover {
    animation: imageEffect 0.5s ease-in-out;
  }
  
  @keyframes imageEffect {
    0% {
      transform: scale(1);
    }
  
    50% {
      transform: scale(1.2);
    }
  
    100% {
      transform: scale(1);
    }
  }
  
  /* hiệu ứng 2 */
  .vuongden2:hover {
    animation: imageEffect 0.5s ease-in-out;
  }
  
  @keyframes imageEffect {
    0% {
      transform: scale(1);
    }
  
    50% {
      transform: scale(1.2);
    }
  
    100% {
      transform: scale(1);
    }
  }
  
  .vuongvang:hover {
    animation: imageEffect 0.5s ease-in-out;
  }
  
  @keyframes imageEffect {
    0% {
      transform: scale(1);
    }
  
    50% {
      transform: scale(1.2);
    }
  
    100% {
      transform: scale(1);
    }
  }
  
  /* hiệu ứng dịch vụ nổi bật */
  
  /* code hiệu ứng dịch vụ nỗi bật */
  .container:hover .vuongvang,
  .container:hover .vuongden1,
  .container:hover .vuongden2,
  .container:hover .card-image2,
  .container:hover~.triangle-buttons {
    animation: effectAnimation 0.5s ease-in-out;
  }
  
  @keyframes effectAnimation {
    0% {
      transform: scale(1);
    }
  
    50% {
      transform: scale(1.2);
    }
  
    100% {
      transform: scale(1);
    }
  }
  
  /* dau 3 chấm nút di chuyển dịch vụ nỗi bâtj */
  .slider {
    position: relative;
    width: 1250px;
  }
  
  .dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #160b75;
    margin: 0 5px;
    cursor: pointer;
  }
  
  .dot.slick-active {
    background-color: #000;
  }
  
  /*  */
  .section-heading001 {
    position: relative;
  }
  
  .section-heading001 h4 {
    position: absolute;
    color: #ff9900;
    padding-left: 883px;
    display: flex;
    line-height: 16px;
    top: -2px;
    font-size: 17px;
    z-index: 999;
    left: -40px;
    top: 28px;
  }
  
  .section-heading001 h4 span,
  .section-heading001 h4 span:before,
  .section-heading001 h4 span::after {
    background-color: #f90;
    width: 5px;
    height: 16px;
    display: inline-block;
    position: absolute;
    top: 1%;
  }
  
  .section-heading001 h4 span {
    top: 1px;
    position: absolute;
    left: 853px;
    transform: skew(-20deg, 0deg);
  }
  
  .section-heading001 h4 span:after {
    content: "";
    left: -10px;
    opacity: 0.5;
  }
  
  .section-heading001 h4 span:before {
    content: "";
    left: -20px;
    opacity: 0.2;
  }
  
  /* choosee taxi dấu chấm */
  .card {
    position: relative;
    background-color: #ffffff;
    /* Mã màu cho màu trắng (#ffffff) */
  }
  
  .slick-slide {
    border: 1px solid #ccc;
  }
  
  .slick-dots {
    display: flex;
    margin-top: 17px;
    padding-left: 0;
    margin-bottom: 0;
    padding-left: 499px;
    position: relative;
    left: -88px;
  
  }
  
  .slick-dots li {
    list-style: none;
    width: 10px;
    height: 10px;
    background-color: #000;
    cursor: pointer;
  }
  
  .slick-dots>li:not(:last-of-type) {
    margin-right: 8px;
  }
  
  .slick-dots li button {
    font-size: 0;
    padding: 0;
  }
  
  .slick-dots li.slick-active {
    background-color: #ff9900;
    box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.5);
  }
  
  .slick-slide .comment p {
    margin-bottom: 24px;
  }
  
  .slick-slide .user-info {
    display: flex;
  }
  
  .slick-slide .user-info .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 20px;
    overflow: hidden;
  }
  
  .slick-slide .user-info .avatar img {
    width: 100%;
    height: 100%;
  }
  
  .slick-slide .company-info {
    flex-grow: 1;
    align-self: center;
  }
  
  /* dich vu noi bat pre */
  .cart-service .slick-prev {
    left: 100%;
    position: absolute;
    top: 53%;
  }
  
  /* Hình cắt bên trái Start Your Jouney */
  .slick-next.slick-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    width: 60px;
    height: 56px;
    background-color: #ff9900;
    /* Màu cam */
    -webkit-clip-path: polygon(100% 0, 0 50%, 100% 100%);
    clip-path: polygon(100% 0, 0 50%, 100% 100%);
    cursor: pointer;
  }
  
  .slick-next.slick-arrow:before {
    content: "";
  }
  
  /* code p ridek taxi jouney */
  .Transport1 {
    color: #666;
    font-weight: 440;
    position: relative;
    top: -10px;
  }
  
  /* hinh km tren CHOOOSSEE  TAXI */
  /* code css nằm chèn price */
  .price-container {
    position: relative;
    z-index: 1;
  }
  
  .huynhdai01 {
    position: relative;
    z-index: 2;
  }
  
  .price {
    display: inline-block;
    background-color: #ff9900;
    color: #222;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 20px;
    clip-path: polygon(85% 0%, 100% 30%, 100% 100%, 0 100%, 0 0);
    position: absolute;
    right: 40px;
    top: 46px;
    z-index: 1;
  }
  
  /*  */
  .price-container {
    position: relative;
    z-index: 1;
  }
  
  .huynhdai0-04 {
    z-index: 2;
    position: relative;
  }
  
  .price {
    display: inline-block;
    background-color: #ff9900;
    color: #222;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 20px;
    clip-path: polygon(85% 0%, 100% 30%, 100% 100%, 0 100%, 0 0);
    position: absolute;
    right: 40px;
    top: 46px;
    z-index: 1;
  }
  
  /*  */
  .price-container {
    position: relative;
    z-index: 1;
  }
  
  .huynhdai0-06 {
    z-index: 2;
    position: relative;
  }
  
  .price {
    display: inline-block;
    background-color: #ff9900;
    color: #222;
    font-size: 20px;
    font-weight: 600;
    padding: 10px 20px;
    clip-path: polygon(85% 0%, 100% 30%, 100% 100%, 0 100%, 0 0);
    position: absolute;
    right: 40px;
    top: 46px;
    z-index: 1;
  }
  
  /* nút button dich vu noi bat */
  button {
    background-color: #ff9900;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /*  */
  /* ĐẶT XE NHANH */
  .section-heading06 {
    position: relative;
  }
  
  .section-heading06 h4 {
    position: relative;
    color: #f90;
    padding-left: 63px;
    display: flex;
    line-height: 16px;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    top: -41px;
  }
  
  .section-heading06 h4 span,
  .section-heading06 h4 span:before,
  .section-heading06 h4 span::after {
    background-color: #f90;
    width: 5px;
    height: 16px;
    display: inline-block;
    position: absolute;
    top: 1%;
  }
  
  
  /*  */
  /* dau 3 ghach */
  .section-heading06 h4 span {
    top: -1px;
    position: absolute;
    left: 30px;
    transform: skew(-20deg, 0deg);
  }
  
  .section-heading06 h4 span:after {
    content: "";
    left: -10px;
    opacity: 0.5;
  }
  
  .section-heading06 h4 span:before {
    content: "";
    left: -20px;
    opacity: 0.2;
  }
  
  .section-online-booking h3 {
    left: 3px;
    font-size: 40px;
    position: relative;
    color: #fff;
    top: -24px;
    font-weight: 700;
    /* Màu chữ trắng */
  }
  
  .section-online-booking::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 300px;
    background-color: #da7b0f;
  }
  
  /* đặt màu css button */
  .btn.btn-primary {
    background-color: #333333;
  }
  
  /* chữ màu chữ đen button */
  .btn.btn-primary {
    color: white;
  }
  
  /* clip path cắt ảnh */
  .section-online-booking::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 80px;
    background-color: #f4f5f8;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 25% 100%);
    border: solid #f4f5f8;
  }
  
  .section-online-booking .img-car {
    position: absolute;
    width: 653px;
    /* left: -598px; */
    top: -26px;
    margin-left: -443%;
  }
  
  .section-online-booking {
    background-color: #1c1c1c;
    background-image: url('https://web307.webvungtau.com/wp-content/themes/weboto-vn/img/texture.png');
    background-repeat: no-repeat;
    position: relative;
    padding: 107px 0;
    margin-top: -9%;
  }
  
  /*  */
  /*  */
  /* biểu tượng đặt xe nhanh */
  .input-group-text-1 {
    position: absolute;
    left: 78%;
    top: 51%;
  }
  
  .input-group-text-2 {
    position: absolute;
    left: -599%;
    top: 51%;
  }
  
  .input-group-text-3 {
    position: absolute;
    left: 33%;
    top: 51%;
  }
  
  .input-group-text-4 {
    position: absolute;
    left: 63%;
    top: 51%;
  }
  
  .input-group-online-5 {
    position: absolute;
    left: 60%;
    top: 51%;
  }
  
  .input-group-text-6 {
    position: absolute;
    left: -243%;
    top: -6%;
  }
  
  .input-group-text-7 {
    position: absolute;
    left: 97%;
    top: 16%;
  }
  
  
  .input-group-text-8 {
    position: absolute;
    left: 90%;
    top: 51%;
  }
  
  /* code css tạo đặt xe nhanh */
  
  /* code css mauf form */
  /* form thẻ icon */
  .section-online-booking .form-field {
    position: relative;
  }
  
  .section-online-booking .form-field i {
    position: absolute;
    font-size: 18px;
    right: 10px;
    color: #f90;
    top: 38%;
    /* transform: translateY(-50%); */
  }
  
  /*  */
  /* khi trỏ màu cam dropdown đặt xe nhanh */
  /*  */
  .section-online-booking .form-control {
    font-size: 16px;
    line-height: 24px;
    padding: 14px 38px 14px 24px;
    height: auto;
    border-radius: 0;
    color: white;
    background-color: #333333;
    border-color: transparent;
    outline: 0;
  }
  
  .section-online-booking .form-control:focus {
    border-color: #f90;
    outline: 0;
    box-shadow: none;
    color: white;
    background-color: #333333;
  }
  
  .section-online-booking .form-row>[class*=col-] {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
    position: relative;
    top: -8px;
  }
  
  /* button đặt xe nhanh */
  /* màu button */
  .sumit1 {
    background-color: #ff8c00;
    /* Màu cam mặc định */
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 247px;
    height: 53px;
    font-weight: bold;
  }
  
  .sumit1:hover {
    background-color: #333333;
    /* Màu xám khi trỏ chuột vào */
  }
  
  /* code css mauf icon */
  /* tạo kích cỡ lịch */
  .select2-container--default .select2-selection--single .select2-selection__rendered {
    background-color: #333;
    line-height: 50px;
    color: white;
  }
  
  /* code xóa viền trắng đặt xe nhanh */
  .select2-container--default .select2-selection--single {
    border: unset !important;
  }
  
  /* xóa hình nút Book You Ride */
  .select2-selection__arrow {
    display: none !important;
  }
  
  /* màu button */
  /* TẠO DÒNG CHỮ CHOOSE TATXI */
  .centered-text {
    text-align: center;
    padding-bottom: 68px;
    /* margin-top: 157px; */
  
    position: relative;
    top: 105px;
  
    margin-top: 8%;
  }
  
  .centered-text h1 {
    color: #130e0e;
  }
  
  /*  choosee taxi chữ màu cam*/
  .section-heading07 {
    position: relative;
  }
  
  .section-heading07 h4 {
    position: relative;
    color: #f90;
    display: flex;
    line-height: 16px;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
    top: 7px;
  }
  
  .section-heading07 h4 span,
  .section-heading07 h4 span:before,
  .section-heading07 h4 span::after {
    background-color: #f90;
    width: 5px;
    height: 16px;
    display: inline-block;
    position: absolute;
    top: 1%;
  }
  
  .section-heading07 h4 span {
    top: 1px;
    position: absolute;
    transform: skew(-20deg, 0deg);
  }
  
  .section-heading07 h4 span:after {
    content: "";
    left: -10px;
    opacity: 0.5;
  }
  
  .section-heading07 h4 span:before {
    content: "";
    left: -20px;
    opacity: 0.2;
  }
  
  /* Nav Tabs */
  .nav-tabs {
    border-bottom: none;
    justify-content: center;
    margin-bottom: 2rem;
    position: relative;
  }
  
  .nav-link {
    color: #333;
    border: none;
    border-radius: 0;
    padding: 0.75rem 1.5rem;
  }
  
  .nav-link.active {
    background-color: orange;
    color: #fff;
    border: none;
  }
  
  /* card ảnh  choosseetaxi */
  .gia1 {
    position: relative;
    right: -79px;
  }
  
  .gia2 {
    position: relative;
    right: -96px;
  }
  
  .gia3 {
    position: relative;
    right: -110px;
  }
  
  .gia4 {
    position: relative;
    right: -110px;
  }
  
  .gia5 {
    position: relative;
    right: -128px;
  }
  
  .gia6 {
    position: relative;
    right: -139px;
  }
  
  .gia7 {
    position: relative;
    right: -103px;
  }
  
  .gia8 {
    position: relative;
    right: -121px;
  }
  
  .gia9 {
  
    position: relative;
    right: -133px;
  }
  
  .gia10 {
    position: relative;
    right: -111px;
  }
  
  .gia11 {
    position: relative;
    right: -139px;
  }
  
  .gia12 {
    position: relative;
    right: -127px;
  }
  
  .gia13 {
    position: relative;
    right: -119px;
  }
  
  .gia14 {
  
    position: relative;
    right: -148px;
  }
  
  .gia15 {
    position: relative;
    right: -148px;
  }
  
  .gia16 {
  
    position: relative;
    right: -111px;
  }
  
  .gia17 {
    position: relative;
    right: -139px;
  }
  
  .gia18 {
    position: relative;
    right: -139px;
  }
  
  /* card chữ choosee taxi */
  .card-text1 {
  
    position: relative;
    left: -47px;
  }
  
  .card-text2 {
  
    position: relative;
    left: -64px;
  }
  
  .card-text3 {
    position: relative;
    left: -69px;
  }
  
  .card-text4 {
    position: relative;
    left: -70px;
  }
  
  .card-text5 {
    position: relative;
    left: -70px;
  }
  
  .card-text6 {
    position: relative;
    left: -70px;
  }
  
  /* choossee taxi */
  /* card right taxi */
  /* Cards */
  /* mục card Start your journey with
  Ridek Taxi Company! */
  .card {
    border: none;
    /* box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); */
    position: relative;
  border: #333333;
  
  }
  
  .card-img-top {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-body {
    padding: 1.5rem;
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .card-text {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  .btn-primary {
    background-color: orange;
    border-color: orange;
  }
  
  .btn-primary:hover {
    background-color: orange;
    border-color: orange;
  }
  
  /* code HUYNHDAI */
  .huynhdai0 {
    width: 105%;
    margin-top: -6%;
    /* clip-path: polygon(0 0, 100% 0, 100% 100%); */
  
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 40%);
  }
  
  .huynhdai01 {
    position: relative;
  }
  
  .card-title01 {
    color: #000;
    position: relative;
    top: 27px;
    right: -18px;
    font-weight: bold;
  }
  
  
  
  /* code di chuyển nút */
  .nav-pills {
    position: relative;
  }
  
  
  /* màu chữ choossee taxi */
  /* Set the background color and text color for the active button */
  .nav-pills .nav-link.active {
    color: #999;
    /* White text color */
  }
  
  /* Set the background color and text color for the inactive buttons */
  .nav-pills .nav-link {
    color: #999;
    /* White text color */
    border-radius: 0;
    /* Remove the default rounded corners */
  }
  
  /* Add a hover effect to the inactive buttons */
  .nav-pills .nav-link:hover {
    color: #999;
  }
  
  /*  */
  /* nút button bấm vào  choosee taxi */
  
  .nav-link1 {
    background-color: #f4f4f4;
    color: #999;
    font-size: 17px;
    position: relative;
  }
  
  /* Nút xem thêm choossee taxi */
  .btn.btn-primary1 {
    background-color: #ff9900;
    /* Thêm màu nền đen khi hover */
    /* background-color: orange; */
    color: white;
    /* Thay đổi màu chữ thành trắng */
    transition: background-color 0.3s ease;
    /* Thêm hiệu ứng chuyển đổi */
   
  }
  
  .btn.btn-primary1:hover {
    background-color: black;
    /* Chuyển lại màu cam khi hover */
    color: white;
    /* Chuyển lại màu chữ thành đen */
  }
  
  /* chu p Huynhdai */
  /* HUYNHDAI ACCENT */
  .card-text {
    position: absolute;
    top: 130px;
  }
  
  /* HUYNHDAI03 */
  .huynhdai03 {
    /* clip-path: polygon(0 0, 100% 0, 100% 100%); */
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 40%);
    width: 351px;
    height: 200%;
    margin-top: -6%;
  
  }
  
  .huynhdai0-04 {
    position: absolute;
    width: 315px;
    top: 68px;
    right: 38px;
  }
  
  /* huynh dai chu chooosee taxi toyota */
  .huynhdai05 {
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 40%);
  
    /* clip-path: polygon(0 0, 100% 0, 100% 100%); */
    width: 350px;
    height: 200%;
    margin-top: -6%;
  }
  
  .huynhdai0-06 {
    right: 64px;
    position: absolute;
    width: 275px;
    top: 81px;
  }
  
  .huynhdai07 {
    /* clip-path: polygon(0 0, 100% 0, 100% 100%); */
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 40%);
  
    width: 350px;
    height: 200%;
    margin-top: -6%;
  }
  
  .huynhdai08 {
    position: relative;
    width: 300px;
    top: -151px;
  }
  
  .card-title02 {
    position: relative;
    top: 25px;
    right: -15px;
    font-weight: bold;
    color: #000;
  }
  
  /* kich co anh card cuoi */
  /* toyota taxi  */
  /* dong chu p huynh dai */
  /* phan cuoi toyota choosse card */
  .card-title6 {
    left: 9px;
    position: relative;
    top: 25px;
    color: #000;
  }
  
  .card-title7 {
    left: 13px;
    position: relative;
    top: 25px;
    color: #000;
  }
  
  /* chữ p choosee taxi */
  /* call us now */
  .section-online-thepeople {
    background-color: #1c1c1c;
    background-image: url('https://web307.webvungtau.com/wp-content/themes/weboto-vn/img/texture.png');
    background-repeat: no-repeat;
    position: relative;
    padding: 100px 0;
  }
  
  .title {
    margin-bottom: 10px;
  }
  
  .icon {
    width: 50px;
    height: 50px;
  }
  
  /*  */
  
  /* call us now */
  .section-online-thepeople {
    background-color: #1c1c1c;
    background-image: url('https://web307.webvungtau.com/wp-content/themes/weboto-vn/img/texture.png');
    background-repeat: no-repeat;
    position: relative;
    padding: 40px 0;
  }
  
  .title {
    margin-bottom: 10px;
  }
  
  .icon {
    width: 50px;
    height: 50px;
  }
  
  
  /* code css chữ và ảnh call us */
  .icon-text-1 {
    font-size: 20px;
    color: #d3d3ca;
    text-align: left;
    margin-bottom: 20px;
    /* position: absolute; */
    top: 296px;
    left: 71px;
    margin-left: 8%;
  }
  
  .icon-text-001 {
    font-size: 32px;
    color: #ff9900;
    text-align: left;
    /* margin-bottom: 20px; */
    /* position: absolute; */
    /* top: 337px; */
    /* left: 71px; */
    font-weight: 700;
    /* line-height: 1; */
    margin-left: 8%;
    margin-top: -2%;
  }
  
  /* code css kích cỡ chữ */
  .custom-image {
    width: 100px;
    height: auto;
    border: 2px solid #000;
    float: left;
    margin-top: 110px;
    /* Add any other styles you want */
  }
  
  /* clip path cắt ảnh */
  .section-online-thepeople {
    position: relative;
    background-color: #1c1c1c;
    background-size: 100%;
    /* overflow: hidden; */
    height: 448px;
  }
  
  .section-online-thepeople::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 400px;
    height: 200px;
    background-color: #fff;
    clip-path: polygon(100% 100%, 0 100%, 100% 0);
  }
  
  .section-online-thepeople::before {
    content: 0;
    position: absolute;
    width: 750px;
    left: -400px;
    top: -200px;
  }
  
  /* dòng chữ màu cam call us */
  .title {
    color: white;
    /* position: relative; */
    left: -61px;
    top: 65px;
    margin-left: -60%;
  }
  
  .orange-text {
    color: orange;
  }
  
  .ride1 {
    position: relative;
    left: -71px;
  }
  
  /*  */
  /* thanh nav màu cam phần liên hệ */
  .white-text001 {
    color: white;
    position: relative;
    transform: translateX(107%);
    position: absolute;
    right: -3%;
    top: -46;
  }
  
  /* màu chữ p call us  */
  .white-text {
    color: #ccc;
    /* position: relative; */
    /* transform: translateX(-8%); */
    top: 86px;
    font-weight: 500;
    font-size: 17px;
    /* margin-left: 19%; */
  }
  
  .img-car {
    left: 25px;
      position: relative;
      width: 416px;
      height: auto;
      top: -31%;
    /* Đặt chiều rộng hình ảnh thành 200 pixel */
    height: auto;
    /* Đặt chiều cao tự động, giữ nguyên tỷ lệ khung hình */
    transform: translateX(221%);
    margin-top: -18%;
  }
  
  .hotline-image1 {
    left: -1px;
    position: relative;
    top: 63px;
    margin-left: -94%;
    margin-top: 0%;
  }
  /*  */
  .text-wrapper {
    position: relative; /* Giữ nguyên nếu không cần di chuyển */
    left: 20px; /* Dịch sang phải */
    top: 43px; /* Dịch xuống dưới */
    text-align: center; /* Căn giữa nội dung */
  }
  /* choosee taxi dấu chấm */
  .card {
    position: relative;
    background-color: #ffffff;
    /* Mã màu cho màu trắng (#ffffff) */
  }
  
  .slick-slide {
    border: 1px solid #ccc;
  }
  
  .slick-dots {
    display: flex;
    margin-top: 35px;
    padding-left: 0;
    margin-bottom: 0;
    padding-left: 590px;
  }
  
  .slick-dots li {
    list-style: none;
    width: 10px;
    height: 10px;
    background-color: #000;
    cursor: pointer;
  
  }
  
  .slick-dots>li:not(:last-of-type) {
    margin-right: 8px;
  }
  
  .slick-dots li button {
    font-size: 0;
    padding: 0;
  }
  
  .slick-dots li.slick-active {
    background-color: #ff9900;
    box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.5);
  }
  
  .slick-slide .comment p {
    margin-bottom: 24px;
  }
  
  .slick-slide .user-info {
    display: flex;
  }
  
  .slick-slide .user-info .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-right: 20px;
    overflow: hidden;
  
  }
  
  .slick-slide .user-info .avatar img {
    width: 100%;
    height: 100%;
  }
  
  .slick-slide .company-info {
    flex-grow: 1;
    align-self: center;
  }
  
  /*Start you journey with phần xóa chữ pre và next  */
  
  .slick-next.slick-arrow:before,
  .slick-prev.slick-arrow:before {
    content: "";
  }
  
  .slick-next.slick-arrow,
  .slick-prev.slick-arrow {
    font-size: 0;
    line-height: 0;
  }
  
  /*  */
  .slick-next.slick-arrow {
    font-size: 0;
    line-height: 0;
  }
  
  .slick-next.slick-arrow i {
    font-size: 24px;
    color: #333;
    position: relative;
    top: 10px;
    left: 10px;
  }
  
  .hinhicon1 {
    font-size: 36px;
    color: #222;
    position: relative;
    top: -619px;
    left: 318px;
    z-index: 999;
  }
  
  .hinhicon2 {
    font-size: 36px;
    color: #222;
    position: relative;
    top: -618px;
    left: 1476px;
    z-index: 999;
  }
  
  /*  */
  /*  */
  /* Ẩn nút thừa */
  .btn {
    display: inline-block;
    padding: 8px 16px;
    color: rgb(240, 228, 228);
    text-decoration: none;
    border-radius: 4px;
  }
  
  .btn-primary:hover {
    background-color: #e9e3df;
  }
  
  .cart-title {
    color: black;
  }
  
  .btn-primary {
    color: #101114;
    background-color: #f0e6e6;
  }
  
  /*  */
  /* Hinh Start your journey with
  Ridek Taxi Company! */
  .cart-service .slick-next {
    left: -2%;
    position: absolute;
    top: 34%;
  }
  
  .cart-service .slick-prev {
    left: 95%;
    position: absolute;
    top: 29%;
    width: 60px;
    height: 56px;
    background-color: #ff9900;
    -webkit-clip-path: polygon(0 0, 100% 50%, 0 100%);
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    cursor: pointer;
  }
  
  .cart-service .slick-prev:before {
    content: "";
  }
  
  .slider {
    position: relative;
  }
  
  .card {
    /* Định dạng cho mỗi slide */
  }
  
  /* Định dạng cho các nút dot */
  .slick-dots li {
    padding: 0 8px;
  }
  
  .slick-dots li button {
    height: 10px;
    border-radius: 50%;
    background-color: #333;
    border: none;
    cursor: pointer;
  }
  
  .slick-dots li.slick-active button {
    background-color: #fff;
  }
  
  /*  */
  /*  Get the Ridek Mobile app and Start Your Journey!*/
  /* tạo dòng chữ get the ridex mobile */
  .section-online-book {
    /* Các thuộc tính CSS khác cho phần tử .section */
  }
  
  .xeoto {
    margin-left: 176px;
    position: absolute;
    top: 35%;
  }
  
  .people {
    margin-right: 201px;
    width: 180px;
    height: 392px;
    margin-top: 56px;
  }
  
  .demo2 {
    /* background-image: url("https://web307.webvungtau.com/wp-content/themes/weboto-vn/img/taxi-background.png"); */
    background-size: contain;
    width: 889px;
    height: 550px;
    right: 156px;
    top: 47px;
    position: relative;
    background-repeat: no-repeat;
  }
  
  .upper-alert-box {
    /* height: 70px; */
  }
  
  .section-online-book {
    background-color: #ffffff;
    padding: 30px;
    position: relative;
  }
  
  .column {
    margin-right: 70px;
  }
  
  h2 {
    font-size: 28px;
    margin-bottom: 20px;
    white-space: pre-line;
  }
  
  p {
    font-size: 17px;
    color: #000;
    /* white-space: pre-line; */
    font-family: "Space Grotesk", sans-serif;
  }
  
  .image-row {
    display: flex;
    position: relative;
    z-index: 1;
  }
  
  .image-item {
    text-align: center;
  }
  
  .image-item img {
    right: 38px;
    position: relative;
    height: 51px;
    margin-bottom: 10px;
  }
  
  .button-container {
    display: flex;
    justify-content: left;
    margin-top: 10px;
  }
  
  .image-button {
    margin: 0 20px;
    left: -33px;
    position: relative;
  }
  
  .car-image {
    width: 870px;
    left: 15%;
    height: auto;
    margin-bottom: 10px;
    position: absolute;
    top: 48px;
  }
  
  .phone-image {
    position: absolute;
    width: 266px;
    float: right;
    left: 31%;
    height: auto;
    margin-bottom: 10px;
    top: -39px;
  }
  
  .container .row .col-sm-6 h2 {
    color: black;
  }
  
  .animated-1 {
    color: black;
    font-family: "Space Grotesk", sans-serif;
    left: -3px;
    position: relative;
    font-size: 41px;
    font-weight: bold;
  }
  
  
  .animated-2 {
    color: #666;
    font-family: "Space Grotesk", sans-serif;
  }
  
  /*  */
  /* dòng chữ xuống hàng get ridek*/
  .col-6.get-app {
    display: flex;
    align-items: center;
  }
  
  /* nút button tải google play xuống hàng */
  .button-container {
    display: flex;
    flex-wrap: wrap;
  }
  
  .image-button {
    flex: 0 0 30%;
    display: flex;
    justify-content: center;
    margin-bottom: cover;
  }
  
  .image-button img {
    max-width: 200%;
    height: auto;
  }
  
  .overlay-image {
    position: relative;
  
    left: 593px;
    top: 69px;
    /* Giá trị số âm để di chuyển hình ảnh lên trên */
  }
  
  /* logo taxi get the ridek */
  .overlay-logo1 {
    left: 77px;
    position: relative;
    top: -183px;
  }
  
  /* dòng chữ easy to search  */
  .easy1 {
    color: #222;
    font-weight: 600;
  }
  
  /* dòng chữ Get the ridek */
  .new1 {
    position: relative;
    left: 2px;
    font-size: 41px;
    color: black;
    font-weight: 700;
  }
  
  /* chữ màu cam ridek */
  .section-heading08 {
    position: relative;
  }
  
  .section-heading08 h4 {
    position: relative;
    color: #f90;
    padding-left: 60px;
    display: flex;
    line-height: 16px;
    top: 1px;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .section-heading08 h4 span,
  .section-heading08 h4 span:before,
  .section-heading08 h4 span::after {
    background-color: #f90;
    width: 5px;
    height: 16px;
    display: inline-block;
    position: absolute;
    top: 1%;
  }
  
  .section-heading08 h4 span {
    top: 1px;
    position: absolute;
    left: 35px;
    transform: skew(-20deg, 0deg);
  }
  
  .section-heading08 h4 span:after {
    content: "";
    left: -10px;
    opacity: 0.5;
  }
  
  .section-heading08 h4 span:before {
    content: "";
    left: -20px;
    opacity: 0.2;
  }
  
  /* HotLine, Emeail, adress hàng ngang */
  .logo-container {
    order: 1;
  }
  
  .contact-info {
    display: flex;
    align-items: center;
    position: relative;
    margin-right: 10px;
    justify-content: flex-end;
    flex-basis: 80%;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    margin-left: 9px;
  
  }
  
  .contact-item a {
    margin-right: 10px;
  }
  
  .contact-item .text,
  .contact-item .text1,
  .contact-item .text02,
  .contact-item .text03 {
    font-size: 14px;
    white-space: nowrap;
  }
  
  /* CODE CSS HƠN 1000 + Tạo logo bảng */
  .section-online-Hon1000 {}
  
  .alert-box {
    left: -30%;
    background-color: white;
    padding: -90px;
    border: 1px solid gray;
    position: absolute;
    top: 21%;
  }
  
  .col-alert-box {
    background-image: url("https://html.dynamiclayers.net/dl/ridek/assets/img/map.png");
    width: 1000px;
    height: 800px;
  }
  
  .custom-heading {
    color: rgb(34, 34, 168);
    font-size: 24px;
  }
  
  .alert-box p {
    color: rgb(24, 20, 20);
  }
  
  .company-table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  
  .company-table td {
    padding: 10px;
    border: 1px solid gray;
  }
  
  /* chữ màu cam hơn 1000 */
  .section-heading09 {
    position: relative;
  }
  
  .section-heading09 h4 {
    position: relative;
    color: #f90;
    padding-left: 60px;
    display: flex;
    line-height: 16px;
    top: 1px;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  .section-heading09 h4 span,
  .section-heading09 h4 span:before,
  .section-heading09 h4 span::after {
    background-color: #f90;
    width: 5px;
    height: 16px;
    display: inline-block;
    position: absolute;
    top: 1%;
  
  }
  
  .section-heading09 h4 span {
    top: 1px;
    position: absolute;
    left: 35px;
    transform: skew(-20deg, 0deg);
  }
  
  .section-heading09 h4 span:after {
    content: "";
    left: -10px;
    opacity: 0.5;
  }
  
  .section-heading09 h4 span:before {
    content: "";
    left: -20px;
    opacity: 0.2;
  }
  
  /*  */
  /* dấu ghạch ngang màu cam khách hàng trải nghiệm 1000 */
  .slide-container {
    position: relative;
    padding-top: 64px;
  }
  
  .hinh1-icon {
    background-color: #f90;
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    font-size: 30px;
    color: #222;
    width: 60px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 100px;
    top: 25px;
    z-index: 1;
  }
  
  /*   lợi ích đặt xe hon 1000 */
  /* code icon  */
  .custom-size {
    font-size: 71px;
    position: relative;
    color: white;
  }
  
  /* dòng chữ 3 thông tin công ty */
  .table-heading03 {
    color: white;
    font-size: 16px;
    margin-top: 0;
    position: relative;
    font-size: 23px;
  }
  
  /* code loi ich dat xe hơn 1000 về dấu ghạch */
  .section-heading101 {
    position: relative;
  }
  
  .section-heading101 h4 span,
  .section-heading101 h4 span:before,
  .section-heading101 h4 span::after {
    background-color: rgb(236, 233, 226);
    width: 5px;
    height: 16px;
    display: inline-block;
    position: absolute;
    top: 1%;
  }
  
  .section-heading101 h4 span {
    top: 10px;
    position: absolute;
    left: -29px;
    transform: skew(-20deg, 0deg);
  
  }
  
  .section-heading101 h4 span:after {
    content: "";
    left: -10px;
    opacity: 0.5;
  }
  
  .section-heading101 h4 span:before {
    content: "";
    left: -20px;
    opacity: 0.2;
  }
  
  /* code loi ich dat xe heading101 */
  .chon1 {
    position: relative;
    color: white;
    right: -51px;
  }
  
  /* logo ridek thanh  */
  .logo1 {
    width: 206px;
    height: 163px;
  }
  
  .company-name {
    margin-top: 0;
    margin-bottom: 5px;
  }
  
  .company-description {
    margin-top: 0;
    margin-bottom: 0;
  }
  
  /*  */
  
  h1 {
    color: rgb(15, 11, 11);
    font-family: "Space Grotesk", sans-serif;
  }
  
  /* code tạo bảng slide carousel hon 1000 */
  .carousel {
    display: flex;
  }
  
  .slide {
    flex: 0 0 100%;
    padding: 3px;
    box-sizing: border-box;
  }
  
  .content {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .logo {
    width: 130px;
    height: 150px;
    margin-right: 10px;
  }
  
  h3,
  p {
    color: #000;
    margin: 0;
    font-family: "Space Grotesk", sans-serif;
  }
  
  .successfully-1 {
    position: relative;
    color: #868891;
  }
  
  
  /*  */
  /* ảnh bìa 1000 */
  .section-online-Hon1000 {
    background-image: url("https://html.dynamiclayers.net/dl/ridek/assets/img/map.png");
    background-repeat: no-repeat;
    background-color: #eee;
    position: relative;
    top: -23px;
  }
  
  .form-group1>.orange-table:not(:last-child) {
    margin-bottom: 30px;
  }
  
  /* hơn 1ooo khach hang */
  .orange-table {
    display: flex;
  }
  
  .right-column {
    flex: 1;
  }
  
  .left-column {
    margin-right: 20px;
  }
  
  .table-heading000 {
    color: white;
    font-size: 36px;
    margin-top: 0;
    position: relative;
    font-weight: bold;
    line-height: 26px;
  }
  
  .company-info0-1 {
    color: #fafafa;
  }
  
  .company-info0-01 {
    position: relative;
    color: white;
  }
  
  /* code hon 1000 kh tiet kiem chi phi */
  /* Ridek Passengers */
  .table-heading01 {
    position: relative;
    color: white;
    font-size: 16px;
    font-size: 23px;
  }
  
  .table-heading02 {
    position: relative;
    color: white;
    font-size: 16px;
    font-size: 23px;
  }
  
  .icon {
    width: 50px;
    height: 50px;
  }
  
  /* code css bảng ridek Passengers Reviews... */
  .slick-list {
    position: relative;
    display: block;
    overflow: hidden;
    margin: 27px;
    padding: 0px;
  }
  
  /*  */
  
  .review-heading {
    font-size: 41px;
    font-weight: bold;
    color: #333333;
    position: relative;
    text-align: left;
  }
  
  /* code Diệu lê */
  .table-1 {
    position: relative;
    background-color: #ffffff;
    
    border: 2px solid #ccc; 
    border-radius: 8px; /* Bo góc cho bảng */
    /* overflow: hidden; Để bo góc hoạt động */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Đổ bóng cho bảng */
  }
  
  .table-1 .slick-slide {
    border: 0px solid #ccc;
  }
  
  .table-1 .slick-dots {
    display: flex;
    margin-top: 35px;
    padding-left: 0;
    margin-bottom: 0;
    padding-left: 92px;
    position: relative;
    top: 70px;
  }
  
  .table-1 .slick-dots li {
    list-style: none;
    width: 10px;
    height: 10px;
    background-color: #000;
    cursor: pointer;
  }
  
  .table-1 .slick-dots li:not(:last-of-type) {
    margin-right: 8px;
  }
  
  .table-1 .slick-dots li button {
    font-size: 0;
    padding: 0;
  
  }
  
  .table-1 .slick-dots li.slick-active {
    background-color: #ff9900;
    box-shadow: 0 0 0 3px rgba(255, 153, 0, 0.5);
  }
  
  /*  */
  /* .table-1 .slick-slide .comment p {
    margin-bottom: 24px;
    color: #666;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -0.5px;
    font-family: 'Space Grotesk', sans-serif;
  } */
  
  /* thẻ chữ pridek passger rivew */
  .place-1 {
    font-size: 20px;
    line-height: 36px;
    font-weight: 500;
    margin-bottom: 0;
    letter-spacing: -0.5px;
    color: #a2a2a2;
    margin-top: 5%;
  
  
    text-align: justify; /* Căn chữ đều hai bên */
  
  }
  
  .table-1 .slick-slide .user-info {
    display: flex;
  }
  
  .table-1 .slick-slide .user-info .avatar {
    width: 99px;
    height: 96px;
    border-radius: 112%;
    margin-right: 20px;
    overflow: hidden;
    margin-left: 1%;
  }
  
  .table-1 .slick-slide .user-info .avatar img {
    width: 100%;
    height: 100%;
  }
  
  .table-1 .slick-slide .company-info {
    flex-grow: 1;
    align-self: center;
  }
  
  .table-1 .slick-slide .company-info p {
    display: block;
  }
  
  .table-1 .slick-slide .company-info p.ten01 {
    font-size: 20px;
    font-weight: 600;
  }
  
  .table-1 .slick-slide .company-info p.ten02 {
    font-size: 20px;
    font-weight: 500;
    position: relative;
    top: 0px;
  
  
  }
  
  .ten05 {
    font-size: 20px;
    position: relative;
    top: 11px;
    color: #000;
    font-weight: bold;
  }
  
  /* font chữ 1000 */
  .satisfaction {
    font-size: 16px;
  }
  
  /* code di chuyển trang */
  /* code bảng 1000 */
  /* nút 3 chấm hơn 1000 */
  .dots-container {
    text-align: center;
  }
  
  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    background-color: #bbb;
  }
  
  /* Tùy chỉnh màu sắc của dot đã được chọn */
  .dot.active {
    background-color: #555;
  }
  
  /*  */
  /*  */
  .logo {
    width: 150px;
    height: 150px;
    margin-right: 21%;
    /* left: -119px; */
    /* top: -57px; */
    position: relative;
  }
  
  .company-info p {
    margin: 0;
  }
  
  .icon-telephone1::before {
    content: "";
    position: absolute;
    top: 73%;
    left: 86%;
    transform: translateX(-1586%);
    width: 70px;
    height: 70px;
    line-height: 60px;
    text-align: center;
    font-size: 40px;
    color: #f90;
    background-color: rgba(255, 153, 0, .1);
    border-radius: 2px;
  }
  
  /* dien thoai */
  .hotline-image {
    left: 43px;
    position: relative;
    top: 53px;
  }
  
  /*  */
  /* thanh nav màu cam phần liên hệ */
  .white-text001 {
    color: white;
    position: relative;
    transform: translateX(107%);
    position: absolute;
    right: 27%;
    top: -46;
  }
  
  /*  */
  /* code tạo tin tức sự kiện chữ màu */
  .card-title {
    color: rgb(14, 11, 11);
  }
  
  .card-text {
    color: rgb(9, 9, 11);
  }
  
  /* CARD TIN TỨC SỰ KIỆN */
  /* màu chữ cam tin tức */
  .section-heading090 {
    position: relative;
  }
  
  .section-heading090 h4 {
    position: relative;
    color: #f90;
    padding-left: 883px;
    display: flex;
    line-height: 16px;
    top: -61px;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 1px;
  
  }
  
  .section-heading090 h4 span,
  .section-heading090 h4 span:before,
  .section-heading090 h4 span::after {
    background-color: #f90;
    width: 5px;
    height: 16px;
    display: inline-block;
    position: absolute;
    top: 1%;
  }
  
  .section-heading090 h4 span {
    top: 1px;
    position: absolute;
    left: 860px;
    transform: skew(-20deg, 0deg);
  
  }
  
  .section-heading090 h4 span:after {
    content: "";
    left: -10px;
    opacity: 0.5;
  }
  
  .section-heading090 h4 span:before {
    content: "";
    left: -20px;
    opacity: 0.2;
  }
  
  /* Tin tức sự kiện */
  /* chữ */
  .tintuc {
    position: relative;
    text-align: center;
    color: #666;
    top: -85px;
  }
  
  /*  */
  /* chu h1 */
  .tintuc1 {
    position: relative;
    top: -54px;
    font-weight: bold;
  }
  
  /* kích cỡ nút tin tức sự kiện */
  .card .custom-button {
    position: absolute;
    bottom: 20px;
    left: 36%;
    transform: translateX(-70%);
    width: 107px;
    height: 50px;
    top: 91%;
    color: #666;
    text-decoration: none;
    /* Bỏ dấu gạch chân */
    font-weight: 600;
  }
  
  /* chữ card  */
  .card-title000 {
    position: relative;
    top: -20px;
    color: #000;
    font-weight: bold;
  }
  
  /* tintuc  */
  /* chỉnh chữ lên xuống tin tức */
  .card-text-0 {
    font-family: Arial, sans-serif;
    /* Thiết lập font chữ */
    font-size: 16px;
    /* Thiết lập kích thước chữ */
    color: #666;
    /* Thiết lập màu chữ */
    line-height: 1.5;
    /* Thiết lập độ cao dòng */
    text-align: left;
    /* Thiết lập căn chỉnh nội dung */
    margin-top: 39px;
    /* Tạo khoảng cách trên */
    margin-bottom: -15px;
    /* Tạo khoảng cách dưới */
    top: -31px;
    position: relative;
    right: -3px;
    font-family: Arial, sans-serif;
  }
  
  .card-text-01 {
    font-family: Arial, sans-serif;
    /* Thiết lập font chữ */
    font-size: 16px;
    /* Thiết lập kích thước chữ */
    color: #666;
    /* Thiết lập màu chữ */
    line-height: 1.5;
    /* Thiết lập độ cao dòng */
    text-align: left;
    /* Thiết lập căn chỉnh nội dung */
    margin-top: 47px;
    /* Tạo khoảng cách trên */
    margin-bottom: -3px;
    /* Tạo khoảng cách dưới */
    top: 1px;
    position: relative;
    left: 1px;
    font-family: 'Space Grotesk', sans-serif;
  }
  
  .card-title-1 {
    position: relative;
    top: 23px;
    font-weight: bold;
  }
  
  /* New And Inghlight */
  .card-title-1 {
    color: #333;
    /* Màu chữ mặc định */
    text-decoration: none;
    /* Bỏ gạch chân mặc định */
    transition: color 0.3s, text-decoration 0.3s;
    /* Thêm hiệu ứng chuyển động */
  }
  
  .card-title-1:hover {
    color: black;
    /* Màu chữ khi trỏ chuột vào */
    text-decoration: underline;
    /* Thêm gạch chân */
    text-decoration-color: #ffa500;
    /* Màu gạch chân */
    text-decoration-thickness: 3px;
    /* Độ dày của gạch chân */
    font-weight: bold;
    /* Chữ đậm */
  }
  
  /*  */
  .card-title000 {
    color: black;
    /* Màu chữ mặc định */
    text-decoration: none;
    /* Bỏ gạch chân mặc định */
    transition: color 0.3s, text-decoration 0.3s;
    /* Thêm hiệu ứng chuyển động */
  }
  
  .card-title000:hover {
    color: black;
    /* Màu chữ khi trỏ chuột vào */
    text-decoration: underline;
    /* Thêm gạch chân */
    text-decoration-color: #ffa500;
    /* Màu gạch chân */
    text-decoration-thickness: 3px;
    /* Độ dày của gạch chân */
    font-weight: bold;
    /* Chữ đậm */
  }
  
  /* ghạch ngang read more */
  .custom-button {
    display: inline-block;
    position: relative;
    padding-left: 20px;
  }
  
  .custom-button::before {
    content: "";
    position: absolute;
    left: -28%;
    top: 27%;
    transform: translateY(-50%);
    width: 43px;
    height: 2px;
    background-color: #ff6b00;
  }
  
  /* chữ màu cam  */
  .custom-button {
    display: inline-block;
    position: relative;
    padding-left: 20px;
    color: #333;
    /* Màu chữ mặc định */
    transition: color 0.3s ease-in-out;
    /* Thêm transition để hiệu ứng trơn */
  }
  
  .custom-button::before {
    content: "";
    position: absolute;
    left: -16%;
    top: 27%;
    transform: translateY(-50%);
    width: 29px;
    height: 2px;
    background-color: #ff6b00;
  }
  
  .custom-button:hover {
    color: #ff6b00;
    /* Màu chữ khi trỏ chuột vào */
  }
  
  /* footer */
  .background-image {
    background-color: #1c1c1c;
    background-image: url('https://html.dynamiclayers.net/dl/ridek/assets/img/city-skiline.png');
    background-size: 100%;
    background-position: 200%;
    background-repeat: no-repeat;
    height: 450px;
  }
  
  /*  */
  /* Media query cho màn hình nhỏ (điện thoại) */
  /*  */
  .logo {
    flex: 0 0 auto;
  
  }
  
  /* Lớp che phủ */
  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .logo-image {
    float: left;
    width: 200px;
    height: auto;
    position: absolute;
    top: 23px;
  }
  
  .content {
    flex: 1;
  }
  
  .contact-info,
  .subscribe {
    margin-top: -20px;
  }
  
  .contact-info p {
    margin: 5px 0;
    color: #f0e6e6;
  }
  
  .subscribe input {
    width: 200px;
    /* Kích cỡ ô đăng ký */
  }
  
  .subscribe button {
    padding: 5px 10px;
  }
  
  /* dòng chữ trắng p */
  
  .description {
    position: absolute;
    top: 25px;
    left: 262px;
    color: #ccc;
    font-family: "Space Grotesk", sans-serif;
  }
  
  /* nút màu cam  nút dịch vụ nỗi bật*/
  button {
    background-color: #ff9900;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* cắt path slide */
  /* thanh nav footer hotline */
  .hotline {
    position: absolute;
    top: -10px;
    right: 0;
    background-color: #ff9900;
    padding: 10px;
    width: 700px;
    /* Đặt chiều rộng mong muốn */
    height: 110px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 10% 100%);
    /* tạo thanh nav có đường viền */
    background-image: repeating-linear-gradient(45deg, #f7a20f 0, #f7a20f 2px, transparent 0, transparent 50%);
    background-size: 10px 10px;
    z-index: 1;
  }
  
  /* chữ css foter  */
  .hotline-text0 {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 20%;
    left: 22%;
    font-size: 16px;
    /* Kích cỡ chữ */
    font-weight: 500;
    line-height: 1;
    color: #fafafa;
    margin-bottom: 5px;
  
  }
  
  .hotline-text1 {
    color: #222;
    font-size: 32px;
    font-weight: 700;
    line-height: 1;
    position: absolute;
    top: 45%;
    left: 22%;
    /* Kích cỡ chữ */
    font-weight: 700;
    line-height: 1;
    font-family: 'Space Grotesk', sans-serif;
  }
  
  /*  */
  .hotline-image {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 350%;
  }
  
  /* code css tạo ảnh anmwf bên trái chữ hotline footer */
  .hotline {
    overflow: auto;
    /* Cần thiết để đảm bảo phần tử cha bao quanh cả hình ảnh và văn bản */
  }
  
  .hotline-image {
    float: left;
    width: 80px;
    margin-right: 10px;
    /* Điều chỉnh khoảng cách giữa hình ảnh và văn bản */
    position: absolute;
    top: 14%;
    left: 90px;
  }
  
  /*  */
  .copyright-wrap {
    background-color: #1c1c1c;
    padding: 10px 0;
    text-align: center;
  }
  
  /* code css tạo hàng chữ địa chỉ, mở cửa, liên kết */
  .contact-label,
  .opening-label,
  .links-label {
    font-weight: bold;
    margin-bottom: 5px;
    position: relative;
  }
  
  .contact-info,
  .opening-info,
  .links-info {
    margin: -20px;
  }
  
  /*Địa chỉ footer  */
  .contact-info {
    color: #ffffff;
    /* Màu trắng cho toàn bộ đoạn text */
    font-size: 16px;
    font-weight: normal;
  }
  
  .address-label {
    color: #ff9900;
    /* Màu cam cho "Địa chỉ:" */
    font-weight: bold;
    font-size: 14px;
  }
  
  /*  */
  /* head office footer */
  .address-label-111 {
    color: white;
    font-weight: bold;
    display: inline-block;
    /* Để tạo kích thước theo nội dung */
    position: relative;
    /* Để tạo vị trí tương đối cho gạch chân */
    padding-bottom: 5px;
    /* Khoảng cách từ chữ đến gạch chân */
  }
  
  .address-label-111::after {
    content: "";
    /* Tạo nội dung rỗng */
    position: absolute;
    /* Đặt gạch chân tuyệt đối so với .contact-label */
    left: 0;
    /* Căn trái */
    bottom: 0;
    /* Căn dưới */
    width: 57%;
    /* Chiều rộng bằng 100% của .contact-label */
    height: 3px;
    /* Chiều cao gạch chân */
    background-color: #ff6b00;
    /* Màu cam */
  }
  
  /*  */
  .row-footer {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
    position: relative;
    top: -58px;
  }
  
  .address-text {
    /* Không cần định nghĩa thêm, sẽ kế thừa màu trắng từ .contact-info */
    font-size: 17px;
  }
  
  /*  */
  /* code css ghạch chân liên hệ footer */
  .contact-label {
    color: #333333;
    /* Màu chữ xám */
    font-size: 18px;
    /* Kích thước chữ */
    font-weight: bold;
    /* Độ đậm chữ */
    display: inline-block;
    /* Để tạo kích thước theo nội dung */
    position: relative;
    /* Để tạo vị trí tương đối cho gạch chân */
    padding-bottom: 5px;
    /* Khoảng cách từ chữ đến gạch chân */
  }
  
  .contact-label::after {
    content: "";
    /* Tạo nội dung rỗng */
    position: absolute;
    /* Đặt gạch chân tuyệt đối so với .contact-label */
    left: 0;
    /* Căn trái */
    bottom: 0;
    /* Căn dưới */
    width: 57%;
    /* Chiều rộng bằng 100% của .contact-label */
    height: 3px;
    /* Chiều cao gạch chân */
    background-color: #ff6b00;
    /* Màu cam */
  }
  
  /* code css tạo ghạch chân  mở cửa*/
  .opening-label {
    color: #333333;
    /* Màu chữ xám */
    font-size: 18px;
    /* Kích thước chữ */
    font-weight: bold;
    /* Độ đậm chữ */
    display: inline-block;
    /* Để tạo kích thước theo nội dung */
    position: relative;
    /* Để tạo vị trí tương đối cho gạch chân */
    padding-bottom: 5px;
    /* Khoảng cách từ chữ đến gạch chân */
  }
  
  .opening-label::after {
    content: "";
    /* Tạo nội dung rỗng */
    position: absolute;
    /* Đặt gạch chân tuyệt đối so với .contact-label */
    left: 0;
    /* Căn trái */
    bottom: 0;
    /* Căn dưới */
    width: 57%;
    /* Chiều rộng bằng 100% của .contact-label */
    height: 3px;
    /* Chiều cao gạch chân */
    background-color: #ff6b00;
    /* Màu cam */
  }
  
  /* code ghạch chân footer  liên kết */
  .links-label {
    color: #333333;
    /* Màu chữ xám */
    font-size: 18px;
    /* Kích thước chữ */
    font-weight: bold;
    /* Độ đậm chữ */
    display: inline-block;
    /* Để tạo kích thước theo nội dung */
    position: relative;
    /* Để tạo vị trí tương đối cho gạch chân */
    padding-bottom: 5px;
    /* Khoảng cách từ chữ đến gạch chân */
  }
  
  .links-label::after {
    content: "";
    /* Tạo nội dung rỗng */
    position: absolute;
    /* Đặt gạch chân tuyệt đối so với .contact-label */
    left: 0;
    /* Căn trái */
    bottom: 0;
    /* Căn dưới */
    width: 57%;
    /* Chiều rộng bằng 100% của .contact-label */
    height: 3px;
    /* Chiều cao gạch chân */
    background-color: #ff6b00;
    /* Màu cam */
  }
  
  .links-info {
    margin-bottom: 5px;
  }
  
  .subscribe input[type="email"] {
    padding: 5px;
    width: 300px;
    height: 50px;
    margin-right: 5px;
    /* clip-path: polygon(0 0, 75% 0, 100% 100%,  0  100%); */
    clip-path: polygon(0% 0%, 90% 0, 100% 30%, 100% 100%, 0 100%);
  }
  
  /* nut dang ky footer */
  .subscribe button {
    padding: 5px 10px;
    background-color: #ff9900;
    color: #222;
    border: none;
    cursor: pointer;
    width: 173px;
    height: 50px;
    top: 36%;
    left: 5%;
    position: absolute;
    font-weight: 600;
    clip-path: polygon(0 0, 100% 0%, 85% 100%, 0 100%);
  }
  
  /*  */
  .sidebar {
    /* Your sidebar styles here */
  }
  
  /* mục choosee your taxi */
  .row {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: 16px;
    margin-right: 7%;
  right: -77px;  
  }
  
  .row-tintuc1 {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    top: -59px;
    justify-content: center;
    gap: 26px;
  }
  
  .col {
    flex-basis: 25%;
    padding: 10px;
  }
  
  .contact-label,
  .opening-label,
  .links-label,
  .contact-info,
  .opening-info,
  .links-info {
    color: white;
  }
  
  .contact-label,
  .opening-label,
  .links-label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .contact-info,
  .opening-info,
  .links-info {
    margin: -20px;
  }
  
  /* màu chữ 123web footer */
  .footer-text {
    top: 5px;
    position: relative;
    color: white;
    text-align: center;
  }
  
  footer {
    position: relative;
  }
  
  /* code css tạo chuyển động xe ô tô */
  .icon-car {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;
    overflow: hidden;
    bottom: 0;
    position: absolute;
    z-index: 2;
  }
  
  .icon-car img {
    width: 6%;
    height: auto;
    object-fit: contain;
  }
  
  .icon-car .car1 {
    animation: carAnimation 2s linear infinite;
  }
  
  @keyframes carAnimation {
    0% {
      transform: translateX(-100%);
    }
  
    100% {
      transform: translateX(100%);
    }
  }
  
  .icon-car .car2 {
    animation: carAnimation2 2s linear infinite;
  }
  
  @keyframes carAnimation2 {
    0% {
      transform: translateX(100%);
    }
  
    100% {
      transform: translateX(-100%);
    }
  }
  
  .icon-car .car3 {
    animation: carAnimation3 2s linear infinite;
  }
  
  @keyframes carAnimation3 {
    0% {
      transform: translateX(100%);
    }
  
    100% {
      transform: translateX(-100%);
    }
  }
  
  /* cỡ chữ footer 123thietkeweb */
  
  .image-container {
    justify-content: space-between;
    display: flex;
    flex-direction: row;
  }
  
  img.image-car1 {
    left: 0%;
    position: relative;
    width: 300px;
  
  }
  
  .image-car2-container {
    display: flex;
  }
  
  img.image-car2 {
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    position: relative;
    top: 84px;
    position: relative;
    right: -58px;
  }
  
  .ceo {
    border-radius: 100%;
    width: 14%;
  }
  
  .datxebutton {
    left: 94%;
    width: 353px;
    top: 37%;
    position: absolute;
  }
  
  /* Section Choose Your Taxi */
  .choose-your-taxi {
    /* padding-top: 110px; */
    padding-bottom: 100px;
  }
  
  .choose-your-taxi .section-heading07 h4 {
    justify-content: center;
    margin-bottom: 24px;
    margin-top: -11%;
  }
  
  .choose-your-taxi .section-heading07 h4 span {
    position: relative;
    margin-right: 10px;
  }
  
  .choose-your-taxi h1 {
    margin-bottom: 24px;
  }
  
  .choose-your-taxi .chooseetaxi1 {
    color: #666;
    max-width: 50%;
    text-align: center;
    margin: 0 auto 45px auto;
    position: relative;
    top: -11px;
  }
  
  .choose-your-taxi .chooseetaxi2 {
    font-weight: 700;
    font-size: 40px;
    position: relative;
    top: 6px;
  }
  
  .choose-your-taxi .nav-pills {
    justify-content: center;
    position: relative;
    top: -17px;
  }
  
  /*  */
  
  
  /* mục choosee taxi you ride */
  
  
  
      /* .nav-link1::after {
    content: "___";
    font-weight: 200;
    font-size: 2.2em; 
    background-color: #f4f4f4;
      width: 36px;
      height: 2px;
      transform: translateY(-50%);
      padding-right: 10px;
      position: relative;
      left: 22px;
      top: 4px;
      color: #ccc;
      border-top: 2px solid #ccc; 
  
  
  
  }    */
  /*code css mục choose you taxi mục dấu ghạch ngang  */
  
  .nav-link1 {
    display: inline-block; /* Để phần tử có thể chứa nội dung */
    white-space: nowrap; 
    overflow: visible;    /* Đảm bảo nội dung không bị ẩn */
  }
  
   .nav-link1::after {
    /* content: ""; */
    /* font-weight: 200; */
    /* font-size: 2.2em;  */
    /* border-top: 2px solid #ccc; 
    width: 100px; 
    position: relative;
    left: 151px;
    top: -11px;
    display: block;
    padding-right: 54px;
    margin-right: 88px; */
  } 
   /* xóa dấu ghạch ngang số 3 */
  .nav-item:last-child .nav-link1::after {
    content: "";
    display: none;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  /*  */
  /* mục choosee you taxi */
  .nav-item:last-child .nav-link1::after {
    content: ""; 
  
  } 
  /*  */
  
  
  
  
  
  
  
  /*  */
  /* màu chữ trỏ chuột hiển thị choossee taxi */
  .choose-your-taxi .nav-pills .nav-item {
    position: relative;
  }
  
  .choose-your-taxi .nav-pills .nav-item:not(:last-of-type) {
    margin-right: 110px;
  }
  
  .choose-your-taxi .nav-pills .nav-item:not(:last-of-type)::after {
    content: "";
    border-top: 2px solid #ccc; 
    width: 100px; 
    position: absolute;
    left: calc(100% + 10px);
    top: 50%;
    transform: translateY(-50%);
    display: block;
  } 
  /* màu chữ trỏ chuột hiển thị choossee taxi */
  .choose-your-taxi .nav-pills .nav-link1 {
    color: #333;
    /* Màu chữ mặc định */
    font-weight: normal;
    /* Trọng lượng chữ bình thường */
    transition: color 0.3s ease, font-weight 0.3s ease;
    /* Thêm hiệu ứng chuyển động */
  }
  
  .choose-your-taxi .nav-pills .nav-link1.active,
  .choose-your-taxi .nav-pills .nav-link1:hover {
    color: #000;
    /* Màu đen đậm khi trỏ chuột vào hoặc khi active */
    font-weight: 500;
    /* Trọng lượng chữ đậm */
  }
  
  .choose-your-taxi .huynhdai01 {
    position: absolute;
    top: 60px;
    left: 24px;
    width: calc(100% - 48px);
  }
  
  .choose-your-taxi .btn.btn-primary1 {
    width: 100%;
    border-radius: 0;
    font-size: 16px;
    line-height: 24px;
    padding: 11px 16px;
    position: relative;
    top: 17px;
    color: #fff;
    font-weight: 500;
    left: 0px;
  }
  
  .choose-your-taxi .card-body p {
    color: #666;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  
  /* Limousine Taxi CHOOOSSEE YOUR TAXXI */
  /* Card */
  .card {
    width: 100%;
    max-width: 380px;
    margin-bottom: 30px;
  
  
    box-shadow: none;
    border-radius: 0px;
    border: 1px solid #ccc; /* Đường viền chính */
  }
  
  /* Card Image */
  .card-img-top {
    position: relative;
    top: -18px;
    left: -20px;
    width: 378px;
    height: 221px;
    object-fit: cover;
  }
  
  /* Card Body */
  .card-body {
    padding: 20px;
  }
  
  /* Card Title */
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  /* choosee taxi */
  /* footer  chữ liên hệ email */
  .contact-info1 {
    display: block;
    align-items: center;
    position: relative;
    color: #ccc;
  }
  
  /* trang cuộn xuống */
  /* CODE TẠO THANH CUỘN XUỐNG */
  
  .scroll-navbar {
    height: 80px;
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .scroll-navbar .container {
    max-width: 1200px;
    width: 100%;
    padding: 0 20px;
  }
  
  .scroll-navbar .navbar-brand img {
    height: 40px;
  }
  
  .side-navbar {
    /* height: 80px; */
    background-color: white;
    color: black;
    display: flex;
    align-items: center;
    /* margin-top: -70px; */
  }
  
  .side-navbar ul {
    /* display: flex; */
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .side-navbar li {
    margin-right: 20px;
  }
  
  .side-navbar a {
    color: #666;
    text-decoration: none;
  }
  
  .logo000 {
    position: absolute;
    left: 190px;
    top: 10px;
    width: 10px;
  }
  
  .logo01 {
    width: 188px;
    margin-left: -538px;
    margin-top: -50px;
  }
  
  .side-navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 138px; */
    background-color: white;
    color: black;
    margin-top: 5%;
  }
  
  .side-navbar {
    display: none;
    /* position: fixed; */
    width: 100%
    z-index: 2;
  }
  
  .side-navbar.show {
    display: block;
  }
  
  /*  */
  .side-navbar ul {
    list-style: none;
    margin: 0;
    padding: 0;
    justify-content: center;
    align-items: center;
  }
  
  .side-navbar li {
    margin-right: 20px;
  }
  
  .side-navbar a {
    position: relative;
    top: 6px;
    color: #222;
    font-weight: 500;
  }
  
  /* mục liện hệ  THANH CUỘN*/
  .contact-nav111 {
    /* position: absolute; */
    /* top: 13%;
    left: 269%; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: #fff;
    transform: skewX(0deg);
    padding: 12px 30px;
    transform: translate(-133px, 26px);
      height: 52px;
    /* transform: translate(-230%, 30px); */
  }
  
  /* code css thanh cuộn dấu 3 ghạch */
  .navbar-toggler01 {
    color: white;
    background-color: white;
    right: -211px;
    top: 21px;
    position: absolute;
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: relative;
    left: 276px;
  }
  
  .navbar-toggler01 .navbar-toggler-icon {
    display: block;
    width: 20px;
    height: 2px;
    background-color: #000000;
    /* Màu đen */
    margin: 3px 0;
    position: relative;
  }
  
  .navbar-toggler01 .navbar-toggler-icon::before,
  .navbar-toggler01 .navbar-toggler-icon::after {
    content: "";
    display: block;
    width: 20px;
    height: 2px;
    background-color: #000000;
    /* Màu đen */
    position: absolute;
    left: 0;
  }
  
  .navbar-toggler01 .navbar-toggler-icon::before {
    top: -6px;
  }
  
  .navbar-toggler01 .navbar-toggler-icon::after {
    bottom: -6px;
  }
  
  /*  */
  
  /* NEW AND LINE */
  .price01 {
    position: relative;
    display: inline-block;
    background-color: #ff9900;
    color: white;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 20px;
    clip-path: polygon(85% 0%, 100% 30%, 100% 100%, 0 100%, 0 0);
    position: absolute;
    right: 258px;
    top: 179px;
  }
  
  .price011 {
    position: relative;
    display: inline-block;
    background-color: #ff9900;
    color: white;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 20px;
    clip-path: polygon(85% 0%, 100% 30%, 100% 100%, 0 100%, 0 0);
    position: absolute;
    right: 266px;
    top: 179px;
  }
  
  .price012 {
    position: relative;
    display: inline-block;
    background-color: #ff9900;
    color: white;
    font-size: 16px;
    font-weight: 600;
    padding: 10px 20px;
    clip-path: polygon(85% 0%, 100% 30%, 100% 100%, 0 100%, 0 0);
    position: absolute;
    right: 280px;
    top: 179px;
  }
  
  /* khoảng cacsg NEW AND LINE */
  .date {
    margin-right: 10px;
    color: #ccc;
  
    font-family: "Space Grotesk", sans-serif;
    text-transform: capitalize;
    font-weight: 500;
  }
  
  .name {
    color: #666;
  
    text-transform: capitalize;
    font-weight: 500;
    color: #ccc;
  }
  
  /* màu hình icon NEW AND LINE */
  .icon-container i {
    font-size: 16px;
    color: #ff8c00;
    /* Orange color */
  }
  
  .user-icon {
    font-size: 16px;
    color: #ff8c00;
    /* Orange color */
  }
  
  /* kích cỡ  website khi xem trên điện thoại */
  /* @media (max-width: 767px) {
  }  
   */
  /* kíchthuoc */
  /* thanh nav */
  /* khai báo media */
  /* Default styles (for large screens) */
  /* Your default CSS styles go here */
  
  /* Styles for medium screens (tablets) */
  @media (max-width: 991px) {
    /* Add your tablet-specific styles here */
  }
  
  /* Styles for small screens (phones) */
  
  
  /* Styles for extra-small screens (smaller phones) */
  @media (max-width: 575px) {
    /* Add your extra-small mobile-specific styles here */
  
    /* For example: */
    .hero-content h1 {
      font-size: 20px;
    }
  
    .feature-item {
      flex-basis: 100%;
    }
  }
  
  /* Styles for larger screens */
  /* Media query for screens smaller than 768px (mobile devices) */
  @media (max-width: 767px) {
  
    /*  ẩn thanh logo*/
    .logo-container {
      display: none;
    }
  
    .contact-info {
      width: 100%;
    }
  
    /* ẩn dòng chữ */
    .contact-item .text,
    .contact-item .text-1,
    .contact-item .text-02,
    .contact-item .text-03 {
      display: none;
    }
  
    .contact-info {
      width: 100%;
    }
  
    /* thanh cuộn ẩn dòng chữ  */
  
    .side-navbar li:not(.logo000) {
      display: none;
    }
  
    /* code css điều chỉnh dấu 3 ghạch nằm bên phải thanh cuộn */
  
    .side-navbar {
      /* left: -20px; Điều chỉnh độ rộng của thanh cuộn */
      transition: left 0.3s ease;
    }
  
    .side-navbar.show {
      left: 0;
    }
  
  
  
    /*  */
    /* CSS Code */
    /* code chữ book you taxi */
    .carousel-item {
      position: relative;
    }
  
    .carousel-caption {
      position: absolute;
      top: 71%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
      width: 90%;
    }
  
  
    .carousel-caption h4 {
      font-size: 18px;
      margin-bottom: 5px;
      margin-top: 80px;
      margin-right: -140px;
      text-align: left;
    }
  
    .carousel-caption h1 {
      font-size: 31px;
      /* margin-bottom: 5px; */
      margin-right: 25px;
    }
  
    .carousel-caption p {
      font-size: 14px;
      line-height: 1.3;
      margin-bottom: 15px;
      margin-right: 37px;
    }
  
    .carousel-item img {
      height: 641px;
      object-fit: cover;
  
    }
  
    /* nút button xem trên điện thoại mục book your */
  
    .btn-view-more {
      padding: 11px 10px;
      /* Tăng kích thước nút */
      font-size: 16px;
      /* Tăng kích thước chữ */
      width: 48%;
      /* Đặt nút với chiều rộng 100% */
      float: none;
      /* Đặt nút ở vị trí bình thường (không float) */
      text-align: center;
      /* Canh giữa chữ */
      margin-top: -50px;
    }
  
    /* code css media query xem điện thoại mục Chỉnh số trang1/2 Book your taxi */
  
    .carousel-indicators {
      bottom: 10px;
      /* Giảm khoảng cách từ dưới lên cho màn hình nhỏ */
    }
  
    .carousel-indicators li {
      width: 25px;
      height: 25px;
      line-height: 25px;
      /* Điều chỉnh để số trang nằm giữa theo chiều dọc */
      font-size: 14px;
      /* Giảm kích thước chữ */
      margin: 0 3px;
      /* Giảm khoảng cách giữa các nút */
      margin-right: -70px;
      margin-top: -120px;
    }
  
    .carousel-indicators li .total-slide {
      font-size: 10px;
      margin-top: 3px;
      /* Giảm khoảng cách giữa số và phần /2 */
    }
  
    /* code css media query xem điện thoại mục Chỉnh số trang1/2 Book your taxi */
  
  
  
  
    .carousel-indicators {
      bottom: 10px;
      /* Giảm khoảng cách từ dưới lên cho màn hình nhỏ */
    }
  
  
    .carousel-indicators li {
      width: 25px;
      height: 25px;
      line-height: 25px;
      /* Điều chỉnh để số trang nằm giữa theo chiều dọc */
      font-size: 14px;
      /* Giảm kích thước chữ */
      margin: 0 3px;
      /* Giảm khoảng cách giữa các nút */
      margin-right: -70px;
      margin-top: -120px;
    }
  
    .carousel-indicators li .total-slide {
      font-size: 10px;
      margin-top: 3px;
      /* Giảm khoảng cách giữa số và phần /2 */
    }
  
    /* code css media kích cỡ pre next book your */
  
  
  
    .carousel-control-next {
      padding: 5px 15px;
      /* Thu nhỏ padding cho phù hợp với điện thoại di động */
      margin-left: -110px;
      /* Thêm khoảng cách giữa các nút nếu cần */
      margin-top: -20px;
    }
  
    .carousel-control-prev {
      padding: 5px 15px;
      /* Thu nhỏ padding cho phù hợp với điện thoại di động */
      margin-top: -20px;
    }
  
  
    i {
      font-size: 16px;
      /* Giảm kích thước icon */
    }
  
    /* code thanh trắng media book your */
  
    .chunhat1 {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0px;
      width: 100%;
      height: 100px;
      background-color: white;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      /* transform: translate(-50%, -50%); */
  
    }
  
  
    /* code css mục feel the diffrent */
  
    .image-car1-container {
      width: auto;
      /* Điều chỉnh kích thước theo nhu cầu */
      height: auto;
      margin-left: 0px;
    }
  
    .image-car2-container {
      width: auto;
      /* Điều chỉnh kích thước theo nhu cầu */
      height: auto;
      margin-left: -300px;
      margin-top: -130px;
  
    }
  
    .additional-images {
      width: auto;
      /* Điều chỉnh kích thước theo nhu cầu */
      height: auto;
      margin-left: -200px;
    }
  
    .Image {
      margin-left: -220px;
    }
  
    .image-animation {
      margin-left: -235px;
    }
  
    .image-container::after {
      margin-left: -66px;
      width: 174px;
      height: -150px;
      margin-top: -40px;
    }
  
    /* Hiển thị chữ lên ảnh cover khi xem trên màn hình nhỏ (điện thoại) */
  
    .cover-image {
      position: relative;
    }
  
    .cover-image .textdichvunoibat {
      color: #fff;
      position: absolute;
      top: 36px;
      left: 56px;
      font-weight: 700;
      line-height: 50px;
    }
  
    /* Hiển thị chữ lên ảnh cover khi xem trên màn hình nhỏ (điện thoại) */
  
  
    .cover-image {
      position: relative;
    }
  
    .animated {
      color: #fff;
      position: absolute;
      top: 144px;
      font-size: 13px;
    }
  
    .second-line {
      font-size: 13px;
      line-height: 1.5;
    }
  
    .cover-image .wow.bounceInUp .second-line {
      margin-left: 30px;
      color: #fff;
    }
  
  
    .wow.bounceInUp.animated {
      font-size: 13px;
      line-height: 1.5;
      white-space: normal;
      margin-top: -58px;
    }
  
    .wow.bounceInUp.animated br {
      display: block;
    }
  
    .wow.bounceInUp.animated .second-line {
      display: block;
    }
  
    /* Media query for mobile devices */
  
    .img-car {
      display: none;
    }
  
    /* Ẩn hình thanh màu cam  ONLINE BOOKING- book you taxi ride */
  
    .section-online-booking::before {
      display: none;
    }
  
    /*thẻ chữ h3  ONLINE BOOKING- book you taxi ride */
    .section-online-booking h3 {
      font-size: 23px;
      position: relative;
      top: -51px;
    }
  
    .section-online-booking h3 span {
      font-size: 28px;
      margin-right: 10px;
    }
  
    /* cắt ghạch chéo ONLINE BOOKING- book you taxi ride  */
    .section-online-booking::after {
      background-color: #1c1c1c;
      background-repeat: no-repeat;
      position: relative;
      padding: 107px 0;
    }
  
    /* mục kích cỡ nút button ONLINE BOOKING- book you taxi ride  */
  
    .sumit1 {
      width: 100%;
      height: 45px;
      font-size: 16px;
    }
  
    /* cắt ghạch chéo ONLINE BOOKING- book you taxi ride  */
    .section-heading07 h4 {
      top: -43px;
      margin-left: 102px;
    }
  
  
    /* Dòng chữ choosee your taxi rides  thanh tiêu đề*/
  
    .wow.bounceInUp.animated {
      font-size: 21px;
      line-height: 1.5;
      white-space: normal;
      margin-top: -58px;
    }
  
    /*  dòng chữ p choosee your taxi*/
  
    .choose-your-taxi .chooseetaxi1 {
      max-width: 100%;
      top: 0;
      margin-left: 10px;
  
      position: relative;
      right: -35px;
    }
  
    /* code thanh chọn choosee taxi nằm ngang */
    .choose-your-taxi .nav-pills {
      flex-wrap: wrap;
      justify-content: flex-start;
      top: 0;
    }
  
    .choose-your-taxi .nav-pills .nav-link1 {
      margin: 0 10px 10px 0;
      padding: 8px 12px;
      font-size: 14px;
      left: 91px;
    }
  
    /* code làm ẩn điện thoại ONLINE BOOKING */
    .form-group .car-image,
    .form-group .phone-image {
      display: none;
    }
  
    .form-group .xeoto {
      width: 100%;
      height: auto;
    }
  
    /* cpde làm ẩn xe ô tô  ONLONE BOOKING*/
    .xeoto {
      display: none;
    }
  
  
    /* CSS for mobile */
    .animated-1,
    .new1 {
      font-size: 24px;
      position: relative;
      top: 50%;
      left: 8%;
    }
  
    /*  ridek mobile*/
    .animated-1,
    .new1 {
      font-size: 24px;
      display: block;
      position: relative;
      left: 56%;
      transform: translate(-56%, 15%);
      z-index: 1;
    }
  
    .new1 {
      margin-top: 11px;
      margin-right: -799px;
      transform: translate(-20%, -32%);
    }
  
  
    .text-overlay {
      font-size: 18px;
      margin-right: -60px;
      z-index: 1;
    }
  
    /* Media query for mobile devices */
    .image-item {
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-bottom: 20px;
    }
  
    .image-item img {
      margin-right: 10px;
    }
  
    .image-item p.easy1 {
      font-size: 16px;
      white-space: nowrap;
    }
  
    /* Kích thước nút button trên thiết bị di động GET STARRT RIDEK */
  
    .image-button {
      width: 400px;
      height: 56px;
      margin-right: 30px;
    }
  
    .orange-table {
      display: block;
    }
  
    .orange-table .left-column,
    .orange-table .right-column {
      width: 100%;
    }
  
    /* bảng màu cam điện thoại ridke */
  
    .right-column h1,
    .right-column p {
      text-align: left;
      position: relative;
      right: -58px;
      top: -60px;
    }
  
    .chon1 {
      position: relative;
      color: white;
      right: -58px;
      top: -70px;
    }
  
    /* Hiển thị nút chỉ trên điện thoại di động */
  
    .btn-search {
      display: none;
    }
  
    /*code css làm ẩn thanh nav nút BOOKTAXI  */
  
    .contact-nav111 {
      display: none;
      /* Hiển thị trên thiết bị nhỏ hơn 768px */
    }
  
    /* dòng chữ thẻ p Start your joney */
    .wow.bounceInUp.animated {
      font-size: 16px;
      line-height: 1.5;
      white-space: normal;
      margin-top: -7px;
      margin-left: 25px;
      text-align: center;
    }
  
    .second-line {
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
      position: relative;
      right: 23px;
    }
  
    .logo01 {
      max-height: 40px;
      margin-left: -3px;
      margin-top: 2px;
      height: auto;
      width: 133px;
    }
  
  
    /* code css book you */
  
    .chunhatden {
      display: none;
    }
  
    /* khoảng trắng book you */
  
    .chunhat1 {
      display: block;
      position: absolute;
      top: 546px;
      left: -65px;
      width: 168%;
      height: 100px;
      background-color: white;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
      transform: translate(-48%, -84%);
    }
  
    /* dòng chữ book you */
    .carousel-caption h4 {
      font-size: 18px;
      margin-bottom: 5px;
      margin-top: 80px;
      margin-right: -140px;
    }
  
    .carousel-caption {
      position: absolute;
      top: 71%;
      left: 59%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: #fff;
      width: 90%;
    }
  
    /* Đặt chiều cao của carousel-inner chiếm toàn bộ màn hình */
    .carousel-inner {
      height: 600vh;
      /* 100% chiều cao màn hình */
      background-color: white;
      border: 1px solid #ccc;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  
    body {
      font-size: 14px;
      /* Giảm kích thước chữ cho điện thoại */
      padding: 10px;
      /* Thêm khoảng cách xung quanh */
    }
  
    h1 {
      font-size: 24px;
      /* Kích thước tiêu đề nhỏ hơn */
    }
  
    .container {
      padding: 10px;
      /* Giảm khoảng cách bên trong */
    }
  
    .button {
      width: 100%;
      /* Nút chiếm toàn bộ chiều rộng */
      padding: 10px;
      /* Thêm khoảng cách cho nút */
      font-size: 16px;
      /* Kích thước chữ cho nút */
    }
  
    .image {
      width: 100%;
      /* Hình ảnh chiếm toàn bộ chiều rộng */
      height: auto;
      /* Giữ tỉ lệ khung hình */
    }
  
    /* Các quy tắc khác cho màn hình nhỏ */
    .text {
      line-height: 1.4;
      /* Điều chỉnh khoảng cách dòng */
    }
  
    /* mục book you pre */
  
    .button-carousel {
      height: 40px;
      /* Điều chỉnh chiều cao cho màn hình nhỏ */
      width: 80%;
      /* Đặt chiều rộng thành 80% */
      left: 10%;
      /* Căn giữa nút */
      bottom: 50px;
      /* Điều chỉnh vị trí dưới cùng */
      margin-top: -55px;
      font-size: 14px;
      /* Điều chỉnh kích thước chữ */
    }
  
    /* nút làm ẩn */
    .carousel-inner::after {
      display: none;
    }
  
    /* nút booj you 1/2 */
    #carouselExampleFade .carousel-indicators li {
      right: -46px;
      /* Đưa chỉ báo vào trong màn hình */
      position: relative;
      color: #ff9900;
      background-color: transparent;
      width: auto;
      background-clip: unset;
      text-indent: 0;
      top: 10px;
      /* Điều chỉnh vị trí trên dưới cho di động */
      height: auto;
      font-size: 20px;
      /* Giảm kích thước font chữ cho di động */
      padding: 5px;
      /* Thêm khoảng cách cho chỉ báo */
    }
  
    /* ridek passger */
    .table-heading000 {
      font-size: 25px;
      line-height: 20px;
    }
  
    /* thanh cuộn */
  
  
    .side-navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      z-index: 999;
      overflow-x: auto;
      white-space: nowrap;
    }
  
    .side-navbar ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: inline-block;
    }
  
    .side-navbar li {
      display: inline-block;
      margin-right: 20px;
    }
  
    .side-navbar a {
      color: #333;
      text-decoration: none;
      padding: 10px;
    }
  
    .side-navbar a:hover {
      background-color: #555;
    }
  
    .logo000 {
      display: inline-block;
      margin-right: 20px;
    }
  
    .logo01 {
      max-height: 50px;
      height: auto;
    }
  
    .menu-icons {
      display: inline-block;
      margin-left: auto;
    }
  
    .contact-nav111 {
      color: #fff;
      padding: 10px 20px;
      background-color: black;
      border-radius: 5px;
      margin-left: 20px;
  
    }
  
    /*  ảnh bìa book you*/
    .carousel-item img {
      height: 559px;
    }
  
    .carousel-caption {
      top: 30%;
      transform: translateY(-30%);
    }
  
    .carousel-caption h1 {
      font-size: 25px;
      line-height: 36px;
      top: 1px;
      margin-left: -121px;
    }
  
    .carousel-caption p {
      font-size: 13px;
      margin-top: 11px;
      margin-right: -328px;
    }
  
    .doctt1 {
      display: inline-block;
    }
  
    .chunhat1 {
      display: block;
    }
  
    .chunhatden {
      display: block;
    }
  
    .carousel-caption::before {
  
      display: none;
    }
  
    .btn-view-more {
      font-size: 14px;
      padding: 8px 16px;
  
    }
  
    /*  */
    /* For example: */
    .header {
      padding: 10px;
    }
  
    .logo {
      max-width: 150px;
    }
  
    .nav-menu {
      display: none;
    }
  
    .mobile-menu-toggle {
      display: block;
    }
  
    .hero-content h1 {
      font-size: 24px;
    }
  
    .feature-item {
      flex-basis: 50%;
    }
  
  
  
  }
  
  /*  */
  /* code thanh trắng media book your */
  /* Styles for desktop */
  .chunhat1 {
    display: block;
  }
  
  
  /*mục ABOUT COMPANY  */
  /* code css media query chữ about company */
  /* Hiệu ứng di chuyển cho thiết bị di động */
  @media (max-width: 768px) {
  
    /* Tăng kích thước hình ảnh cho thiết bị di động */
    .ceo101 {
      /* width: 30%; Thay đổi kích thước hình ảnh */
      border-radius: 51px;
      width: 103px;
      margin: 0 auto;
      /* Căn giữa hình ảnh */
      transform: translateY(10px);
      /* Di chuyển hình ảnh xuống một chút */
      left: -150px;
    }
  
    .ceo1 {
      font-size: 1.2rem;
      /* Tăng kích thước chữ cho dễ đọc */
      text-align: center;
      /* Căn giữa văn bản */
      margin: 10px 0;
      /* Thêm khoảng cách giữa các phần tử */
      position: relative;
      top: -7px;
      white-space: nowrap;
      right: 148px;
    }
  
    .color1 {
      position: relative;
      top: 108px;
      right: 415px;
      white-space: nowrap;
      font-weight: 700;
      color: #ff9900;
    }
  
    .hot1 {
      position: relative;
      left: -316px;
      top: 66px;
      white-space: nowrap;
    }
  
    .image01 {
      position: absolute;
      left: -6%;
      top: 75%;
      width: 132px;
    }
  
    /* form ô bảng mục media query ONLINE BOOKING */
  
    .form-row {
      flex-direction: column;
      /* Đặt các ô thành cột trên điện thoại */
    }
  
    .form-field {
      margin-bottom: 3px;
    }
  
    /* mục khoảng cách stadard  */
    .select2-container--default .select2-selection--single {
      height: 48px;
      /* Chiều cao cho ô select */
    }
  
    h3 {
      font-size: 24px;
      /* Kích thước tiêu đề */
    }
  
    .sumit1 {
      padding: 10px;
      /* Padding cho nút */
      background-color: #ff9900;
      /* Màu nền nút */
      color: white;
      /* Màu chữ nút */
      border: none;
      border-radius: 5px;
      cursor: pointer;
      /* Con trỏ chuột khi di qua nút */
      width: 100%;
      /* Chiếm toàn bộ chiều rộng nút */
    }
  
  
    /* code css media query why ride ridek */
  
    .company-info0-1 {
      font-size: 16px;
      /* Giảm kích thước chữ cho màn hình nhỏ */
      animation-duration: 4s;
      /* Thay đổi thời gian animation cho màn hình nhỏ */
      margin-left: -41px;
    }
  
    /* hình thanh cam */
  
  
    .hotline {
      position: relative;
      top: 284px;
      right: auto;
      width: 100%;
      height: 86px;
      white-space: normal;
      text-overflow: clip;
      clip-path: none;
      background-image: none;
      padding: 10px;
      box-sizing: border-box;
    }
  
    /*  code css điện thoại icon*/
    .hotline-image {
      float: none;
      position: relative;
      top: 1px;
      left: -165px;
      width: 57px;
      margin: 0 auto;
      display: block;
      margin-bottom: 10px;
      margin-top: -17px;
    }
  
    .hotline-image {
      float: none;
      position: relative;
      top: 1px;
      left: -165px;
      width: 57px;
      margin: 0 auto;
      display: block;
      margin-bottom: 10px;
      margin-top: -17px;
    }
  
    .hotline-text1 {
      font-size: 20px;
      top: 47%;
      left: 48%;
    }
  
    /* Stack columns vertically */
    .row-footer {
      display: flex;
      flex-direction: column;
  
      position: relative;
      right: -51px;
    }
  
    .col-3 {
      /* Adjust column width and layout */
      width: 100%;
      margin-bottom: 20px;
      /* Space between stacked columns */
    }
  
    /* Adjust font size and spacing */
    .opening-label,
    .contact-info1 {
      margin-bottom: 10px;
      /* Space between items */
    }
  
    .contact-info1 {
      /* Ensure text wraps properly */
      white-space: normal;
    }
  
    /* Style adjustments for form elements */
    #emailInput,
    #subscribeBtn {
      width: 80%;
      /* Full width for form elements */
      margin-top: 10px;
      /* Space above the button */
    }
  
    .col-3 .opening-hours {
      display: block;
      /* Hide the .opening-hours section */
    }
  
    .background-image {
      height: 967px;
      /* Adjust height for tablets */
    }
  
    .background-image {
      /* height: 800px; Adjust height for mobile devices */
      background-position: bottom;
    }
  
    .subscribe {
      flex-direction: row;
      /* Xếp theo hàng ngang */
      justify-content: flex-start;
      /* Căn trái các phần tử */
      gap: 10px;
      /* Khoảng cách giữa các phần tử */
      padding: 10px;
      /* Thêm padding xung quanh */
      margin-top: 10px;
    }
  
    .links-label {
      margin-right: 10px;
      /* Khoảng cách giữa nhãn và ô nhập */
      white-space: nowrap;
      /* Ngăn dòng chữ xuống hàng */
      position: relative;
      top: -33px;
      left: -10px;
    }
  
    #emailInput {
      flex: 1;
      /* Chiếm không gian còn lại */
      min-width: 327px;
      /* Chiều rộng tối thiểu */
      position: relative;
      top: -41px;
      left: -13px;
    }
  
    #subscribeBtn {
      margin-left: 10px;
      /* Khoảng cách giữa nút và ô nhập */
      position: relative;
      top: -51px;
      width: 69%;
      margin-left: -29px;
      font-size: 16px;
    }
  
    /* dòng chữ fooer xuống hàng */
    .footer-text {
      display: block;
      /* Đảm bảo chữ xuống hàng */
      margin-top: 15px;
      font-size: 16px;
      margin-right: -17%;
    }
  
    .footer-text::after {
      /* content: "Reserved."; Thay đổi nội dung */
      display: block;
      /* Đảm bảo xuống hàng */
    }
  
    /* dòng emeil */
    .icon-car {
      flex-direction: row;
      justify-content: center;
      margin-top: 680px;
    }
  
    .icon-car img {
      margin: 0 10px;
      /* Khoảng cách giữa các hình ảnh */
      /* max-width: 80%; */
      width: 78px;
      /* Chiều rộng tối đa cho hình ảnh */
    }
  
    /* thanh cắt call us */
    .section-online-thepeople {
      background-size: contain;
      /* Thay đổi kích thước cho phù hợp với màn hình */
      background-position: center;
      /* Căn giữa hình ảnh */
    }
  
    .section-online-thepeople::after {
      width: 100%;
      /* Đặt chiều rộng đầy đủ cho mobile */
      height: auto;
      /* Tự động điều chỉnh chiều cao */
      clip-path: polygon(100% 100%, 0 100%, 100% 0);
    }
  
    .section-online-thepeople::before {
      width: 100%;
      /* Đặt chiều rộng đầy đủ cho mobile */
      left: 0;
      /* Đặt lại vị trí cho mobile */
      top: 0;
      /* Đặt lại vị trí cho mobile */
    }
  
    .title {
      margin-top: 30px;
      /* Giảm khoảng cách trên cho di động */
      transform: translateY(-114px);
      /* Di chuyển lên trên */
      transition: transform 0.3s ease;
      /* Thêm hiệu ứng chuyển động mượt mà */
      margin-left: 121px;
      font-size: 22px;
    }
  
    .white-text {
      text-align: center;
      /* Căn giữa văn bản */
      margin-top: 50px;
      /* Thêm khoảng cách trên nếu cần */
    }
  
    .white-text {
      margin-top: 10px;
      /* Giảm khoảng cách trên cho di động */
      transform: translateY(-116px);
      /* Di chuyển lên trên */
      font-size: 13px;
      transition: transform 0.3s ease;
      /* Hiệu ứng chuyển động mượt mà */
      font-weight: 500;
    }
  
    .icon-text-1,
    .icon-text-001 {
      text-align: center;
      /* Căn giữa nội dung */
      margin-top: -138px;
      margin-left: 117px;
      font-size: 19px;
    }
  
    /* thanh vuông footer */
    .icon-telephone1::before {
      top: 90%;
      /* Điều chỉnh vị trí trên */
      left: 27%;
      /* Căn giữa theo chiều ngang */
      transform: translate(-50%, -50%);
      /* Căn giữa hoàn toàn */
      width: 80px;
      /* Thay đổi kích thước cho di động */
      height: 80px;
      /* Thay đổi kích thước cho di động */
      font-size: 30px;
      /* Giảm kích thước font cho di động */
    }
  
    .banner {
      position: relative;
      /* Để chèn navbar lên ảnh */
    }
  
    .banner-image {
      width: 100%;
      /* Ảnh bìa chiếm toàn bộ chiều rộng */
      height: auto;
      /* Tự động điều chỉnh chiều cao */
    }
  
    /* CSS cho navbar */
    .navbar {
      position: absolute;
      /* Để navbar chèn lên ảnh bìa */
      top: 0;
      /* Ghim navbar ở trên cùng */
      left: 0;
      right: 0;
      z-index: 1000;
      /* Đảm bảo navbar nằm trên cùng */
      background-color: rgba(255, 255, 255, 0.8);
      /* Nền trong suốt cho navbar */
    }
  
    /* nút trên bảng */
    .navbar-toggler {
      float: right;
      margin: -3px;
      width: 99px;
      height: 56px;
      color: #f4f4f4;
    }
  
    .navbar-nav {
      flex-direction: column;
      text-align: center;
    }
  
    .nav-item {
      margin: 5px 0;
    }
  
    .navbar-toggler {
      margin-left: auto;
    }
  
    .navbar-brand {
      display: none;
    }
  
    .hotline-image1 {
      left: 76px;
      /* Đặt lại vị trí sang bên phải */
      top: 3px;
      /* Điều chỉnh vị trí lên hoặc xuống */
      font-size: 40px;
      /* Giảm kích thước biểu tượng cho di động */
    }
  
    .navbar-left {
      display: none;
      /* Ẩn navbar-left khi màn hình nhỏ */
    }
  
    .navbar-right {
      display: none;
      /* Ẩn navbar-right khi màn hình nhỏ */
    }
  
    /* thanh cuộn */
  
    .navbar-nav {
      flex-direction: column;
      /* Xếp dọc các mục menu */
      margin-left: 0;
      /* Không có khoảng cách bên trái */
      /* width: 100%; Đặt chiều rộng 100% cho navbar */
      */
    }
  
    .nav-link {
      text-align: center;
      /* Căn giữa chữ trong liên kết */
      padding: 10px;
      /* Tăng khoảng cách cho dễ nhấn */
    }
  
    /* kích cỡ thanh cuộn */
  
    .navbar {
      width: 70%;
      height: auto;
      padding: 10px;
      /* background-color: white; */
    }
  
    header {
      display: none;
      /* Ẩn header trên điện thoại */
    }
  
    .menu-table {
      border: 1px solid black;
    }
  
    .menu-item {
      border-bottom: 1px solid black;
    }
  
    .nav-link {
      padding: 10px;
      font-size: 0.9rem;
    }
  
  
    .navbar-nav {
      flex-direction: column;
      margin-left: 0;
  
      width: 387px;
      margin-top: 44px;
    }
  
  
    .navbar {
      width: 103%;
      height: auto;
      padding: 10px;
    }
  
    /*code css dấu nhân  */
  
    .navbar-toggler {
      display: block;
    }
  
    .navbar-toggler .navbar-toggler-icon {
      background: none;
    }
  
  
    .bar1 {
      width: 41px;
      transform: rotate(45deg) translate(0, 10px);
    }
  
    .bar2 {
      width: 38px;
      display: block;
  
    }
  
    .bar3 {
      width: 29px;
      position: relative;
      right: -12px;
      transform: rotate(-45deg) translate(4px, -16px);
    }
  
    /* choosee us */
    .form-group1 {
      width: 124%;
      margin-top: 17px;
      margin-left: -40px;
      padding: 110px 50px;
      /* Adjust the value as needed */
      position: relative;
      background-color: #ff9900;
      background-image: repeating-linear-gradient(45deg, #f7a20f 0, #f7a20f 2px, transparent 0, transparent 50%);
      background-size: 10px 10px;
    }
  
  
    /* company */
  
    .section-online-vechungtoi .image-car1 {
      width: 83%;
      /* Cho hình ảnh chiếm toàn bộ chiều rộng container */
      left: -46px;
      /* Đặt lại vị trí hình ảnh ở giữa */
    }
  
    .section-online-vechungtoi .image-car2 {
      width: 85%;
      /* Điều chỉnh cho hình ảnh chiếm hết chiều rộng container */
      left: 109px;
      /* Đặt lại vị trí hình ảnh */
    }
  
    .section-online-vechungtoi .image-container {
      text-align: center;
      /* Căn giữa toàn bộ hình ảnh */
    }
  
    /* joney làm ẩn nút */
  
    .slick-next.slick-arrow {
      position: absolute;
      top: auto;
      bottom: -59px;
      margin-left: -77px;
      right: 20px;
      transform: none;
    }
  
    /* query pre */
  
    .slick-prev.slick-arrow {
      position: absolute;
      top: auto;
      bottom: -59px;
      margin-left: -128px;
      transform: none;
    }
  
    .section-heading06 h4 {
      padding-left: 51px;
      /* Giảm khoảng cách bên trái */
      font-size: 16px;
      /* Giảm kích thước chữ */
      line-height: 14px;
      /* Điều chỉnh line-height */
      top: -64px;
      /* Điều chỉnh vị trí */
      color: #ff9900;
    }
  
    .section-heading06 h4 span,
    .section-heading06 h4 span:before,
    .section-heading06 h4 span::after {
      height: 10px;
      /* Giảm chiều cao cho các span */
    }
  
    .custom-size {
      font-size: 71px;
      /* Thay đổi kích thước chữ cho điện thoại */
      left: -12px;
      /* Đặt lại vị trí */
    }
  
  
    .review-heading {
      font-size: 23px;
      /* Giảm kích thước chữ cho màn hình nhỏ */
      text-align: center;
      /* Căn giữa văn bản trên màn hình nhỏ */
      margin: 0 auto;
      /* Đảm bảo căn giữa nếu có khoảng cách */
      margin-left: -78px;
      color: #000;
    }
  
    .table-1 .slick-dots li.slick-active {
      margin-left: -170px;
      background-color: #ffcc00;
      /* Thay đổi màu nền cho điểm đang hoạt động */
      box-shadow: 0 0 0 2px rgba(255, 204, 0, 0.5);
      /* Giảm độ dày của bóng */
    }
  
    .tintuc {
      font-size: 14px;
      /* Giảm kích thước chữ cho màn hình nhỏ */
      top: -58px;
      /* Điều chỉnh vị trí lên một chút nếu cần */
    }
  
    .tintuc1 {
      margin-top: 33px;
      /* Đặt lại margin-top cho màn hình nhỏ */
    }
  
    .card {
      width: 95%;
      /* Slightly reduce width for tablets */
      max-width: 320px;
      margin-bottom: 25px;
    }
  
    /* code css book you */
    .carousel-caption .btn-view-more {
      font-size: 14px;
      /* Giảm kích thước font cho điện thoại */
      left: 0;
      /* Đặt lại vị trí của nút */
      animation: none;
      /* Tắt animation cho thiết bị di động nếu cần */
      position: relative;
      left: -315px;
    }
  
  
    /* code css book you taxi ride */
  
    .section-online-booking .img-car {
      display: none;
      /* Hiện hình ảnh trên thiết bị di động */
      left: 0;
      /* Đặt lại vị trí nếu cần thiết */
    }
  
  
  }
  
  
  
  /*  */
  /* Ẩn hình ảnh xe ô tô */
  /* ONLINE BOOKING- book you taxi ride */
  /* Default styles for all devices */
  .img-car {
    /* display: block; */
    animation-duration: 3s;
  }
  
  /* Dòng chữ thẻ p ridek taxi */
  @keyframes slideInLeft {
    0% {
      transform: translateX(-100%);
      visibility: visible;
    }
  
    100% {
      transform: translateX(0);
    }
  }
  
  
  
  /* Mặc định ẩn nút  CHỌN MENU TRÊN THANHNAV*/
  .btn-search {
    display: block;
    /* Ẩn nút mặc định */
  }
  
  /* Định nghĩa kiểu cho các card */
  /* nút di chuyển */
  /* Media query for mobile screens */
  @media only screen and (max-width: 600px) {
    .slick-dots {
      padding-left: 0;
      /* Remove existing padding */
      left: 100px;
      /* Adjust this value as needed to move it left */
      margin-top: 10px;
    }
  
    /* Media query for mobile screens */
    .cart-service .slick-prev {
      display: none;
      /* Hide the button */
    }
  
    /* code css làm ẩn get the ridek moblie */
    .overlay-logo1 {
      display: none;
      /* Hide the element */
    }
  
  
    /*code css làm ẩn nút đen  */
    .hinhicon1,
    .hinhicon2 {
      display: none;
      /* Hide the icons on mobile devices */
    }
  
    /* ẩn nút cam ridek joney */
    .cart-service .slick-prev {
      display: none;
      /* Hide the button on mobile devices */
      left: 30px;
    }
  
    /* get the ridek moblie */
    .overlay-image {
      display: none;
      /* Hide the .overlay-image element on mobile devices */
    }
  
    .section-heading090 h4 {
      padding-left: 146px;
      /* Adjust padding to move text left */
      font-size: 16px;
      /* Optionally adjust font size for smaller screens */
      line-height: 14px;
      /* Optionally adjust line height */
      top: -37px;
      /* Adjust top position if needed */
      font-weight: 500;
    }
  
    .section-heading090 h4 span {
      left: 123px;
      /* Adjust position of the span element */
    }
  
    /* dòng chữ footer */
    .description {
      position: relative;
      /* Change to static positioning for better responsiveness */
      top: -150px;
      /* Reset top positioning */
      left: 38px;
      /* Reset left positioning */
      width: 90%;
      /* Adjust width for better fit on small screens */
      margin: 0 auto;
      /* Center the text horizontally */
      text-align: center;
      /* Center text alignment */
      font-size: 16px;
      /* Adjust font size for better readability */
    }
  
    /* dòng logo footer media */
    .logo-image {
      float: none;
      /* Remove float for better responsiveness */
      position: absolute;
      /* Change to static positioning for normal flow */
      width: 250px;
      /* Adjust width for better fit on small screens */
      top: 37px;
      /* Reset top positioning */
      left: 222px;
      /* Reset left positioning */
      display: block;
      /* Make sure it takes up its own line */
      margin: 20px auto;
      /* Center the logo and add margin for spacing */
    }
  
    .links {
      display: none;
      /* Ẩn toàn bộ phần tử này khi chiều rộng màn hình nhỏ hơn 600px */
    }
  
    .address-label-111 {
      white-space: nowrap;
      /* Đảm bảo chữ không tự xuống hàng */
      overflow: hidden;
      /* Ẩn phần chữ vượt quá chiều rộng */
      text-overflow: ellipsis;
      /* Hiển thị dấu "..." nếu chữ vượt quá */
    }
  
    .address-text {
      white-space: nowrap;
      /* Đảm bảo chữ không xuống hàng */
      overflow: hidden;
      /* Ẩn phần chữ vượt quá chiều rộng */
      text-overflow: ellipsis;
      /* Hiển thị dấu "..." nếu chữ vượt quá */
    }
  
  
    .section-heading h4 {
      left: -156px;
      /* Di chuyển qua trái hơn */
      margin-top: 40px;
    }
  
    .about-us {
      left: -41%;
      /* Di chuyển qua trái */
      text-align: center;
      font-size: 26px;
      line-height: 40px;
    }
  
    .pict1 {
      right: 138px;
      text-align: left;
      font-size: 17px;
      line-height: 27px;
      text-align: justify;
    }
  
    body {
      margin: 0;
      padding: 0;
      width: 100%;
      /* height: 100vh; Chiều cao toàn màn hình */
    }
  
    .nutxemthem {
      left: 5%;
      /* Di chuyển nút sang phải một chút */
      width: 60%;
      /* Nút chiếm 90% chiều rộng cho màn hình nhỏ */
    }
  
    .section-heading001 h4 {
      padding-left: 51px;
      /* Giảm padding cho hợp lý */
      left: 87px;
      /* Điều chỉnh vị trí sang trái */
      top: 20px;
      /* Điều chỉnh vị trí cho hợp lý trên điện thoại */
      font-size: 14px;
      /* Giảm kích thước chữ */
    }
  
    .section-heading001 h4 span {
      left: 20px;
      /* Điều chỉnh vị trí span */
    }
  
    .cart-service .slick-next {
      display: none;
      /* Ẩn nút khi màn hình nhỏ hơn hoặc bằng 600px */
    }
  
    .image-row {
      display: flex;
      flex-wrap: wrap;
      /* Allow icons to wrap to the next line */
      justify-content: space-between;
    }
  
    .image-item {
      text-align: center;
    }
  
    .image-item:nth-child(1),
    {
    display: inline-block;
    width: 30%;
    /* Icon 1 and Icon 2 will share the same row */
  }
  
  
  .image-item:nth-child(2) {
    position: relative;
    left: -160px;
  }
  
  .image-item:nth-child(3) {
    width: 30%;
    /* Icon 3 will take full width and move to the next row */
    /* margin-left: 78px; */
    margin-right: 105px;
  
  }
  
  .image-item img {
    display: block;
    margin: 0 auto;
    /* Center the images */
  }
  
  .table-1 {
    right: 23px;
    /* Di chuyển qua phải hơn */
    /* Hoặc bạn có thể dùng transform */
    /* transform: translateX(10px); */
  }
  
  .address-label {
    white-space: nowrap;
    /* Đảm bảo chữ không xuống hàng */
    overflow: hidden;
    /* Ẩn phần chữ vượt quá chiều rộng */
    text-overflow: ellipsis;
    /* Hiển thị dấu "..." nếu chữ vượt quá */
  }
  
  .address-label-111 {
    white-space: nowrap;
    /* Đảm bảo chữ không tự xuống hàng */
    overflow: hidden;
    /* Ẩn phần chữ vượt quá chiều rộng */
    text-overflow: ellipsis;
    /* Hiển thị dấu "..." nếu chữ vượt quá */
  }
  
  .address-text {
    white-space: nowrap;
    /* Đảm bảo chữ không xuống hàng */
    overflow: hidden;
    /* Ẩn phần chữ vượt quá chiều rộng */
    text-overflow: ellipsis;
    /* Hiển thị dấu "..." nếu chữ vượt quá */
  }
  }
  
  /* Media query for extra-small screens */
  @media only screen and (max-width: 480px) {
  
    /* Further adjustments for very small screens */
    .opening-hours,
    .links,
    .subscribe {
      font-size: 12px;
      /* Further reduce font size */
    }
  
    .contact-info1 {
      line-height: 1.4;
      /* Increase line height for readability */
    }
  
    /* Style adjustments for form elements */
    . #emailInput,
    #subscribeBtn {
      width: 30%;
      /* Ensure full width for small screens */
      margin-top: -23px;
      /* Adjust spacing for small screens */
    }
  
    .hotline-text0 {
      font-size: 18px;
      top: 47%;
      left: 18%;
      white-space: normal;
      width: 90%;
    }
  }
  
  
  
  /* code css thanh cắt call us */
  
  /*  */
  /* code css xem trên điện thoại  kích cỡ full*/
  /* CSS cơ bản cho carousel */
  /* Media query cho màn hình điện thoại */
  @media only screen and (max-width: 375px) {
  
    html,
    body {
      width: 375px;
      /* Đặt chiều rộng tối đa */
      overflow-x: hidden;
      /* Ẩn cuộn ngang */
    }
  
    /* Các kiểu khác cho các phần tử */
    .container {
      padding: 10px;
      width: 100%;
      /* Đảm bảo chiều rộng là 100% */
    }
  
    h1 {
      font-size: 24px;
      /* Kích thước chữ cho tiêu đề */
    }
  
    p {
      font-size: 16px;
      /* Kích thước chữ cho đoạn văn */
    }
  
    /* Thêm các kiểu khác nếu cần */
  }
  
  /* code xem trên responsive */
  /*  */
  
  /* Media query cho màn hình với chiều rộng tối đa 425px */
  @media only screen and (max-width: 425px) {
  
    html,
    body {
      width: 100%;
      /* Đảm bảo chiều rộng là 100% */
      overflow-x: hidden;
      /* Ẩn cuộn ngang */
    }
  
    /* Các kiểu khác cho các phần tử */
    .container {
      padding: 10px;
      width: 100%;
      right: 28px;
      position: relative;
    }
  
    h1 {
      font-size: 26px;
      /* Kích thước chữ cho tiêu đề */
    }
  
    p {
      font-size: 18px;
      /* Kích thước chữ cho đoạn văn */
    }
  
    /* Thêm các kiểu khác nếu cần */
  
    /* code css media query new and Insight */
  
    .new-container {
      padding: 10px;
      /* Thay đổi padding cho điện thoại */
      width: 105%;
      /* Thay đổi chiều rộng cho điện thoại */
      left: -5px;
      /* Điều chỉnh vị trí nếu cần */
    }
  
    /*  code làm ẩn hình icon mục logo  muck hình icon call us now*/
  
    .contact-info i {
      display: none;
      /* Ẩn tất cả các biểu tượng */
    }
  
  }
  
  
  /*  */
  /* ẩn thanh bảng thanh cuộn */
  /* ẩn thanh bảng bên phải  call nfor ride */
  /* Ẩn thanh bảng trên màn hình nhỏ hơn 576px */
  @media (max-width: 576px) {
    #offcanvasDarkNavbar {
      display: none;
      /* Ẩn thanh bảng */
    }
  }
  
  /* code chiều ngang dọc thanh cuộn */
  @media (min-width: 992px) {
    .navbar-expand-lg .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
      width: 100px;
      height: 50px;
    }
  }
  
  /*  */
  /* ẩn dòng heft */
  /* Ẩn dòng trên màn hình nhỏ */
  /*  */
  /* cpde css thanh cuộn tranhc chính */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }
  
  nav.menu {
    /* flex: 1; */
  }
  
  .scroll-menu {
    display: flex;
    /* overflow-x: auto; Tạo thanh cuộn ngang nếu cần */
    white-space: nowrap;
    /* Đảm bảo các liên kết nằm trên một dòng */
    padding: 10px 0;
   margin-top: 5%;
  }
  
  .scroll-menu a {
    text-decoration: none;
    color: #333;
    padding: 15px 20px;
    margin-right: 10px;
    font-weight: bold;
    white-space: nowrap;
    transition: background-color 0.3s, color 0.3s;
  }
  
  .scroll-menu a:hover {
    background-color: #ddd;
    border-radius: 5px;
    color: #000;
  }
  
  .logo-0 {
    overflow: auto;
    /* Cho phép thanh cuộn xuất hiện nếu cần */
    max-height: 200px;
    /* Đặt chiều cao tối đa cho phần tử */
    width: 110px;
    /* Chiều rộng của thanh cuộn dọc */
    height: 50px;
    /* Chiều cao của thanh cuộn ngang */
    /* margin-top: 73px; */
    /* position: relative; */
    margin-left: 208%;
    margin-top: 39%;}
  
  .logo h1 {
    margin: 0;
    font-size: 24px;
    color: #333;
  }
  
  main {
    padding-top: -80px;
    /* Đảm bảo nội dung không bị che khuất bởi header */
  }
  
  /* Header ẩn khi cuộn lên và hiện khi cuộn xuống */
  .header-hidden {
    top: -80px;
    /* Ẩn header khi cuộn lên */
  
  }
  /*  */
  /* code css nút search trên thanh cuộn */
  .btn {
    position: relative;
    right: -147px;
  }
  
  
  
  
  
  
  
  /*  */
  /* nút làm ẩn thanh cuộn ngang */
  
  .side-navbar {
    /* position: fixed; */
    top: 0;
    left: 0;
    width: 100%;
    height: 15%;
    z-index: 10;
    color: #fff;
    padding: 10px;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
  }
  
  /* Khi thêm class "show" vào sẽ hiện thanh navbar */
  .side-navbar.show {
    transform: translateY(0);
  }
  
  /*  */
  
  .icon-imgsearch {
    color: black;
    background-color: white;
  }
  
  .icon-imgsearch {
    width: 80px;
    /* Kích thước width của icon */
    height: 50px;
    margin-left: -200%;
    transform: translate(-296%,10px);
    /* margin-left: -475%;
    transform: translate(-429px, 10px); */
  }
  
  /* code css nút 3 ghạch thanh cuộn */
  
  .custom-icon {
    display: inline-block;
    width: 30px;
    height: 2px;
    background-color: black;
    position: relative;
    margin-left: -189%;
    transform: translate(10px, -6px);
    /* top: -60px;
    left: 214px; */
  }
  
  .custom-icon::before,
  .custom-icon::after {
    content: '';
    background-color: black;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
  }
  
  .custom-icon::before {
    top: -8px;
  }
  
  .custom-icon::after {
    top: 8px;
  }
  
  .custom-toggler {
    border: none;
    background-color: transparent;
  }
  
  /*  */
  /* code css tạo bảng */
  .menu-table {
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: white;
    border: 2px solid black;
  }
  
  .menu-item {
    border-bottom: 1px solid black;
  }
  
  .menu-item:last-child {
    border-bottom: none;
  }
  
  .nav-link {
    display: block;
    padding: 15px;
    color: black;
    text-align: center;
    text-decoration: none;
    border: 1px solid black;
    background-color: white;
  }
  
  .nav-link:hover {
    background-color: #f8f9fa;
    color: black;
  
    .navbar-nav .nav-link {
      padding-right: 282px;
      padding-left: 0;
      font-weight: bold;
    }
  
  }
  
  /* Định dạng chung cho biểu tượng hamburger */
  .navbar-toggler-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    /* Kích thước chiều ngang của biểu tượng */
    height: 25px;
    /* Kích thước chiều cao */
    margin-left: 91%;
    margin-top: -50%;
  }
  
  /* Định dạng cho các thanh gạch */
  .bar {
    display: block;
    height: 4px;
    /* Chiều cao của mỗi thanh gạch */
    background-color: #666;
    /* Màu của thanh gạch */
    transition: all 0.3s ease;
  }
  /* code css media nút 3 ghạch dấu nhân */
  .navbar-toggler.collapsed .bar1 {
    transform: rotate(0deg);
    width: 23px;
  }
  
  .navbar-toggler.collapsed .bar2 {
    opacity: 1;
  }
  
  .navbar-toggler.collapsed .bar3 {
    transform: rotate(0deg);
  }
  
  .navbar-toggler:not(.collapsed) .bar1 {
    transform: rotate(45deg) translate(0px, 14px);
    position: relative;
    right: -21px;
    width: 45px;
  }
  
  .navbar-toggler:not(.collapsed) .bar2 {
    display: none;
  }
  
  .navbar-toggler:not(.collapsed) .bar3 {
    transform: rotate(-45deg) translate(-11px, -29px);
    position: relative;
    left: 38px;
    width: 47px;
  }
  
  /* Ẩn nút trên màn hình lớn */
  @media (min-width: 769px) {
    .navbar-toggler {
      display: block;
    }
  }
  
  /*  */
  /* code chữ màu about our company */
  
  /* code css kích cỡ bảng xem media */
  @media (max-width: 767px) {
  
    /* Đặt .collapse không hiển thị mặc định */
    .collapse {
      display: none;
      height: 300px;
      /* Điều chỉnh chiều cao tự động */
    }
  }
  
  .show {
    display: block;
  }
  
  /* code css media query mục ABOUT COMPANY hình ảnh */
  /* Media query cho màn hình nhỏ hơn 768px (máy tính bảng và điện thoại) */
  /*  */
  
  
  /*  */
  /* Media query cho kích thước điện thoại */
  @media (max-width: 412px) {
    .nutxemthem {
      padding: 16px;
      /* Thay đổi padding cho điện thoại */
      left: 0;
      /* Đặt lại vị trí */
      top: 0;
      /* Đặt lại vị trí */
      width: 43%;
      /* Nút chiếm toàn bộ chiều rộng */
      clip-path: polygon(0 0, 100% 0, calc(100% - 10px) 100%, 0% 100%);
    }
  }
  
  /* màu chữ footer địa chỉ, mở cửa */
  /* For tablets and smaller screens (768px and below) */
  
  /* For mobile devices (576px and below) */
  @media (max-width: 576px) {
    .card {
      width: 100%;
      /* Adjust width for mobile */
      max-width: 378px;
      margin-bottom: 20px;
    }
  }
  
  /* For very small mobile screens (360px and below) */
  @media (max-width: 360px) {
    .card {
      width: 85%;
      /* Further reduce width for small devices */
      max-width: 240px;
      margin-bottom: 15px;
    }
  }
  /* code css nút làm ẩn hiện thị nút contact */
  /* Ẩn phần tử trên màn hình lớn hơn 768px */
  @media (min-width: 768px) {
    .nav-link {
        display: none; /* Ẩn phần tử */
    }
  }
  
  /* Hiển thị phần tử trên màn hình nhỏ hơn hoặc bằng 768px */
  @media (max-width: 768px) {
    .nav-link {
        display: block; /* Hiển thị phần tử */
        margin-top: -11px;
    }
  
  
    .table-1 .slick-dots {
      display: flex
  ;
      margin-top: 35px;
      padding-left: 0;
      margin-bottom: 0;
      padding-left: 92px;
      position: relative;
      top: 16px;
  }
  }
  
  
  
  
  /*  */
  
  
  
  
  
  
  /* thanh nav màu cam */
  /* Ẩn dropdown menu mặc định */
  .dropdown-menu {
    display: none;
    position: absolute;
    background-color: #fff; /* Màu nền của bảng */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-top: 5px;
    z-index: 1000;
  }
  
  /* Khi trỏ chuột vào .dropdown, hiển thị dropdown-menu */
  .dropdown:hover .dropdown-menu {
    display: block;
  }
  
  /* Định dạng menu chính */
  .menu {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex; /* Hiển thị menu ngang */
  }
  
  .menu > li {
    position: relative; /* Để dropdown-menu có vị trí tuyệt đối so với menu cha */
    margin-right: 15px;
  }
  
  .menu a {
    text-decoration: none;
    padding: 10px 10px;
    display: block;
    color: #333; /* Màu chữ */
  }
  
  .menu a:hover {
    background-color: #ff9900; /* Màu nền khi hover */
    color: white; /* Màu chữ khi hover */
  }
  
  /* Dropdown menu item */
  .dropdown-menu li {
    list-style: none;
  }
  
  .dropdown-menu a {
    color: #333;
    padding: 8px 12px;
    display: block;
  }
  
  .dropdown-menu a:hover {
    background-color: #e9ecef;
    color: #000;
  }
  
  /*mục tin tức  */
  
  .centered-text1 {
    text-align: center;
    padding-bottom: 132px;
    /* margin-top: 157px; */
    position: relative;
    top: 118px;
  }
  
  
  
  
  
  
  
  /*code css thanh cuộn  */
  
  
  
  /* Kiểu chung cho mục dropdown */
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  /* Nút dropdown */
  .dropdown-toggle {
    padding: 10px 15px;
    color: #333;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.3s;
  }
  
  /* Mặc định ẩn submenu */
  .dropdown-content {
    display: none;
    position: absolute;
    top: 72px;
    left: 0;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
    border-radius: 5px;
    min-width: 150px;
    z-index: 1;
  }
  
  /* Mục con trong submenu */
  .dropdown-content a {
    display: block;
    padding: 10px 15px;
    color: #333;
    text-decoration: none;
    white-space: nowrap;
    transition: background 0.3s, color 0.3s;
  }
  
  .dropdown-content a:hover {
    background-color: #f0f0f0;
    color: #000;
  }
  
  /* Hiển thị submenu khi hover vào mục cha */
  .dropdown:hover .dropdown-content {
    display: block;
  }
  
  /* Hiệu ứng khi hover vào nút dropdown */
  .dropdown-toggle:hover {
    color: #007bff;
  }
  
  
  
  
  
  /*  */
  
  
  
  
  
  
  
  
  
  
  
  
  .header {
    position: fixed;
    top: 0;
    left: 0;
    /* width: 100%; */
    background-color: white;
    transition: top 0.3s ease-in-out, opacity 0.3s ease-in-out;
    z-index: 999;
    opacity: 0;
  }
  .header{
    top: -100px;
    opacity: 1;
  }
  
  
  
  
  
  
  /* Khi header bị ẩn */
  .header.hidden {
    top: -100px; /* Đẩy header lên khỏi màn hình */
    opacity: 0; /* Đặt độ trong suốt thành 0 (ẩn) */
  }
   
   #nav-scroll {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: white;
    transition: top 0.3s ease-in-out;
    z-index: 1;
    margin-top: 0;
  }   
  
  .show {
    top: 0; 
  } 
  