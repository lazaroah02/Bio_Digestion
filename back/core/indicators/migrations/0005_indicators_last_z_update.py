# Generated by Django 3.2.20 on 2024-04-26 19:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('indicators', '0004_indicators_z'),
    ]

    operations = [
        migrations.AddField(
            model_name='indicators',
            name='last_Z_update',
            field=models.DateTimeField(blank=True, null=True),
        ),
    ]
