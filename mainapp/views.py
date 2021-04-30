from django.template import RequestContext
from django.shortcuts import render
from django.shortcuts import redirect
from django.http import HttpRequest, HttpResponseRedirect, HttpResponse
from django.template import RequestContext


def view_404(request, exception=None):
    return redirect('/home/')
