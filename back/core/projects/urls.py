from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import ProjectsManagment

router = SimpleRouter()
router.register("managment", ProjectsManagment, basename = "projects-managment")


urlpatterns = router.urls
