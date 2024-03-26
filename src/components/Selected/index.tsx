import { View, Text } from "react-native"
import Animated, { SlideInDown, BounceOutDown } from "react-native-reanimated"
import { MaterialIcons } from "@expo/vector-icons"

import { theme } from "@//theme"
import { styles } from "./styles"

import { Button } from "../Button"

type Props = {  //Aqui estou tipando as funções
    quantity: number
    onClear: () => void
    onSearch: () => void
}

export function Selected({ quantity, onClear, onSearch }: Props) {

    return (
        <Animated.View
            style={styles.container}
            entering={SlideInDown.duration(500)}
            exiting={BounceOutDown}
        >
            <View style={styles.header}>
                <Text style={styles.label}>{quantity}  Ingredientes selecionados</Text>
                <MaterialIcons
                    name="close"
                    size={24}
                    onPress={onClear}
                    color={theme.colors.gray_400} />
            </View>
            <Button title="Encontrar" onPress={onSearch} />
        </Animated.View>
    )

}

/*Propriedades de entrada e saida no reanimated:
entering={} -- entrada
exiting={}  --  saida
*/