from rest_framework.routers import SimpleRouter
from .views import UserManagment

router = SimpleRouter()
router.register("managment", UserManagment, basename="user-managment")

urlpatterns = router.urls
