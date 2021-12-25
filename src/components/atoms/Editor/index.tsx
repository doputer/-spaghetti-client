import './index.scss';

import { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');

export const Editor = () => {
  const [code, setCode] = useState('');

  return (
    <div className="editor">
      <CodeMirror
        value={code}
        options={{
          lineNumbers: true,
          autofocus: true,
          theme: 'material',
          mode: 'python',
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
    </div>
  );
};
