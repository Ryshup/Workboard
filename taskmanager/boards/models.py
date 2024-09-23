from django.db import models
from django.contrib.auth.models import User

class WorkBoard(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE)

class Task(models.Model):
    STATUS_CHOICES = (
        ('ToDo', 'ToDo'),
        ('In Progress', 'In Progress'),
        ('Completed', 'Completed')
    )
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=15, choices=STATUS_CHOICES, default='ToDo')
    workboard = models.ForeignKey(WorkBoard, on_delete=models.CASCADE, related_name='tasks')
    assigned_user = models.ForeignKey(User, null=True, blank=True, on_delete=models.SET_NULL)
