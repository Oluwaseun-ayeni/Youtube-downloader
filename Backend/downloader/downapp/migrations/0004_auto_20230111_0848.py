# Generated by Django 4.1.4 on 2023-01-11 07:48

from django.db import migrations



def add_default_description(apps, schema_editor):
    Video = apps.get_model('downapp', 'Video')
    for video in Video.objects.all():
        video.description = ''
        video.save()


class Migration(migrations.Migration):

    dependencies = [
        ('downapp', '0003_remove_video_url'),
    ]

    operations = [
        migrations.RunPython(add_default_description),
    ]