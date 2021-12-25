import './index.scss';

import { Controlled as CodeMirror } from 'react-codemirror2';

require('codemirror/mode/javascript/javascript');
require('codemirror/mode/python/python');

interface EditorProps {
  code: string;
  setCode: (value: string) => void;
}

export const Editor = ({ code, setCode }: EditorProps) => {
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
