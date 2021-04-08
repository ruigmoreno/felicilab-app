import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
  ScrollView,
  Container,
  BotaoLargo,
  TituloCentralizado
} from '../../style/style';
import { CORES } from '../../utils/cores';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="white-content" backgroundColor={CORES.AZUL_ESCURO_ROYAL} />
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <Container style={{ flexDirection: 'row' }}>
            <BotaoLargo
              backgroundColor={CORES.VERDE}
              onPress={() => navigation.navigate('CADASTRO_ALUNO')}
            >
              <TituloCentralizado color={CORES.BRANCO}>
                Cadastrar
                {'\n'}
                Aluno
              </TituloCentralizado>
            </BotaoLargo>
            <BotaoLargo
              onPress={() => navigation.navigate('CADASTRO_TURMA')}
            >
              <TituloCentralizado color={CORES.BRANCO}>
                Cadastrar
                {'\n'}
                Turma
              </TituloCentralizado>
            </BotaoLargo>
          </Container>
          <Container style={{ flexDirection: 'row' }}>
            <BotaoLargo
              backgroundColor={CORES.INDIGO}
              onPress={() => navigation.navigate('ATUALIZA_ALUNO')}
            >
              <TituloCentralizado color={CORES.BRANCO}>
                Atualizar
                {'\n'}
                Aluno
              </TituloCentralizado>
            </BotaoLargo>
            <BotaoLargo
              backgroundColor={CORES.INDIGO}
              onPress={() => navigation.navigate('ATUALIZA_TURMA')}
            >
              <TituloCentralizado color={CORES.BRANCO}>
                Atualizar
                {'\n'}
                Turma
              </TituloCentralizado>
            </BotaoLargo>
          </Container>
          <Container style={{ flexDirection: 'row' }}>
            <BotaoLargo
              backgroundColor={CORES.VERMELHO}
              onPress={() => navigation.navigate('EXCLUI_ALUNO')}
            >
              <TituloCentralizado color={CORES.BRANCO}>
                Excluir
                {'\n'}
                Aluno
              </TituloCentralizado>
            </BotaoLargo>
            <BotaoLargo
              backgroundColor={CORES.VERMELHO}
              onPress={() => navigation.navigate('EXCLUI_TURMA')}
            >
              <TituloCentralizado color={CORES.BRANCO}>
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
