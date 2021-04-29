import graphene
from graphene_django import DjangoListField, DjangoObjectType
from graphql_jwt.decorators import login_required
from .models import *
from django.contrib.auth import get_user_model


class UserType(DjangoObjectType):
    class Meta:
        model = get_user_model()


class SubscriptionType(DjangoObjectType):
    class Meta:
        model = Subscription


class ApplicationType(DjangoObjectType):
    class Meta:
        model = Application
        convert_choices_to_enum = False


class User_accessType(DjangoObjectType):
    class Meta:
        model = User_access


class Application_env_variablesType(DjangoObjectType):
    class Meta:
        model = Application_env_variables


class Application_D_baseType(DjangoObjectType):
    class Meta:
        model = Application_D_base
        # convert_choices_to_enum = False


class Application_custom_queryType(DjangoObjectType):
    class Meta:
        model = Application_custom_query


class Application_custom_mutationType(DjangoObjectType):
    class Meta:
        model = Application_custom_mutation


class Query(graphene.ObjectType):
    subscriptions = DjangoListField(SubscriptionType)
    applications = DjangoListField(ApplicationType)
    user_access = DjangoListField(User_accessType)
    application_env_variables = DjangoListField(Application_env_variablesType)
    application_d_basees = DjangoListField(Application_D_baseType)
    application_custom_querys = DjangoListField(Application_custom_queryType)
    application_custom_mutations = DjangoListField(
        Application_custom_mutationType)
    user = graphene.Field(UserType)

    def resolve_subscriptions(root, info):
        return Subscription.objects.all()

    def resolve_applications(root, info):
        return Application.objects.all()

    def resolve_user_access(root, info):
        return User_access.objects.all()

    def resolve_application_env_variables(root, info):
        return Application_env_variables.objects.all()

    def resolve_application_D_basees(root, info):
        return Application_D_basees.objects.all()

    def resolve_application_custom_querys(root, info):
        return Application_custom_queryType.objects.all()

    def resolve_application_custom_mutations(root, info):
        return Application_custom_mutation.objects.all()

    @login_required
    def resolve_user(root, info):
        return info.context.user


class Add_Subscription(graphene.Mutation):
    subscription = graphene.Field(SubscriptionType)

    class Arguments:
        name = graphene.String(required=True)

    def mutate(root, info, name):
        subscription = Subscription(name=name)
        subscription.save()
        return AddSubscription(subscription=subscription)


class Add_Application(graphene.Mutation):
    application = graphene.Field(ApplicationType)

    class Arguments:
        name = graphene.String(required=True)
        country = graphene.String(required=True)
        subscriptionid = graphene.Int(required=True)
        api_type = graphene.String(required=True)  # 'test','production'

    def mutate(root, info, name, country, subscriptionid, api_type):
        subscription = Subscription.objects.get(id=subscriptionid)
        application = Application(
            name=name, country=country, subscription=subscription, api_type=api_type)
        application.save()
        return AddApplication(application=application)


class Add_User_Access(graphene.Mutation):
    useraccess = graphene.Field(User_accessType)

    class Arguments:
        # userid = graphene.Int()
        permissionid = graphene.Int(required=True)  # 0 - 2
        appid = graphene.Int(required=True)

    @login_required
    def mutate(root, info, permissionid, appid):
        user = info.context.user
        app = Application.objects.get(id=appid)
        useraccess = User_access(
            user=user, permission=permissionid, app_id=app)
        useraccess.save()
        return AddUserAccess(useraccess=useraccess)


class Add_Application_env_variables(graphene.Mutation):
    application_env_variables = graphene.Field(Application_env_variablesType)

    class Arguments:
        envkey = graphene.String(required=True)
        value = graphene.String(required=True)
        appid = graphene.Int(required=True)

    def mutate(root, info, envkey, value, appid):
        application = Application.objects.get(id=appid)
        application_env_variables = Application_env_variables(
            app_id=application,
            value=value,
            env_Key=envkey
        )
        application_env_variables.save()
        return Add_Application_env_variables(application_env_variables=application_env_variables)


class Add_Application_D_base(graphene.Mutation):
    application_d_base = graphene.Field(Application_D_baseType)

    class Arguments:
        # 'mysql' or 'postgre', or 'sqlserver'
        type = graphene.String(required=True)
        host = graphene.String(required=True)
        port_number = graphene.Int(required=True)
        # 'mysql' or 'postgre', or 'sqlserver'
        dbname = graphene.String(required=True)
        user_name = graphene.String(required=True)
        password = graphene.String(required=True)
        app_id = graphene.Int(required=True)

    def mutate(
            root,
            info,
            type,
            host,
            port_number,
            dbname,
            user_name,
            password,
            app_id):
        application = Application.objects.get(id=app_id)
        application_d_base = Application_D_base(
            app_id=application,
            type=type,
            host=host,
            port_number=port_number,
            dbname=dbname,
            user_name=user_name,
            password=password
        )
        application_d_base.save()
        return Add_Application_D_base(application_d_base=application_d_base)


class Add_Application_custom_query(graphene.Mutation):
    application_custom_query = graphene.Field(Application_custom_queryType)

    class Arguments:
        name = graphene.String(required=True)
        code = graphene.String(required=True)
        frequency = graphene.Int(required=True)
        interval = graphene.Int(required=True)
        app_id = graphene.Int(required=True)

    def mutate(
            root,
            info,
            name,
            code,
            frequency,
            interval,
            app_id):
        application = Application.objects.get(id=app_id)
        application_custom_query = Application_custom_query(
            name=name,
            app_id=application,
            code=code,
            frequency=frequency,
            interval=interval
        )
        application_custom_query.save()
        return Add_Application_custom_query(
            application_custom_query=application_custom_query)


class Add_Application_custom_mutation(graphene.Mutation):
    application_custom_mutation = graphene.Field(
        Application_custom_mutationType)

    class Arguments:
        name = graphene.String(required=True)
        code = graphene.String(required=True)
        frequency = graphene.Int(required=True)
        interval = graphene.Int(required=True)
        app_id = graphene.Int(required=True)

    def mutate(root,
               info,
               name,
               code,
               frequency,
               interval,
               app_id):
        application = Application.objects.get(id=app_id)
        application_custom_mutation = Application_custom_mutation(
            name=name,
            app_id=application,
            code=code,
            frequency=frequency,
            interval=interval
        )
        application_custom_mutation.save()
        return Add_Application_custom_mutation(
            application_custom_mutation=application_custom_mutation)


class Mutation(graphene.ObjectType):
    add_subscription = Add_Subscription.Field()
    add_application = Add_Application.Field()
    add_user_access = Add_User_Access.Field()
    add_application_env_variables = Add_Application_env_variables.Field()
    add_application_d_base = Add_Application_D_base.Field()
    add_application_custom_query = Add_Application_custom_query.Field()
    add_application_custom_mutation = Add_Application_custom_mutation.Field()
