import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { style } from "./styles";

export default function User() {
  const navigation = useNavigation<NavigationProp<any>>();

  // Gera a data atual formatada (dd/mm/aaaa)
  const dataAtual = new Date();
  const dia = String(dataAtual.getDate()).padStart(2, "0");
  const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
  const ano = dataAtual.getFullYear();
  const dataFormatada = `${dia}/${mes}/${ano}`;

  const handleLogout = () => {
    Alert.alert("Saiu", "Você saiu da conta!");
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  return (
    <View style={style.container}>

      <View style={style.header}>
        <Image
          source={{
            uri: "https://tse1.mm.bing.net/th/id/OIP.KGnjDRwz8j15ZBikzmqPNAAAAA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
          }}
          style={style.avatar}
        />
        <Text style={style.username}>Matheus</Text>
        <Text style={style.email}>mat@gmail.com</Text>
      </View>

     
      <View style={style.infoBox}>
        <Text style={style.infoTitle}>Informações da Conta</Text>

        <View style={style.infoRow}>
          <Text style={style.infoLabel}>Plano:</Text>
          <Text style={style.infoValue}>Gratuito</Text>
        </View>

        <View style={style.infoRow}>
          <Text style={style.infoLabel}>Entrou em:</Text>
          <Text style={style.infoValue}>{dataFormatada}</Text>
        </View>
      </View>

      <TouchableOpacity style={style.logoutButton} onPress={handleLogout}>
        <Ionicons name="exit-outline" size={22} color="#FFF" />
        <Text style={style.logoutText}>Sair da conta</Text>
      </TouchableOpacity>
    </View>
  );
}
