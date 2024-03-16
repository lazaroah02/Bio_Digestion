from rest_framework.viewsets import ModelViewSet
from .serializers import ProjectsManagmentSerializer
from .models import Project
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import action
from indicators.models import Indicators
from indicators.serializers import IndicatorsSerializer

# Create your views here.

class ProjectsManagment(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectsManagmentSerializer
    
    def get_queryset(self):
        return Project.objects.filter(user = self.request.user)
    
    def delete(self, request):
        try:
            projects_to_delete = request.data["projects_to_delete"]
            if projects_to_delete == [] or projects_to_delete == None:
                return super().delete(request)
            try:
                productos = Project.objects.filter(id__in=projects_to_delete)
                productos.delete()
                return Response([], status = status.HTTP_200_OK)
            except ObjectDoesNotExist:
                return Response([], status = status.HTTP_400_BAD_REQUEST)
        except :
            return Response([], status = status.HTTP_400_BAD_REQUEST)
    
    @action(methods=["get"], detail=True)
    def get_project_indicators(self, request, pk):
        try:
            indicators = IndicatorsSerializer(Indicators.objects.get(project = pk))
            return Response(indicators.data, status = status.HTTP_200_OK)
        except ObjectDoesNotExist:
            return Response([], status = status.HTTP_400_BAD_REQUEST)     
        except Exception as e:
            print(e)
            return Response([], status = status.HTTP_500_INTERNAL_SERVER_ERROR)      
    