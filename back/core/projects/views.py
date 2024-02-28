from rest_framework.viewsets import ModelViewSet
from .serializers import ProjectsManagmentSerializer
from .models import Project
from rest_framework.permissions import IsAuthenticated

# Create your views here.

class ProjectsManagment(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectsManagmentSerializer
    
    def get_queryset(self):
        return Project.objects.filter(user = self.request.user)
    