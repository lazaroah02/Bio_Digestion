from rest_framework.serializers import ModelSerializer, SlugRelatedField
from projects.models import Project
from indicators.models import Indicators

class IndicatorsSerializer(ModelSerializer):
    project = SlugRelatedField(queryset = Project.objects.all(), slug_field="name")
    
    class Meta:
        model = Indicators
        fields = ["id", "project", "VAN", "TIR", "TRI", "LEC", "BPM", "n"]