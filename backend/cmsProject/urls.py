from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from candidates.views import CandidateViewSet

router = routers.DefaultRouter()
router.register(r'candidates', CandidateViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
