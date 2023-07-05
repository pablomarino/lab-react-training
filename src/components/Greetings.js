import './Greetings.css';

function Greetings({ lang, children }) {
  const greeting_string = {
    de: 'Hallo',
    fr: 'Bonjour',
    en: 'Hello',
    es: 'Hola',
   }
  return (
    <div className='grettingscard'>
      <p>
        {greeting_string[lang]?`${greeting_string[lang]} ${children}`:`${greeting_string['en']} ${children}`}
      </p>
    </div>
  );
}

export default Greetings;