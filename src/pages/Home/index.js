import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import {
  ScrollView,
  Container,
  BotaoLargo,
  TituloCentralizado
} from '../../style/style';
import { CORES } from '../../utils/cores';

// contentInsetAdjustmentBehavior="automatic"
export default function HomeScreen() {
  // const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="white-content" backgroundColor={CORES.AZUL_ESCURO_ROYAL} />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <Container style={{ flexDirection: 'row' }}>
            <BotaoLargo
              backgroundColor={CORES.VERDE}
              onPress={() => console.log('pressed')}
            >
              <TituloCentralizado>
                Cadastrar
                {'\n'}
                Aluno
              </TituloCentralizado>
            </BotaoLargo>
            <BotaoLargo
              onPress={() => console.log('pressed')}
            >
              <TituloCentralizado>
                Cadastrar
                {'\n'}
                Turma
              </TituloCentralizado>
            </BotaoLargo>
          </Container>
          <Container style={{ flexDirection: 'row' }}>
            <BotaoLargo
              backgroundColor={CORES.INDIGO}
              onPress={() => console.log('pressed')}
            >
              <TituloCentralizado>
                Atualizar
                {'\n'}
                Aluno
              </TituloCentralizado>
            </BotaoLargo>
            <BotaoLargo
              backgroundColor={CORES.INDIGO}
              onPress={() => console.log('pressed')}
            >
              <TituloCentralizado>
                Atualizar
                {'\n'}
                Turma
              </TituloCentralizado>
            </BotaoLargo>
          </Container>
          <Container style={{ flexDirection: 'row' }}>
            <BotaoLargo
              backgroundColor={CORES.VERMELHO}
              onPress={() => console.log('pressed')}
            >
              <TituloCentralizado>
                Excluir
                {'\n'}
                Aluno
              </TituloCentralizado>
            </BotaoLargo>
            <BotaoLargo
              backgroundColor={CORES.VERMELHO}
              onPress={() => console.log('pressed')}
            >
              <TituloCentralizado>
                Excluir
                {'\n'}
                Turma
              </TituloCentralizado>
            </BotaoLargo>
          </Container>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
