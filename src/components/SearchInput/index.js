import React, {useRef} from 'react';

import Icon from 'react-native-vector-icons/Feather';

import {Wrapper, Input} from './style';

function SearchInput({search}) {
  let textInput = useRef();
  let timeOut = 0;

  function handleChangeText(text) {
    if (timeOut) {
      clearTimeout(timeOut);
    }

    timeOut = setTimeout(() => {
      search(text);
    }, 500);
  }

  function focusedInput() {
    textInput.setNativeProps({
      style: {borderColor: '#7A7A7A', borderWidth: 2},
    });
  }

  function blurredInput() {
    textInput.setNativeProps({
      style: {borderWidth: 0},
    });
  }

  return (
    <Wrapper>
      <Icon
        style={{position: 'absolute', zIndex: 1, left: 25}}
        name="search"
        size={20}
        color="#D9D9D9"
      />
      <Input
        ref={(c) => {
          textInput = c;
        }}
        placeholder="Search ..."
        placeholderTextColor="#D9D9D9"
        onFocus={focusedInput}
        onBlur={blurredInput}
        onChangeText={handleChangeText}
      />
    </Wrapper>
  );
}

export default SearchInput;
