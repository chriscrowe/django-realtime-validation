from django import template
from django.conf import settings
from django.core.files.storage import get_storage_class

staticfiles_storage = get_storage_class(settings.STATICFILES_STORAGE)()
register = template.Library()

@register.simple_tag
def realtime_validation_import():
    js_url = staticfiles_storage.url('js/realtime_validator.js')
    css_url = staticfiles_storage.url('css/realtime_validator.css')
    ret_val = '<script src="%s" type="text/javascript" ></script>' % js_url
    ret_val += '<link href="%s" rel="stylesheet">' % css_url
    return ret_val