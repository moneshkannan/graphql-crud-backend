import { GraphQLString } from "graphql";
import { Users } from "../../entities/Users";
import { UserType } from "../typedefs/User";

export const create_user = {
    type: UserType,
    args:{
        name: {type: GraphQLString},
        username: {type: GraphQLString},
        password: {type: GraphQLString},
    },
    async resolve(parent:any, args: any){
        const {name, username, password} = args;
        await Users.insert({name, username, password})
        return args
    }
}