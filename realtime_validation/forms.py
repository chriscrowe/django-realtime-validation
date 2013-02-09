from django import forms
from realtime_validation.utils import camelcase_to_underscore

#class RealtimeValidatingForm(forms.Form):
#    def __init__(self, *args, **kwargs):
#        super(RealtimeValidatingForm, self).__init__(*args, **kwargs)

class RealtimeValidatingModelForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(RealtimeValidatingModelForm, self).__init__(*args, **kwargs)
        for field_name, field in self.fields.iteritems():
            field.widget.attrs['data-validators'] = camelcase_to_underscore(field.__class__.__name__)
            if field.required:
                field.widget.attrs['data-validators'] += ' required'