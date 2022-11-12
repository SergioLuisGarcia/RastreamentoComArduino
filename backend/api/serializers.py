from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import Usuario, Veiculo


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = [
            'usuario',
            'nome',
            'data_nascimento',
            "data_cadastro",
            "ultimo_acesso"
        ]
class VeiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Veiculo
        fields = [
            "id_usuario",
            "placa",
            "modelo",
            "latitude_atual",
            "longitude_atual"
        ]