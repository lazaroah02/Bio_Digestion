from django.db import models
from projects.models import Project
from django.db import models
from django.dispatch import receiver
from django.db.models.signals import post_save 


# Create your models here.
class Indicators(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    #Valor Actual Neto (VAN)
    VAN = models.FloatField(blank=True, null=True)
    #Tasa Interna de Retorno (TIR)
    TIR = models.FloatField(blank=True, null=True)
    #Tiempo de Recuperación de la Inversión (TRI)
    TRI = models.FloatField(blank=True, null=True)
    #Costo Nivelado de la Electricidad (LEC)
    LEC = models.FloatField(blank=True, null=True)
    #Potencial de Biometano Generado (BPM)
    BPM = models.FloatField(blank=True, null=True)
    #Eficiencia del proceso (n)
    n = models.IntegerField(blank=True, null=True, default=30)
    
    Z = models.FloatField(blank=True, null=True)

    def __str__(self):
        return f"Indicadores del proyecto {self.project.name}"    

@receiver(post_save, sender=Project)
def create_project_indicators(sender, instance, created, **kwargs):
    if created:
        Indicators.objects.create(project=instance, n = 30)    