
from django.shortcuts import render, redirect
from django.views.generic import View
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout as log_out
from urllib.parse import urlencode
from django.conf import settings
from django.http import HttpResponseRedirect
# Create your views here.


def index(request):
    user = request.user
    if user.is_authenticated:
        return redirect("/home/")
    else:
        return render(request, "Login.html")


def logout(request):
    log_out(request)
    return_to = urlencode({"returnTo": request.build_absolute_uri("/")})
    logout_url = "https://{}/v2/logout?client_id={}&{}".format(
        settings.SOCIAL_AUTH_AUTH0_DOMAIN, settings.SOCIAL_AUTH_AUTH0_KEY, return_to,
    )
    return HttpResponseRedirect(logout_url)


class PostListView(View):
    def get(self, request):
        context = {}
        return render(request, "index.html", context)
