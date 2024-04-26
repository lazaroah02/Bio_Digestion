from rest_framework.routers import SimpleRouter
from indicators.views import IndicatorsView

router = SimpleRouter()
router.register("management", IndicatorsView, basename = "indictors")

urlpatterns = router.urls
