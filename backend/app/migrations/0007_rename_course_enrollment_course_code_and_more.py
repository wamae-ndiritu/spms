# Generated by Django 5.0.3 on 2024-04-13 11:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_alter_semester_is_current_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='enrollment',
            old_name='course',
            new_name='course_code',
        ),
        migrations.RenameField(
            model_name='resultpermission',
            old_name='course',
            new_name='course_code',
        ),
        migrations.RemoveField(
            model_name='course',
            name='id',
        ),
        migrations.AlterField(
            model_name='course',
            name='course_code',
            field=models.CharField(max_length=30, primary_key=True, serialize=False, unique=True),
        ),
        migrations.AlterField(
            model_name='enrollment',
            name='course_code',
            field=models.ForeignKey(
                to='app.Course', on_delete=models.SET_NULL),
        ),
        migrations.AlterField(
            model_name='resultpermission',
            name='course_code',
            field=models.ForeignKey(
                to='app.Course', on_delete=models.SET_NULL),
        ),
    ]
