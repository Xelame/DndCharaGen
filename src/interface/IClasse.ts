import { IArchetype } from "./IArchetype"

export interface IClasse  {
    name : String
    slug : String
    desc : String
    hit_dice : String
    hp_at_1st_level : String
    hp_at_higher_levels : String
    prof_armor : String
    prof_weapons : String
    prof_tools : String
    prof_saving_throws : String
    prof_skills : String
    equipment : String
    table : String
    spellcasting_ability : String
    subtypes_name : String
    archetypes : IArchetype[]
}



