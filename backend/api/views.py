from urllib import request
from api.serializers import UsuarioSerializer,VeiculoSerializer
from rest_framework import viewsets

from rest_framework.permissions import IsAuthenticated

from api.models import Usuario,Veiculo




# Create your views here.



class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class VeiculoViewSet(viewsets.ModelViewSet):
    queryset = Veiculo.objects.all()
    serializer_class = VeiculoSerializer
    permission_classes = [IsAuthenticated]

