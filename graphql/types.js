import {gql} from 'apollo-server-express';
import { typeEnums } from '../models/enums/types.js';
import { typeProject } from '../models/project/types.js';
import { typeUsers } from '../models/user/types.js';
import { typeAdvance } from '../models/advance/types.js';
import {typeInscription}from '../models/inscription/types.js';
const typeGlobal = gql`

    scalar Date
    
`;
export const types = [typeGlobal,typeEnums,typeProject,typeUsers,typeAdvance,typeInscription];