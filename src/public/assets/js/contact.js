function checkInfoRegist() {
    var userNameElement = document.getElementById("user_name");
    var userName = userNameElement.value;

    var userPhoneElement = document.getElementById("user_phone");
    var userPhone = userPhoneElement.value; 

    var userEmailElement = document.getElementById("user_email");
    var userEmail = userEmailElement.value;

    var userAddressElement = document.getElementById("user_address");
    var userAddress = userAddressElement.value;

    var userSelectElement = document.getElementById("user_select");
    var userSelect = userSelectElement.value;

    var productQuantityElement = document.getElementById("product_quatity");
    var productQuantity = productQuantityElement.value;

    var provinceElement = document.getElementById("province");
    var provinceSelected = provinceElement.value;

    var districtElement = document.getElementById("district");
    var districtSelected = districtElement.value;

    var phonePattern = /^[0-9]{10}$/;

    if (!isEmptyForm("form")) {
        if (userName == "")
            showErrorToast("Vui lòng nhập tên của bạn!");

        else if (userPhone == "") 
            showErrorToast("Vui lòng nhập số điện thoại của bạn!");

        else if (!phonePattern.test(userPhone))
            showErrorToast("Vui lòng nhập đúng định dạng số điện thoại.");

        else if (userEmail == "")
            showErrorToast("Vui lòng nhập email của bạn!");

        else if (!userEmailElement.validity.valid)
            showErrorToast("Vui lòng nhập đúng định dạng email.");

        else if (provinceSelected == "")
            showErrorToast("Vui lòng chọn tỉnh/thành phố.");

        else if (districtSelected == "")
            showErrorToast("Vui lòng chọn quận/huyện.");

        else if (userAddress == "")
            showErrorToast("Vui lòng nhập địa chỉ của bạn.");

        else if (userSelect == "")
            showErrorToast("Vui lòng chọn loại sản phẩm.");
        
        else if (productQuantity == "" || productQuantity <= 0)
            showErrorToast("Vui lòng nhập đúng số lượng sản phẩm bạn muốn mua.");

        else {
            return true;
        }
    } else 
        showWarningToast("Vui lòng nhập thông tin bạn nhé!");
    return false;
}
