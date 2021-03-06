import graphql_jwt
import graphene

from mainapp import schema as mainappSchema


class Query(mainappSchema.Query, graphene.ObjectType):
    hello = graphene.String(default_value="Hi!")


class Mutation(mainappSchema.Mutation,  graphene.ObjectType):
    token_auth = graphql_jwt.ObtainJSONWebToken.Field()
    verify_token = graphql_jwt.Verify.Field()
    refresh_token = graphql_jwt.Refresh.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)
