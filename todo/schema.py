import graphene
from graphene_django import DjangoObjectType
from .models import Todo
from django.contrib.auth import get_user_model
from graphql_jwt.decorators import login_required


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class Query(graphene.ObjectType):
    todos = graphene.List(TodoType)

    def resolve_todos(root, indo):
        return Todo.objects.all()


class AddTodo(graphene.Mutation):
    todo = graphene.Field(TodoType)

    class Arguments:
        title = graphene.String()

    @login_required
    def mutate(root, info, title):
        user = info.context.user
        todo = Todo(user=user, title=title)
        todo.save()
        return AddTodo(todo=todo)


class Mutation(graphene.ObjectType):
    add_todo = AddTodo.Field()
