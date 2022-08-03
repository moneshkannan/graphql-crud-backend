import { GraphQLList } from "graphql"
import { Users } from "../../entities/Users"
import { UserType } from "../typedefs/User"

export const get_all_users = {
    type: new GraphQLList(UserType),
    resolve(){
        return Users.find()
    }
}