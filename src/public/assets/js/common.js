// Navigate to contact - Dẫn đến trang contact
function navigateToBuyCollects() {
    window.location.href = '/buy-collects'; 
}

function navigateToLogin() {
    window.location.href = '/dang-nhap'
}

// Go back history - Quay về trang trước đó
function goBack() {
    window.history.back();
}

// Toast function
function toast({
    title = "",
    message = "",
    type = "info",
    duration = 1000,
    delay = 3000,
}) {
    const main = document.getElementById("message");

    if (main) {
        const toast = document.createElement("div");

        // Auto remove toast
        const autoRemoveId = setTimeout(function () {
            main.removeChild(toast);
        }, duration + delay);

        // Remove toast when click
        toast.onclick = function (e) {
            if (e.target.closest(".toast__close")) {
                main.removeChild(toast);
                // clearTimeout - không thực hiện function autoRemoveId
                clearTimeout(autoRemoveId);
            }
        };

        const icons = {
            success: 'fas fa-check-circle',
            info: 'fa-sharp fa-solid fa-circle-info',
            warning: 'fa-sharp fa-solid fa-circle-exclamation',
            error: 'fa-sharp fa-solid fa-circle-xmark'
        };

        const icon = icons[type];
        const timeDelay = (delay / 1000).toFixed(2);
        const timeDuration = (duration / 1000).toFixed(2);
        toast.classList.add("toast", `toast--${type}`);

        /* forwards - stop at the end. */
        toast.style.animation = `slideInLeft ease .5s, fadeOut linear ${timeDuration}s ${timeDelay}s forwards`;

        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <div class="toast__title">${title}</div>
                <div class="toast__mgs">${message}</div>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;

        main.appendChild(toast);
    }
}

function showSuccessToast(title, infoMessage) {
    toast({
        title: title,
        message: infoMessage,
        type: "success",
        duration: 1000,
        delay: 3000,
    });
}

function showWarningToast(infoWarning) {
    toast ({
    title: 'Chú ý',
    message: infoWarning,
    type: 'warning',
    duration: 1000,
    delay: 3000
})
}

function showErrorToast(title, infoError) {
    toast({
        title: title,
        message: infoError,
        type: 'error',
        duration: 1000,
        delay: 3000
    })
}

function isEmptyForm(formElement) {
    var form = document.getElementById(formElement);
    var elements = form.elements;
    var isEmpty = true;

    for (var i = 0; i < elements.length; i++) {
        if (elements[i].type !== "button" && elements[i].value.trim() !== "") {
            isEmpty = false;
            break;
        }
    }
    return isEmpty;
}



// Thực hiện đoạn code bên dưới sau khi DOM đã tải xong
document.addEventListener('DOMContentLoaded', function () {
    let tabID;
    // Script Modal
    const buyBtns = document.querySelectorAll(".buy-btn");
    const modal = document.querySelector(".js-modal");
    const closeModalBtn = document.querySelector(".js-close-button");
    const showInfoProductsElenment = document.getElementById("product-infomation");

    // Hàm hiển thị modal
    function showBuyModal() {
        modal.classList.add("open");
    }

    // Hàm ẩn modal
    function hideBuyModal() {
        modal.classList.remove("open");
    }

    // Nghe hành vi click vào buyBtn của danh sách buyBtns
    for (const buyBtn of buyBtns) {
        buyBtn.addEventListener('click', function(event) {
            showBuyModal(event);
            tabID = getParentId(event); // Lấy ID của phần tử chứa
            let content = getHtmlContentById(tabID);
            showInfoProductsElenment.innerHTML = content;
            var buttonElement = document.querySelector(".modal .modal-container .show-info .products-card__buy button");
            buttonElement.remove();
            addParagraphAfterClass(".modal .modal-container .show-info .products-card__buy", tabID);
        });
    }

    document.getElementById('modal-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form
        
        let productName;
        switch (tabID) {
            case "an-yen":
                productName = 'Nến Thơm An Yên.';
                break;
            case "nhan":
                productName = 'Nến Thơm Nhàn.';
                break;
            case "thien":
                productName = 'Nến Thơm Thiền.';
                break;
            case "hy":
                productName = 'Nến Thơm Hỷ.';
                break;
            case "ngot":
                productName = 'Nến Thơm Ngọt.';
                break;
            case "yeu-thuong":
                productName = 'Nến Thơm Yêu Thương.';
                break;
            case "cam-thao":
                productName = 'Nến Thơm Cam Thảo.';
                break;
            case "ca-phe":
                productName = 'Nến Thơm Cà Phê.';
                break;
            case "que-hoi":
                productName = 'Nến Thơm Quế Hồi.';
                break;
            default:
                break;
        }

        const formData = new FormData(event.target);
        formData.append('tabIdName', tabID);            // Thêm ID sản phẩm vào dữ liệu form
        formData.append('productSelected', productName); // Thêm tên sản phẩm vào dữ liệu form
        
        // Nghe hành vi submit form và gửi dữ liệu qua AJAX
        fetch('/product/send', { 
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.redirect) {
                window.location.href = data.redirect; // Chuyển hướng phía client
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    });

    // Nghe hành vi click vào closeModalBtn
    closeModalBtn.addEventListener('click', hideBuyModal);
});


document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('success') && urlParams.get('success') === 'true') {
        showSuccessToast("Đặt hàng thành công", "Cảm ơn bạn đã đặt hàng, chúng tôi sẽ sớm liên hệ để xác nhận.");
    }
    else if (urlParams.has('signup') && urlParams.get('signup') === 'true') {
        showSuccessToast("Đăng kí thành công!", "Chúc mừng bạn đã đăng kí tài khoản thành công!")
    }
    else if (urlParams.has('signup') && urlParams.get('signup') === 'false') {
        showErrorToast("Tạo tài khoản thất bại", "Vui lòng kiểm tra lại thông tin đăng kí!");
    }
    else if (urlParams.has('login') && urlParams.get('login') === 'true') {
        showSuccessToast("Đăng nhập thành công", "Chào mừng bạn đến với Nến Mộc!")
    }
    else if (urlParams.has('login') && urlParams.get('login') === 'false') {
        showErrorToast("Đăng nhập thất bại", "Tên đăng nhập hoặc mật khẩu không đúng.");
    }
    else if (urlParams.has('contact') && urlParams.get('contact') === 'true') {
        showSuccessToast("Đăng kí thành công", "Chúng tôi sẽ sớm liên hệ với bạn.");
    }  
    else if (urlParams.has('contact') && urlParams.get('contact') === 'false') {
        showErrorToast("Đăng kí thất bại", "Vui lòng thử lại bạn nhé!");
    }  
  });
  // Function lấy phần tử cha là id
function getParentId(event) {
    const btn = event.target;
    const parent = btn.closest('.products-card');
    if (parent) {
        return parent.id;
    } else {
       return null;
    }
}

// Function lấy nội dung của thẻ id
function getHtmlContentById(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const content = element.innerHTML; // Lấy nội dung HTML của thẻ
        return content;
    } else {
        return null;
    }
}

// Thêm một đoạn văn mô tả sản phẩm sau class
function addParagraphAfterClass(selector, tabIdName) {
    const element = document.querySelector(selector);

    // Tạo một thẻ <p> mới
    const newParagraph = document.createElement('p');
    
    switch (tabIdName) {
        case "an-yen":
            newParagraph.textContent = 'Dòng sản phẩm Nến Thơm An Yên.';
            break;
        case "nhan":
            newParagraph.textContent = 'Dòng sản phẩm Nến Thơm Nhàn.';
            break;
        case "thien":
            newParagraph.textContent = 'Dòng sản phẩm Nến Thơm Thiền.';
            break;
        case "hy":
            newParagraph.textContent = 'Dòng sản phẩm Nến Thơm Hỷ.';
            break;
        case "ngot":
            newParagraph.textContent = 'Dòng sản phẩm Nến Thơm Ngọt.';
            break;
        case "yeu-thuong":
            newParagraph.textContent = 'Dòng sản phẩm Nến Thơm Yêu Thương.';
            break;
        case "cam-thao":
            newParagraph.textContent = 'Dòng sản phẩm Nến Thơm Cam Thảo.';
            break;
        case "ca-phe":
            newParagraph.textContent = 'Dòng sản phẩm Nến Thơm Cà Phê.';
            break;
        case "que-hoi":
            newParagraph.textContent = 'Dòng sản phẩm Nến Thơm Quế Hồi.';
            break;
        default:
            break;
    }
    // Thêm thẻ <p> vào bên trong phần tử
    element.appendChild(newParagraph);
}



function checkBeforeBuy(event) {
    event.preventDefault();
    const modal = document.querySelector(".js-modal");
    // Lấy giá trị của các element
    var productQuantityElement = document.getElementById("modal-ip-quatity");
    var productQuantity = productQuantityElement.value;

    var userNameElement = document.getElementById("modal-ip-username");
    var userName = userNameElement.value;

    var userPhoneElement = document.getElementById("modal-ip-userphone");
    var userPhone = userPhoneElement.value; 

    var userAddressElement = document.getElementById("modal-ip-address");
    var userAddress = userAddressElement.value;

    var phonePattern = /^[0-9]{10}$/;

    if (!isEmptyForm("modal-form")) {
        if (productQuantity == "" || productQuantity <= 0)
            showErrorToast("Vui lòng nhập đúng số lượng sản phẩm bạn muốn mua.");

        else if (userName == "")
            showErrorToast("Vui lòng nhập tên của bạn!");

        else if (userPhone == "") 
            showErrorToast("Vui lòng nhập số điện thoại của bạn!");

        else if (!phonePattern.test(userPhone))
            showErrorToast("Vui lòng nhập đúng định dạng số điện thoại.");

        else if (userAddress == "")
            showErrorToast("Vui lòng nhập địa chỉ của bạn.");

        else {
            // showSuccessToast("Đặt hàng thành công!", "Cảm ơn bạn đã tin tưởng và sử dụng sản phẩm của chúng tôi!");
            modal.classList.remove("open");
            return true;
        }
    } else {
        showWarningToast("Vui lòng nhập thông tin bạn nhé!");
    }
    return false;
}   


function checkBeforeSignUp() {
    var userNameSignUpElm = document.getElementById('username')
    var userNameSignUp = userNameSignUpElm.value

    var emailSignUpElm = document.getElementById('email')
    var emailSignUp = emailSignUpElm.value

    var passwordSignUpElm = document.getElementById('password')
    var passwordSignUp = passwordSignUpElm.value

    var confirmPasswordElm = document.getElementById('confirm-password')
    var confirmPassword = confirmPasswordElm.value

    if (!isEmptyForm("signup-form")) {
        if (userNameSignUp == "") 
            showErrorToast("Lỗi", "Vui lòng nhập tên đăng nhập.");
        else if (emailSignUp == "")
            showErrorToast("Lỗi", "Vui lòng nhập email của bạn.");
        else if (!emailSignUpElm.validity.valid)
            showErrorToast("Lỗi", "Vui lòng nhập đúng định dạng email.");
        else if (confirmPassword != passwordSignUp)
            showErrorToast("Lỗi", "Mật khẩu xác nhận không trùng khớp.");
        else
            return true;
    }
    else {
        showWarningToast("Vui lòng nhập thông tin bạn nhé!");
    }
    return false
}


function checkBeforeLogin() {
    var userNameLoginpElm = document.getElementById('username')
    var userNameLogin = userNameLoginpElm.value

    var passwordLoginElm = document.getElementById('password')
    var passwordLogin = passwordLoginElm.value
    
    if (!isEmptyForm("login-form")) {
        if (userNameLogin == "") 
            showErrorToast("Lỗi", "Vui lòng nhập tên đăng nhập.");
        else if (passwordLogin == "")
            showErrorToast("Lỗi", "Vui lòng nhập mật khẩu");
        else
            return true;
    }
    else {
        showWarningToast("Vui lòng nhập thông tin bạn nhé!");
    }
    return false
}

function closeSidebar() {
    document.getElementById('sidebar').classList.add('hidden')
    document.getElementById('sidebar').classList.remove('visible')
}

function openSidebar() {
    document.getElementById('sidebar').classList.add('visible')
    document.getElementById('sidebar').classList.remove('hidden')
}