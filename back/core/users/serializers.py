from django.forms import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import MinimumLengthValidator, UserAttributeSimilarityValidator, CommonPasswordValidator, NumericPasswordValidator

User = get_user_model()

class UserManagmentSerializer(serializers.ModelSerializer):
    username = serializers.SlugField(validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField(write_only = True)
    is_active = serializers.BooleanField(initial = True)
    last_login = serializers.DateTimeField(read_only = True)
    date_joined = serializers.DateTimeField(read_only = True)
    
    class Meta:
        model = User
        fields = ['id','username','email', "first_name", "last_name", "password", 'is_staff', 'is_active', 'last_login', 'date_joined']
    
    def get_fields(self):
        fields = super().get_fields()
        request = self.context.get('request')
        if request and request.method == 'PUT':
            # Hide password in update
            fields.pop('password')
        return fields
    
    def create(self, validated_data):
            #create the password hash
            validated_data["password"] = make_password(validated_data["password"])
            return super().create(validated_data)    

    
    def validate(self, data):
        request = self.context.get('request')
        try:
            #validate password if is post
            if request.method == "POST":
                # Extrae el password de data
                password = data["password"]
                # Valida el password con los validadores de Django
                validate_password(password)
                # Si no hay errores, devuelve data sin modificar
            return data
        except ValidationError as e:
            # Si hay errores, lanza una excepción con el mensaje
            raise serializers.ValidationError({"password": e.messages})

def validate_password(password):
    MinimumLengthValidator().validate(password = password)
    UserAttributeSimilarityValidator().validate(password = password)
    CommonPasswordValidator().validate(password = password)
    NumericPasswordValidator().validate(password = password)    
    return password

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "first_name", "last_name", "is_staff", "is_active"]