from rest_framework.serializers import ModelSerializer, SlugRelatedField
from .models import Project
from django.contrib.auth import get_user_model

User = get_user_model()

class ProjectsManagmentSerializer(ModelSerializer):
    user = SlugRelatedField(queryset = User.objects.all(), slug_field="username")
    class Meta:
        model = Project
        fields = ["id", "name", "user"]