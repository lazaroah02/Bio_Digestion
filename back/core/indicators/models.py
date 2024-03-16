from django.db import models
from projects.models import Project

# Create your models here.
class Indicators(models.Model):
    project = models.OneToOneField(Project, on_delete=models.CASCADE)
    #Valor Actual Neto (VAN)
    VAN = models.FloatField()
    #Tasa Interna de Retorno (TIR)
    TIR = models.FloatField()
    #Tiempo de Recuperación de la Inversión (TRI)
    TRI = models.FloatField()
    #Costo Nivelado de la Electricidad (LEC)
    LEC = models.FloatField()
    #Potencial de Biometano Generado (BPM)
    BPM = models.FloatField()
    #Eficiencia del proceso (n)
    n = models.IntegerField()

    def __str__(self):
        return f"Indicadores del proyecto {self.project.name}"    
