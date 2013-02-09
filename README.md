django-realtime-validation
==========================

Django client-side realtime form field validation using JavaScript.

This **does not use AJAX** or any other server communcation to validate the form fields, so there are no extra requests being made to the server.

Usage
-----

*settings.py*

    INSTALLED_APPS = (
        ...
        'realtime_validation',
    )


*forms.py*

    from realtime_validation.forms import RealtimeValidatingModelForm
  
    PersonForm(RealtimeValidatingModelForm):
        class Meta:
            model = Person


*template.html*

    ...
    <script src="{{ STATIC_URL }}/js/realtime_validation.js"></script>
    <link href="{{ STATIC_URL }}/css/realtime_validation.css" rel="stylesheet">
    ...
    

**Thats it!** As you type into the fields they will turn red when invalid characters are typed.

Todo
----

* Only ModelForms are currently supported -- need to add code for regular forms
* Only 3 types of reatlime validation are currently supported - IntegerFields, FloatFields, and *required* fields
* Plans to support custom validator functions
* May add descriptive error messages in realtime
