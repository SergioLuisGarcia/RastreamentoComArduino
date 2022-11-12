from unicodedata import name
from django.urls import path,include
from rest_framework import routers
from api.views import UsuarioViewSet,VeiculoViewSet
routes = routers.DefaultRouter()
routes.register(r'usuarios',UsuarioViewSet)
routes.register(r"veiculos", VeiculoViewSet)


urlpatterns = [
    path("",include(routes.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('auth/', include('djoser.urls.jwt')),
]