from django.urls import path
from .views import DownloadView




urlpatterns = [
    path('download/', DownloadView.as_view(), name='download'),

  
]