# Generated by Django 3.1.7 on 2021-04-05 02:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backenddb', '0006_auto_20210404_1454'),
    ]

    operations = [
        migrations.AlterField(
            model_name='timecard',
            name='total_hours',
            field=models.IntegerField(blank=True, default=None, null=True),
        ),
    ]