# Generated by Django 4.1.4 on 2022-12-30 17:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('downapp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='video',
            name='duration',
        ),
    ]
