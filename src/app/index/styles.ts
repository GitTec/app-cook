import { theme } from "@//theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
   container: {
      flex: 1,  //ocupou toda a tela
      padding: 24,

   },
   title: {
      fontSize: theme.fonts.size.heading.xl,
      fontFamily: theme.fonts.family.bold,
      lineHeight: 44,
      marginTop: 42
   },
   subtitle: {
      fontFamily: theme.fonts.family.regular
   },
   message: {
      fontSize: theme.fonts.size.body.md,
      fontFamily: theme.fonts.family.regular,
      marginTop: 12,
      marginBottom: 38,
      color: theme.colors.gray_400
   }
})