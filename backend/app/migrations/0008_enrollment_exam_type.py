# Generated by Django 5.0.3 on 2024-04-13 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0007_alter_enrollment_result_permission_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='enrollment',
            name='exam_type',
            field=models.CharField(choices=[('supplementary', 'Supplementary'), ('first attempt', 'First Attempt')], default='first attempt', max_length=100),
        ),
    ]
