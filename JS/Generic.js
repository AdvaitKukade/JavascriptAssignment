function convertProfileImage(){
    let image = document.getElementById("profileImg").files[0];

    getimgbase64(image);

    function getimgbase64(image)
    {
        let readImg = new FileReader();
        readImg.readAsDataURL(image);

        readImg.onload = function () {
            let profileUrl = readImg.result;
            sessionStorage.setItem("profileSessionKey",profileUrl);
            document.getElementById("imgId").src = sessionStorage.profileSessionKey;
        };

        readImg.onerror = function (error) {
        };
    }
}