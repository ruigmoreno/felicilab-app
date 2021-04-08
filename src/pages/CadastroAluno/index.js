import React, { useState } from 'react';
import { DefaultTheme, Snackbar } from 'react-native-paper';
import TextInputMask from 'react-native-text-input-mask';
import { useNavigation } from '@react-navigation/native';

import { createAluno } from '../../api/api';
import {
  ScrollView,
  Titulo,
  TextInputPaper,
  PickerRN,
  ContainerPicker,
  TituloH6,
  Botao,
  BotaoView
} from '../../style/style';

export default function CadastroAluno() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [genero, setGenero] = useState('Masculino');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);
  const [messageSnack, setMessageSnack] = useState('');

  const onDismissSnackBar = () => setVisible(false);

  const theme = {
    ...DefaultTheme,
    colors: {
      primary: '#304FFE'
    }
  };

  const onSubmit = async () => {
    setLoading(true);
    // eslint-disable-next-line no-unused-vars
    const aluno = {
      nome: nomeAluno,
      telefone,
      email,
      data_nascimento: `${dataNascimento.substring(4)}-${dataNascimento.substring(2, 4)}-${dataNascimento.substring(0, 2)}`,
      genero
    };
    try {
      const response = await createAluno(JSON.stringify(aluno));
      console.log(response.data.sucesso);
      setMessageSnack(response.data.sucesso ? 'Sucesso' : 'Erro');
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    setVisible(!visible);
  };

  return (
    <>
      <ScrollView>
        <Titulo>
          Preencha os dados do aluno
        </Titulo>
        <TextInputPaper
          label="Nome Completo"
          name="nomeCompleto"
          underlineColor="#BDBDBD"
          onChangeText={(text) => setNomeAluno(text)}
          mode="outlined"
          theme={theme}
        />
        <TextInputPaper
          label="Telefone"
          name="telefone"
          keyboardType="number-pad"
          onChangeText={(text) => text}
          mode="outlined"
          theme={theme}
          maxLength={15}
          render={(props) => (
            <TextInputMask
            // eslint-disable-next-line react/jsx-props-no-spreading
              {...props}
              onChangeText={(formatted, extracted) => {
                props.onChangeText(formatted);
                setTelefone(extracted);
              }}
              mask="([00]) [00000]-[0000]"
            />
          )}
        />
        <TextInputPaper
          label="E-mail"
          name="email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          mode="outlined"
          theme={theme}
        />
        <TextInputPaper
          label="Data de Nascimento"
          name="nascimento"
          keyboardType="number-pad"
          onChangeText={(text) => text}
          mode="outlined"
          theme={theme}
          maxLength={10}
          render={(props) => (
            <TextInputMask
            // eslint-disable-next-line react/jsx-props-no-spreading
              {...props}
              onChangeText={(formatted, extracted) => {
                props.onChangeText(formatted);
                setDataNascimento(extracted);
              }}
              mask="[00]/[00]/[0000]"
            />
          )}
        />
        <ContainerPicker style={{ flexDirection: 'row' }}>
          <TituloH6>
            Gênero:
          </TituloH6>
          <PickerRN
            selectedValue={genero}
            // eslint-disable-next-line no-unused-vars
            onValueChange={(itemValue, itemIndex) => setGenero(itemValue)}
          >
            <PickerRN.Item label="Masculino" value="java" />
            <PickerRN.Item label="Feminino" value="js" />
          </PickerRN>
        </ContainerPicker>
        <BotaoView>
          <Botao
            mode="contained"
            loading={loading}
            onPress={onSubmit}
          >
            Próximo
          </Botao>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        duration={5000}
        action={{
          label: 'OK',
          onPress: () => {
            navigation.goBack();
          },
        }}
      >
        {messageSnack}
      </Snackbar>
        </BotaoView>
      </ScrollView>
    </>
  );
}
