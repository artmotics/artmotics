import { resolversProjects } from "../models/project/resolvers.js";
import { resolversUsers } from "../models/user/resolvers.js";
import { resolversAdvances } from "../models/advance/resolvers.js";
import {resolversInscriptions} from "../models/inscription/resolvers.js"


export const resolvers = [resolversProjects,resolversUsers,resolversAdvances,resolversInscriptions];