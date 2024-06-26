# Generated by Django 5.0.3 on 2024-04-13 12:17

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_customuser_is_superuser'),
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Semester',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year_start', models.IntegerField()),
                ('year_end', models.IntegerField()),
                ('semester_number', models.IntegerField(choices=[(1, 'I'), (2, 'II')], null=True)),
                ('is_current', models.BooleanField(default=False)),
            ],
        ),
        migrations.RemoveField(
            model_name='course',
            name='id',
        ),
        migrations.AddField(
            model_name='course',
            name='level',
            field=models.IntegerField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='course',
            name='semester_number',
            field=models.IntegerField(choices=[(1, 'I'), (2, 'II')], null=True),
        ),
        migrations.AddField(
            model_name='customuser',
            name='groups',
            field=models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups'),
        ),
        migrations.AddField(
            model_name='customuser',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions'),
        ),
        migrations.AlterField(
            model_name='course',
            name='course_code',
            field=models.CharField(max_length=30, primary_key=True, serialize=False, unique=True),
        ),
        migrations.CreateModel(
            name='ResultPermission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('marks_published', models.BooleanField(default=False)),
                ('course', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.course')),
            ],
        ),
        migrations.CreateModel(
            name='Enrollment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('coursework_marks', models.IntegerField(default=0, null=True)),
                ('exam_marks', models.IntegerField(default=0, null=True)),
                ('course_code', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.course')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.student')),
                ('result_permission', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.resultpermission')),
                ('semester', models.OneToOneField(null=True, on_delete=django.db.models.deletion.SET_NULL, to='app.semester')),
            ],
        ),
    ]
