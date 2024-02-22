from django.contrib import admin
from .models import Project

class ProjectAdmin(admin.ModelAdmin):
    list_display = ["user", "name", "created_at"]
    list_filter = ("user","created_at")

# Register your models here.
admin.site.register(Project, ProjectAdmin)