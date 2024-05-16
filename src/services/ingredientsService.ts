import { supabase } from "./supabase"

export async function findAll() {   //Vai listar para mim todos os ingredientes que tem dentro do supabase
    const { data } = await supabase
        .from("ingredients")
        .select()
        .order("name")
        .returns<IngredientResponse[]>()

    return data ?? []
}