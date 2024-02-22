from django.forms import ValidationError
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from django.contrib.auth.password_validation import MinimumLengthValidator, UserAttributeSimilarityValidator, CommonPasswordValidator, NumericPasswordValidator

User = get_user_model()

class UserManagmentSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required = True)
    password = serializers.CharField(write_only = True)
    is_active = serializers.BooleanField(initial = True)
    class Meta:
        model = User
        fields = ['id','username','email', "password", 'is_staff', 'is_active']
    
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
