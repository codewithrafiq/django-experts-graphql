from django.urls import path, include
from .views import index, logout


urlpatterns = [
    # path("", index),
    path("logout", logout),
    path("", include("django.contrib.auth.urls")),
    path("", include("social_django.urls")),
]
