   $(document).ready(function(){
     $('#submit').on('click', function(){
       if ($("#download_code").match(/^[a-zA-Z]+$/)) {
         $.ajax({
            type: "POST",
            url: 'http://ec2-54-200-138-60.us-west-2.compute.amazonaws.com:8080/api/downloadcodes/',
            data: {
              code:$("#download_code").val(),
              first_name:$("#first_name").val(),
              last_name:$("#last_name").val(),
              email:$("#email").val()
            },
            success: function(res, resp){
                console.log('Success', resp)
                $('#form_container').html('<h1>Download Code:'+resp+'</h1>')
            },
            error: function(res, resp) {
              console.log('Failure', resp)
            },
            dataType: 'json'
          });
       } else {
         alert("Download code must be Alpha Numeric")
       }

    })
   })
