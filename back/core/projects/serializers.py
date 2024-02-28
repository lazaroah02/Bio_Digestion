from rest_framework.serializers import ModelSerializer, SlugRelatedField
from .models import Project
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class ProjectsManagmentSerializer(ModelSerializer):
    user = SlugRelatedField(queryset = User.objects.all(), slug_field="username")
    created_at = serializers.DateTimeField(read_only=True)
    
    class Meta:
        model = Project
        fields = ["id", "name", "user", "created_at"]
    