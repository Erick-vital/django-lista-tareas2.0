from django.forms import ModelForm
from .models import Tareas


class TareaForm(ModelForm):
    class Meta:
        model = Tareas
        fields = '__all__'
