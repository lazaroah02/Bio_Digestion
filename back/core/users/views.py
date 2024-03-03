from django.forms import ValidationError
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.contrib.auth import get_user_model
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.response import Response
from rest_framework import status 
from django.core.exceptions import ObjectDoesNotExist
from .serializers import UserManagmentSerializer
from rest_framework.decorators import action
from django.contrib.auth.hashers import make_password
from .serializers import validate_password

User = get_user_model()

class UserManagment(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated, IsAdminUser]
    serializer_class = UserManagmentSerializer
    queryset = User.objects.all().order_by('-id')  
    filter_backends = [filters.SearchFilter, DjangoFilterBackend, filters.OrderingFilter]
    filterset_fields = ['id', "is_active", "is_staff"] 
    search_fields = ["username", "email"]
    
    def delete(self, request):
        try:
            users_to_delete = request.data["users_to_delete"]
            if users_to_delete == [] or users_to_delete == None:
                return super().delete(request)
            try:
                users = User.objects.filter(id__in=users_to_delete)
                users.delete()
                return Response([], status = status.HTTP_200_OK)
            except ObjectDoesNotExist:
                return Response([], status = status.HTTP_400_BAD_REQUEST)
        except:
            return Response([], status = status.HTTP_400_BAD_REQUEST)

    @action(methods=["PUT"], detail=True)
    def change_password(self, request, pk):
        print("aaa")
        try:
            password = request.data["new_password"]
            try:
                validated_password = validate_password(password)
                has_password = make_password(validated_password)
                user = User.objects.get(id = pk)
                user.password = has_password
                user.save()
                return Response([], status = status.HTTP_200_OK)
            except ValidationError as e:
                # Si hay errores, lanza una excepción con el mensaje
                return Response({"password": e.messages}, status = status.HTTP_400_BAD_REQUEST)
        except:
            return Response({"message":"Password was not provided"}, status = status.HTTP_400_BAD_REQUEST)    