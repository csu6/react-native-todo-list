import React from 'react';
import Prompt from 'rn-prompt';
 
const TextPrompt = ({ 
    isVisible, 
    onCancelCallBack, 
    onSubmitCallBack,
    title,
    placeholder,
    defaultValue
    }) => (
    <Prompt
        title={title}
        placeholder={placeholder}
        defaultValue={defaultValue}
        visible={isVisible}
        onCancel={() => onCancelCallBack()}
        onSubmit={(value) => onSubmitCallBack(value)}
    />
);

export default TextPrompt;
