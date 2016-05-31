   $(document).ready(function(){
     $('#submit').on('click', function(){
       if ($("#download_code").val().match(/^[a-zA-Z0-9]+$/)) {
         if ($("#email").val().match(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/)) {


           data = {
             code:$("#download_code").val(),
             first_name:$("#first_name").val(),
             last_name:$("#last_name").val(),
             email:$("#email").val()
           }
           console.log(data)
           window.DATA = data
           $.ajax({
              type: "POST",
              url: 'http://ec2-54-200-138-60.us-west-2.compute.amazonaws.com:8080/api/downloadcodes/',
              // url: 'http://httpbin.org/post',
              data: JSON.stringify(data),
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              complete: function(res, resp){
                  // console.log('Success', res.responseText)
                  $('#form_container').html('<a href="'+res.responseText+'">Download Now</a>')
              }
            });
          } else {
            alert('Email is invalid')
          }
       } else {
         alert("Download code must be Alpha Numeric")
       }

    })
   })
