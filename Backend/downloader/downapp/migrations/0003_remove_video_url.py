# Generated by Django 4.1.4 on 2022-12-30 18:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('downapp', '0002_remove_video_duration'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='video',
            name='url',
        ),
    ]
