
        var monan="bac ha";
        function getFood(value){
            monan=value
        }
        function isNumeric(num){
              return !isNaN(num)
            }
         function send() {  
             console.log(monan)
            var ten= document.getElementById('ten').value;
             var soluong= document.getElementById('soluong').value;
              var email= document.getElementById('email').value;
              if(email==='' || soluong ===' '|| ten===''){
                alert("Thông tin đăng ký chưa đầy đủ");
                return;
              }
              if(isNumeric(soluong)==false){
                 alert("Thông tin Về số lượng chưa đúng định dạng");
                 return;
              }
         var bd="Hi " +ten+" đơn Hàng đã đăng kí thành công. ";
            bd+="Bạn đã đăng kí "+ soluong+" phần "+monan;
        
        Email.send({
               
                SecureToken: "faa2ed61-5c1f-4d72-b605-56d70ba31114",
                From: "nguyentan.org@gmail.com",
                To: email,

                Subject: "Xác nhận đơn hàng: PHIEU ",
                Body: bd
          }).then(function(response){ 
           
           if (response == 'OK') {              
               alert("Tụi tui đã gửi mail xác nhận rồi nha, bạn check lại nhé");
            } else {
                 alert("Vui lòng nhập đúng định dạng email");
            } 
         });
 
    } 