import React from 'react';
import Field from './components/field';
import Translate from './components/translate';
import Languages from './components/languages';
import './styles.css';

export default function App() {
  const [language, setLanguage] = useState('es');
  const [text, setText] = useState('');

  return (
    <div>
      <Field onChange={setText} />
      <Languages language={language} onLanguageChange={setLanguage} />

      <Translate text={text} language={language} />
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
