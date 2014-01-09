$(document).ready(function() {
    /* ========== FEEDBACK FORM ========== */

    // $("#feedback-form").submit(function() {
    //     var str = $(this).serialize();
    //     $.ajax({
    //         type: "POST",
    //         url: "http",
    //         data: str,
    //         success: function(response) {
    //             if(response == 'PRINYAL') {
    //                 result = '<div class="alert alert-success">Thank you! We will answer you soon!</div>'; // Success message
    //                 setTimeout("location.reload(true);",5000);
    //             } else {
    //                 result = response;
    //             }
    //             $('#feedback_messages').html(result);
    //         }
    //     });
    //     return false;
    // });

    //Feedback form validate
    $('#feedback-form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').removeClass('success').addClass('error');
        },
        success: function(element) {
            element
                .addClass('valid')
                .closest('.form-group').removeClass('error').addClass('success');
        }
    });

});