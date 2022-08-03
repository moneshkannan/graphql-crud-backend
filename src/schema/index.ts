import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { get_all_users } from "./queries/User";
import { create_user } from "./mutations/User";
const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        getAllUsers: get_all_users
    }
})
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: create_user
    }
})
export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})