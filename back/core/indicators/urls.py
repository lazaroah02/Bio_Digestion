from rest_framework.routers import SimpleRouter
from indicators.views import Indicators

router = SimpleRouter()
router.register("management", Indicators, basename = "indictors")

urlpatterns = router.urls
