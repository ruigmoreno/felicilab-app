import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/Home';
import { CORES } from '../utils/cores';
import CadastroAluno from '../pages/CadastroAluno';
import CadastroTurma from '../pages/CadastroTurma';
import AtualizaAluno from '../pages/AtualizaAluno';
import AtualizaTurma from '../pages/AtualizaTurma';
import ExcluiAluno from '../pages/ExcluiAluno';
import ExcluiTurma from '../pages/ExcluiTurma';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: CORES.AZUL_ESCURO_ROYAL },
          headerTintColor: '#fff'
        }}
        options={{
          gestureDirection: 'horizontal'
        }}
      >
        <Stack.Screen
          name="HOME"
          component={HomeScreen}
          options={{
            title: 'Felicilab',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="CADASTRO_ALUNO"
          component={CadastroAluno}
          options={{
            title: 'Cadastrar Aluno',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="CADASTRO_TURMA"
          component={CadastroTurma}
          options={{
            title: 'Cadastrar Turma',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="ATUALIZA_ALUNO"
          component={AtualizaAluno}
          options={{
            title: 'Atualizar Aluno',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="ATUALIZA_TURMA"
          component={AtualizaTurma}
          options={{
            title: 'Atualizar Turma',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="EXCLUI_ALUNO"
          component={ExcluiAluno}
          options={{
            title: 'Excluir Aluno',
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen
          name="EXCLUI_TURMA"
          component={ExcluiTurma}
          options={{
            title: 'Excluir Turma',
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
