from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/',
         auth_views.LoginView.as_view(template_name="Login.html"), name='login'),
    path("", include('auth0login.urls')),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    path('home/', include('todo.urls')),

]

# urlpatterns += [

#     re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
# ]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
