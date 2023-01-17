from rest_framework import serializers
from .models import *



class VideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Video
        fields = ('id', 'title', 'description', 'uploader', 'download_path')
  