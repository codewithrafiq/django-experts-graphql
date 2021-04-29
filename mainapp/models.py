from django.db import models
from django.db.models.signals import pre_save
from django.contrib.auth import get_user_model
from django.dispatch import receiver
import uuid
from django_countries.fields import CountryField


class Subscription(models.Model):
    name = models.CharField(max_length=100, unique=True)
    trial_period = models.PositiveIntegerField(default=15)
    limits = models.PositiveIntegerField(default=30)
    auto_renewal = models.BooleanField(default=True)


APPLICATION_API_TYPE = [
    ('test', 'test'),
    ('production', 'production')
]


class Application(models.Model):
    name = models.CharField(max_length=200, unique=True)
    api_type = models.CharField(
        max_length=11, choices=APPLICATION_API_TYPE)  # new added
    api_uri = models.URLField(unique=True, blank=True, null=True)
    client_id = models.CharField(
        max_length=50, unique=True, blank=True, null=True)
    secret_key = models.CharField(max_length=36, blank=True, null=True)
    country = CountryField(blank=True, null=True)
    subscription = models.ForeignKey(
        Subscription, on_delete=models.SET_NULL, blank=True, null=True)


@receiver(pre_save, sender=Application)
def application_secret_key(sender, instance, *args, **kwargs):
    if not instance.secret_key:
        instance.secret_key = uuid.uuid4()
    if not instance.api_uri:
        instance.api_uri = f"{instance.name}.our_domain.com/v1/app"


USER_ACCESS_CASCADE = [
    (0, "admin"),
    (1, "developer"),
    (2, "user"),
]


class User_access(models.Model):
    user = models.ForeignKey(get_user_model(), on_delete=models.CASCADE)
    permission = models.IntegerField(
        choices=USER_ACCESS_CASCADE, blank=True, null=True)
    app_id = models.ForeignKey(
        Application, on_delete=models.SET_NULL, blank=True, null=True)


class Application_env_variables(models.Model):
    env_Key = models.CharField(
        unique=True, max_length=100, blank=True, null=True)
    value = models.CharField(max_length=155)
    app_id = models.ForeignKey(
        Application, on_delete=models.SET_NULL, blank=True, null=True)


APPLICATION_DB_TYPE = [
    ('mysql', 'mysql'),
    ('postgre', 'postgre'),
    ('sqlserver', 'sqlserver'),
]


class Application_D_base(models.Model):
    type = models.CharField(
        max_length=9, choices=APPLICATION_DB_TYPE)
    host = models.CharField(unique=True, max_length=200, blank=True, null=True)
    port_number = models.IntegerField()
    dbname = models.CharField(
        max_length=9, choices=APPLICATION_DB_TYPE, blank=True, null=True)
    user_name = models.CharField(
        max_length=150, unique=True, blank=True, null=True)
    password = models.CharField(max_length=100)
    app_id = models.ForeignKey(
        Application, on_delete=models.SET_NULL, blank=True, null=True)


class Application_custom_query(models.Model):
    name = models.CharField(unique=True, max_length=155)
    code = models.TextField()
    frequency = models.IntegerField(default=1)
    interval = models.IntegerField(default=0)
    app_id = models.ForeignKey(
        Application, on_delete=models.SET_NULL, blank=True, null=True)


class Application_custom_mutation(models.Model):
    name = models.CharField(max_length=150, unique=True)
    code = models.TextField()
    frequency = models.IntegerField(default=1)
    interval = models.IntegerField(default=0)
    app_id = models.ForeignKey(
        Application, on_delete=models.SET_NULL, blank=True, null=True)
