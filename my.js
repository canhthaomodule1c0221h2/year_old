let year = +prompt("nhập vào số tuổi");
if (year <=0) {
    document.write("số tuổi không hợp lệ,")
}
else if (year > 0 && year <15) {
    document.write("bạn chưa đủ tuổi học lớp 10");
}
else {
    document.write("bạn đủ tuổi học lớp 10");
}
