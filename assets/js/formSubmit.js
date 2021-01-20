const API_URL = "http://45.118.144.92:8023/api/Support/Create";
async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data)
  });
  return response.json();
}
$(document).ready(function() {
  $("#formSubmit").validate({
    rules: {
      "name": {
        required: true
      },
      "email": {
        required: true,
        email: true
      },
      // "phone": {
      //   required: true,
      //   matches:"[0-9]+",
      //   minlength:10,
      //   maxlength:10
      // },
      phoneNumber: {matches:"[0-9]+",minlength:10, maxlength:10},
      "contents": {
        required: true,
        maxlength: 255
      }
    },
    messages: {
      "name": {
        required: "Bắt buộc nhập Họ tên"
      },
      "email": {
        required: "Bắt buộc nhập email",
        email: "Hãy nhập đúng định dạng"
      },
      // "phone": {
      //   required: "Bắt buộc nhập số điện thoại",
      //   matches: "Hãy nhập đúng định dạng",
      //   minlength: "Hãy nhập đúng định dạng",
      //   maxlength: "Hãy nhập đúng định dạng",
      // },
      phoneNumber: "Nhập sai định dạng",
      "contents": {
        required: "Bắt buộc nhập nội dung",
        maxlength: "Hãy nhập tối đa 255 ký tự"
      }
    },
    submitHandler: function(form) {
      const data = $(form).serializeArray()
      const value = {}
      data.map(dt => {
        value[dt.name] = dt.value 
      })
      postData(API_URL, value)
        .then((res) => {
          if(res && !res.errors) {
            swal( "Thành công!" , "Bạn đã đăng ký thành công!" ,  "success" )
            $('#name').val("");
            $('#email').val("");
            $('#phone').val("");
            $('#contents').val("");
          } else {
            swal( "Thất bại!" ,  res.errors[0].message ,  "error" )
          }
          return false;
        })
        .catch(() => {
          swal( "Thất bại!" ,  "Bạn đã đăng ký thất bại!" ,  "error" )
          return false;
        });
      return false;
    }
  });
});
// const form = document.forms["formSubmit"];
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const data = $(form).serializeArray()
//   const value = {}
//   data.map(dt => {
//     value[dt.name] = dt.value 
//   })
//   postData(API_URL, value)
//     .then((res) => {
//       swal( "Thành công!" , "Bạn đã đăng ký thành công!" ,  "success" )
//       $('#name').val("");
//       $('#email').val("");
//       $('#phone').val("");
//       $('#contents').val("");
//     })
//     .catch(() => {
//       swal( "Thất bại!" ,  "Bạn đã đăng ký thất bại!" ,  "error" )
//     });
// })