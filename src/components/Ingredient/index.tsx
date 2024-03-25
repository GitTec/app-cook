import { Image, Pressable, PressableProps, Text } from "react-native";
import { styles } from "./styles";

export type IngredientsProps = {    //Defino as propriedades que o meu Ingredient vai ter
    name: string,
    image: string,
    selected?: boolean
}

export function Ingredient({
    name,
    image,
    selected = false,
    ...rest
}: IngredientsProps & PressableProps) {
    //...rest --> SpreadOperator -- pegue todas as propriedades que não foram explicitas e jogue aqui dentro, pegar o restante das propriedades incluindo as propriedades do botão
    return (
        //Pressable -- Componente de toque
        <Pressable style={[styles.container, selected && styles.selected]} {...rest}>

            <Image source={require("@//assets/apple.png")} style={styles.image} />

            <Text style={styles.title}>Maça</Text>
        </Pressable>
    )
}