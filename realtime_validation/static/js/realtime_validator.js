$(document).ready(function(){

//    var char_field_validator = function(input_val){
//        return false;
//    };

    var required_field_validator = function(input_val){
        return !!(input_val);
    };

    var integer_field_validator = function(input_val){
        var re = /^-?\d+$/g;
        return input_val == "" || !!(input_val.match(re));
    };

    var float_field_validator = function(input_val){
        var re = /^-?(?:\d+|\d*\.\d+)$/g;
        return input_val == "" || !!(input_val.match(re));
    };

    var date_field_validator = function(input_val){
        return false;
    };

    var datetime_field_validator = function(input_val){
        return false;
    };

    var validator_mappings = {
        'required': required_field_validator,
        'integer_field': integer_field_validator,
        'float_field': float_field_validator,
        'date_field': date_field_validator,
        'date_time_field': datetime_field_validator
    };

    var validate_input_value = function(event){
        var input = $(event.target);
        var validators = input.data('validators').split(" ");
        var valid = true;
        $.each(validators, function(idx, validator){
            if(validator in validator_mappings){
                var validator_fn = validator_mappings[validator];
                valid = valid && validator_fn(input.val());
            }
        });
        if(!valid)
            input.addClass('invalid-value');
        else
            input.removeClass('invalid-value');
    };

    $('input[data-validators]').focusout(validate_input_value);
});
