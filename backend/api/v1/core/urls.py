"""
"""
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.contrib import admin
from django.urls import path, include
from .views import ApiStatusView

schema_view = get_schema_view(
   openapi.Info(
      title="Acumen Academy Online Education Platform",
      default_version='v1',
      description="Online learning platform underpreviledge communities",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="pagesngod@gmail.com"),
      license=openapi.License(name="MIT License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
   path("admin/", admin.site.urls),
   path('swagger<format>/', schema_view.without_ui(cache_timeout=0), name='schema-json'),
   path('', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'), # :8000/
   path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
   path("api/v1/status/", ApiStatusView.as_view(), name="api-status"),
   path("api/v1/", include("courses.urls")),
]
