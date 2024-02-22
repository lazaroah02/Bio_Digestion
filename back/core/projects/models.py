from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

class Project(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add = True)
    
    class Meta:
        ordering = ('-id',)
        
    def __str__(self):
        return self.name    