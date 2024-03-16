from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from indicators.models import Indicators
from rest_framework.response import Response
from rest_framework import status
from indicators.serializers import IndicatorsSerializer
from rest_framework import generics, filters, viewsets
from django_filters.rest_framework import DjangoFilterBackend

# Create your views here.

class Indicators(ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Indicators.objects.all()
    serializer_class = IndicatorsSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ["project"] 
    
    def delete(self, request, *args, **kwargs):
        return Response([], status = status.HTTP_401_UNAUTHORIZED) 