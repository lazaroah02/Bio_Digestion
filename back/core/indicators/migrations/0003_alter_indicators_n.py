# Generated by Django 3.2.20 on 2024-04-06 22:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('indicators', '0002_auto_20240316_1144'),
    ]

    operations = [
        migrations.AlterField(
            model_name='indicators',
            name='n',
            field=models.IntegerField(blank=True, default=30, null=True),
        ),
    ]