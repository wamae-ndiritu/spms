# Generated by Django 5.0.3 on 2024-06-07 08:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0015_alter_teaching_unique_together'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='teaching',
            unique_together={('course', 'semester')},
        ),
    ]
