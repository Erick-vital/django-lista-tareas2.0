from django.db import models

# Create your models here.


class Tareas(models.Model):
    tarea = models.CharField(max_length=30)

    def __str__(self):
        return self.tarea
