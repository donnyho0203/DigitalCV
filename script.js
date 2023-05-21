//9. Chức năng ẩn thông tin cá nhân
document.addEventListener("DOMContentLoaded", function () {
  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", function () {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;

    // Kiểm tra email có đúng định dạng hay không
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      alert("Email không hợp lệ!");
      return;
    } else {
      // Hiển thị container chứa thông tin cá nhân và ẩn form nhập liệu
      const inputContainer = document.querySelector(".input-container");
      const infoContainer = document.querySelector(".info-container");
      inputContainer.classList.add("hide");
      inputContainer.classList.remove("d-flex");
      infoContainer.classList.remove("hide");
    }
  });
});

//10. Chức năng ẩn chứa thông tin nghề nghiệp
// Lấy tất cả các nút "View" trong trang
const viewButtons = document.querySelectorAll(".view-btn");
const divViewBtns = document.querySelectorAll(".div-view-btn");
const gridDivInside = document.querySelectorAll(".grid-div-inside");

//Bỏ ẩn nút View more khi ở màn hình Mobile
// Thêm sự kiện resize
window.addEventListener("resize", handleResize);

// Thêm sự kiện tải lại trang và gọi hàm handleResize
window.addEventListener("load", handleResize);

function handleResize() {
  if (window.innerWidth <= 768) {
    divViewBtns.forEach(function (btn) {
      btn.classList.remove("hide");
    });
    // Loại bỏ các sự kiện mouseover và mouseout khỏi các phần tử grid-div-inside
    gridDivInside.forEach((div) => {
      div.removeEventListener("mouseover", handleDivMouseOver);
      div.removeEventListener("mouseout", handleDivMouseOut);
    });
    // Thêm sự kiện click vào các nút "View"
    viewButtons.forEach((button) => {
      button.addEventListener("click", handleViewButtonClick);
    });
  } else {
    divViewBtns.forEach(function (btn) {
      btn.classList.add("hide");
      // Thêm sự kiện click vào các nút "View"
      viewButtons.forEach((button) => {
        button.addEventListener("click", handleViewButtonClick);
      });
    });
    // Thêm sự kiện mouseover và mouseout vào các phần tử grid-div-inside
    gridDivInside.forEach((div) => {
      div.addEventListener("mouseover", handleDivMouseOver);
      div.addEventListener("mouseout", handleDivMouseOut);
    });
  }
}

// Xử lý sự kiện khi nút "View" được nhấn
function handleViewButtonClick() {
  const parent = this.closest(".skill");
  const skillInfo = parent.querySelector(".skill-info");

  if (skillInfo.classList.contains("hide")) {
    skillInfo.classList.remove("hide");
    this.textContent = "▲ View Less";
  } else {
    skillInfo.classList.add("hide");
    this.textContent = "▼ View More";
  }
}

// Xử lý sự kiện mouseover cho các phần tử grid-div-inside
function handleDivMouseOver() {
  const btn = this.querySelector(".div-view-btn");
  btn.classList.remove("hide");
}

// Xử lý sự kiện mouseout cho các phần tử grid-div-inside
function handleDivMouseOut() {
  const btn = this.querySelector(".div-view-btn");
  btn.classList.add("hide");
}
