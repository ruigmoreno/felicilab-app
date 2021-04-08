import React from 'react';
import { ScrollView, TextInputPaper, TextInputView } from '../../style/style';

export default function ExcluiAluno() {
  return (
    <>
      <ScrollView>
        <TextInputView>
          <TextInputPaper
            multiline
            numberOfLines={5}
            value={'1\n2\n3\n4\n5'}
          />
        </TextInputView>
      </ScrollView>
    </>
  );
}
