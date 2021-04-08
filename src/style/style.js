import styled from 'styled-components/native';
import {
  TouchableOpacity, Dimensions, Picker
} from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import { CORES } from '../utils/cores';

const Container = styled.View`
  background-color: ${CORES.BRANCO};
  margin: 8px 8px;
  margin-top: 16px;
`;
const ContainerPicker = styled.View`
  background-color: ${CORES.BRANCO};
  margin: 24px 24px;
  margin-top: 16px;
`;

const BotaoView = styled.View`
  margin-right: 34px;
  align-items: flex-end;
`;

const ScrollView = styled.ScrollView`
  background-color: ${CORES.BRANCO};
`;

const TextInputView = styled.View`
  /* background-color: ${CORES.VERDE}; */
  margin-left: 16px;
  margin-right: 16px;
`;

const TextInputPaper = styled(TextInput)`
  background-color: ${CORES.BRANCO};
  padding-left: 32px;
  padding-right: 32px;
  margin-top: 24px;
`;

const ViewLogo = styled.View`
  flex-direction: column;
  margin-bottom: ${(props) => (props.maginBottom ? props.marginBottom : '10px')};
  margin-top: ${(props) => (props.maginTop ? props.marginTop : '0px')};
`;

const ConteudoLogo = styled.View`
  flex-direction: row;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  justify-content: ${(props) => (props.centralizado ? 'center' : 'space-around')};
`;

const LinhaHorizontal = styled.View`
  border-bottom-color: #BDBDBD;
  border-bottom-width: 1px;
  margin-top: 2px;
`;

const CentralizarItensView = styled.View`
  justify-content: center;
  width: 100%;
`;

const SvgView = styled.View`
  margin-top: 80px;
  margin-bottom: 70px;
`;

const Lista = styled.View`
  margin-top: 24px;
`;

const CardSemConteudo = styled(Card)`
  margin: 16px;
  padding: 16px;
`;

const PickerRN = styled(Picker)`
  height: 80px;
  width: 150px;
`;
const Hyperlink = styled.Text`
   font-weight: bold;
   text-decoration-line: underline;
`;

const TituloH6 = styled.Text`
  /* styleName: H6; */
  color: ${(props) => (props.color ? props.color : CORES.PRETO)};
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  text-align: left;
  margin-top: 28px;
  margin-left: 8px;
`;
const Titulo = styled.Text`
  /* styleName: H5; */
  color: ${(props) => (props.color ? props.color : CORES.PRETO)};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: left;
  margin-left: 8px;
  margin-top: 24px;
`;
const TituloCentralizado = styled.Text`
  /* styleName: H5; */
  color: ${(props) => (props.color ? props.color : CORES.PRETO)};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0px;
  text-align: center;
  margin-top: 48px;
`;

const TextoCentralizado = styled.Text`
  text-align: center;
  align-items: center;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '0px')};
  width: 100%;
  color: ${(props) => (props.color ? props.color : 'black')};
`;

const Texto = styled.Text`
  /* styleName: Body 2; */
  font-size: 14px;
  font-style: ${(props) => (props.fontStyle ? props.fontStyle : 'normal')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
  line-height: 20px;
  letter-spacing: 0.25px;
  text-align: left;
  color: ${CORES.AZUL};
`;

const BotaoLargo = styled(TouchableOpacity)`
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : CORES.VERDE)};
  height: 150px;
  width: ${Dimensions.get('window').width / 2.2}px;
  margin: 5px;
`;

const Botao = styled(Button)`
  justify-content: flex-start;
  align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
  width: 120px;
  height: 40px;
  border-radius: 18px;
  background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : CORES.VERDE)};
 `;

const BotaoLink = styled(Button)`
  justify-content: flex-start;
  align-items: flex-start;
 `;

export {
  Container,
  ContainerPicker,
  ScrollView,
  TextInputView,
  ViewLogo,
  BotaoView,
  ConteudoLogo,
  LinhaHorizontal,
  CentralizarItensView,
  SvgView,
  PickerRN,
  TextInputPaper,
  Titulo,
  TituloH6,
  TituloCentralizado,
  TextoCentralizado,
  Texto,
  Botao,
  BotaoLink,
  Lista,
  CardSemConteudo,
  BotaoLargo,
  Hyperlink,
};
