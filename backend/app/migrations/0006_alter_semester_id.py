# Generated by Django 5.0.3 on 2024-04-13 12:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_alter_semester_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='semester',
            name='id',
            field=models.CharField(blank=True, default='', max_length=50, primary_key=True, serialize=False, unique=True),
        ),
    ]
