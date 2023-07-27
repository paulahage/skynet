import './App.css';
import * as React from 'react'

function App() {
  const [language, setLanguage] = React.useState()

  React.useEffect(() => {
    const decodedCookie = decodeURIComponent(window.document.cookie);
    const cookieArray = decodedCookie.split('=');

    if(!cookieArray || cookieArray[0] !== 'language') {
      window.document.cookie = 'language=en'
      setLanguage("en")
    } else {
      setLanguage(cookieArray[1])
    }
  }, [])

  React.useEffect(() => {
    window.document.cookie = `language=${language}`
  }, [language])

  function changeLanguage(code) {
    setLanguage(code)
    window.location.reload()
  }
  
  return (
      <header className="header">
        <div className="header__logo">
          <img src="logo.png" alt="logo" />
        </div>
        <div className="header__languages">
          <div onClick={() => changeLanguage('en')} className={`languages__language ${language === "en" ? "active" : "inactive"}`}>
            <div className="language__image">
              <img src="lang_en.png" alt="english language" />
            </div>
            <div className="language__name">english</div>
          </div>
          <div onClick={() => changeLanguage('es')} className={`languages__language ${language === "es" ? "active" : "inactive"}`}>
            <div className="language__image">
              <img src="lang_es.png" alt="español language" />
            </div>
            <div className="language__name">español</div>
          </div>
          <div onClick={() => changeLanguage('cn')} className={`languages__language ${language === "cn" ? "active" : "inactive"}`}>
            <div className="language__image">
              <img src="lang_cn.png" alt="官话 language" />
            </div>
            <div className="language__name">官话</div>
          </div>
        </div>
      </header>
  );
}

export default App;
