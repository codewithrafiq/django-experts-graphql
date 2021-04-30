from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from django.conf.urls import url
from mainapp.views import view_404

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include('auth0login.urls')),
    path("graphql", csrf_exempt(GraphQLView.as_view(graphiql=True))),
    path('home/', include('mainapp.urls')),
    url(r'^$', view_404)
]
handler404 = 'mainapp.views.view_404'


# urlpatterns += [
#     re_path(r'^.*', TemplateView.as_view(template_name='index.html')),
# ]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
