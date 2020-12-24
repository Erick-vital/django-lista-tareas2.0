from django.shortcuts import render, redirect
from django.http import JsonResponse
from .forms import TareaForm
from .models import Tareas
import json

# Create your views here.


def index(request):
    tareas = Tareas.objects.all()

    form = TareaForm()
    if request.method == 'POST':
        form = TareaForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')

    contexto = {'form': form, 'tareas': tareas}
    return render(request, 'index.html', contexto)


def borrar(request):
    data = json.load(request)['ids']
    print(data)

    for i in range(0, len(data)):
        Tareas.objects.get(id=data[i]).delete()

    return JsonResponse(data, safe=False)
