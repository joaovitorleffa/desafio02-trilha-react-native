import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: ${RFValue(90)}px;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 18px;
`;

export const LoginData = styled.View``;

export const Password = styled.Text`
  font-size: ${RFValue(26)}px;
  font-family: "Poppins_500Medium";
  color: ${({ theme }) => theme.colors.secondary};

  margin: 0 auto;
`;

export const Title = styled.Text`
  margin-bottom: ${RFValue(4)}px;
  font-family: "Poppins_500Medium";
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary}; ;
`;

export const Email = styled.Text`
  font-family: "Poppins_500Medium";
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ShowPasswordButton = styled.TouchableOpacity``;

export const Icon = styled(Feather).attrs((props) => ({
  size: 24,
  color: props.theme.colors.primary,
}))``;
