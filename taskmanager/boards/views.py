from rest_framework import viewsets
from .models import WorkBoard, Task
from .serializers import WorkBoardSerializer, TaskSerializer

class WorkBoardViewSet(viewsets.ModelViewSet):
    queryset = WorkBoard.objects.all()
    serializer_class = WorkBoardSerializer

class TaskViewSet(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
