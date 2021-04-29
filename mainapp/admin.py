from django.contrib import admin
from .models import (
    Subscription,
    Application,
    User_access,
    Application_env_variables,
    Application_D_base,
    Application_custom_query,
    Application_custom_mutation,
)


admin.site.register([
    Subscription,
    Application,
    User_access,
    Application_env_variables,
    Application_D_base,
    Application_custom_query,
    Application_custom_mutation,
])
