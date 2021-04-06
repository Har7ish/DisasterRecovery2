# Generated by Django 3.1.7 on 2021-04-05 13:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backenddb', '0007_auto_20210404_2256'),
    ]

    operations = [
        migrations.AlterField(
            model_name='timecard',
            name='total_amount',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='timecard',
            name='total_hours',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]