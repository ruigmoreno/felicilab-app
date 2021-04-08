import React from 'react';

import { ScrollView, TextInputPaper } from '../../style/style';

export default function CadastroTurma() {
  return (
    <>
      <ScrollView>
        <TextInputPaper
          multiline="true"
          numberOfLines={4}
          value="Hello\nHelo\nHe"
        />
      </ScrollView>
    </>
  );
}
