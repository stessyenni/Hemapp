from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('hemapp_backend.authentication.urls')),
    path('api/diet/', include('hemapp_backend.diet.urls')),
    path('api/health/', include('hemapp_backend.health_tracking.urls')),
    path('api/facilities/', include('hemapp_backend.facilities.urls')),
    path('api/chatbot/', include('hemapp_backend.chatbot.urls')),
]
