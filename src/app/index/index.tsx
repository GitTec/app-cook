import { View, Text, ScrollView, Alert } from "react-native";
import { router } from "expo-router"

import { services } from "@//services"

import { styles } from "./styles"

import { Ingredient } from "@//components/Ingredient";
import { useState, useEffect } from "react";
import { Selected } from "@//components/Selected";

export default function Index() {
    const [selected, setSelected] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

    function handleToggleSelected(value: string) {    //Função para ficar invertendo se ta selecionado
        if (selected.includes(value)) {  //Verifico se la dentro tem o valor que to querendo selecionar
            return setSelected((state) => state.filter((item) => item !== value))   //Faço um filtro e retorno só o valor dos itens que são diferentes
        }

        setSelected((state) => [...state, value])   //Pego tudo que tem dentro do estado mais o novo valor 
        console.log(selected)
    }

    function handleClearSelected() {
        //1°parametro:titulo, 2°:mensagem, 3°:array com opções
        Alert.alert("Limpar", "Deseja limpar tudo?", [
            { text: "Não", style: "cancel" },
            { text: "Sim", onPress: () => setSelected([]) },
        ])
    }

    function handleSearch() {
        router.navigate("/recipes/")
    }

    useEffect(() => {
        services.ingredients.findAll().then(setIngredients)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>

            <Text style={styles.message}>
                Descubra receitas baseadas nos produtos que você escolheu.
            </Text>

            <ScrollView
                contentContainerStyle={styles.ingredients} showsVerticalScrollIndicator={false}
            >
                {ingredients.map((item) => (
                    <Ingredient
                        key={item.id}
                        name={item.name}
                        image={`${services.storage.imagePath}/${item.image}`}
                        selected={selected.includes(item.id)}
                        onPress={() => handleToggleSelected(item.id)}
                    />
                ))}
            </ScrollView>

            {selected.length > 0 && (   //Se for maior que 0 itens selecionados, mostro a caixinha
                <Selected
                    quantity={selected.length}
                    onClear={handleClearSelected}
                    onSearch={handleSearch}
                />
            )}
        </View>
    )
}