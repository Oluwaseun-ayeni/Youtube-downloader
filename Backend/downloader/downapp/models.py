from django.db import models

class Video(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(null=True)
    uploader = models.CharField(max_length=255, default='')
    download_path = models.CharField(max_length=255, default='')


    def __str__(self):
        return self.title