import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import furiaLogo from './assets/furia.png'; // sua logo

function App() {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Olá, eu sou o FURIA Bot! Como posso ajudar?', sender: 'bot' },
  ]);
  const [highlightedQuestions, setHighlightedQuestions] = useState([
    "Quais jogadores da FURIA?",
    "quais conquistas da furia ?",
    "Quando a FURIA joga?",
    "Quais foram as últimas partidas da FURIA?",
    "Que ano foi fundado a FURIA?",
    "Qual a história da FURIA?"
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getFuriaInfo = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    if (lowerCaseMessage.includes('quem é a furia') || lowerCaseMessage.includes('qual a história da furia')) {
      return "A FURIA é uma organização brasileira de esports fundada em 2017. Ela se destacou rapidamente no cenário de CS:GO, tornando-se uma das equipes mais respeitadas do mundo. Com um elenco talentoso e comprometido, a FURIA conquistou vitórias em torneios internacionais de grande prestígio, como ESL Pro League, DreamHack e IEM. Ao longo dos anos, a FURIA também expandiu suas operações para outras modalidades, como VALORANT e Rocket League, sempre se destacando pelo espírito competitivo e pela busca constante pela excelência.";
    }
    if (lowerCaseMessage.includes('quais jogadores da furia')) {
      return "A equipe de CS:GO da FURIA inclui yuurih, KSCERATO, art, drop e saffee.";
    }
    if (lowerCaseMessage.includes('quais conquistas da furia')) {
      return "A FURIA venceu campeonatos como a ESL Pro League Season 13, DreamHack Open Summer e IEM New York. Além disso, a equipe tem sido uma presença constante nas finais de eventos internacionais de CS:GO.";
    }
    if (lowerCaseMessage.includes('quando a furia joga')) {
      return `### Próxima Partida da FURIA:
      
- **Data:** 21 de fevereiro de 2025  
  **Adversário:** Não divulgado  
  **Torneio:** PGL Cluj-Napoca 2025  
  **Onde assistir:** [Twitch](https://www.twitch.tv) / [YouTube](https://www.youtube.com)`;
    }
    if (lowerCaseMessage.includes('últimas partidas da furia')) {
      return `### 🔫 **Counter-Strike 2 (CS2)**

- **Data:** 9 de abril de 2025  
  **Adversário:** TheMongolz  
  **Resultado:** Derrota por 2 a 0  
  **Torneio:** PGL Group Stage  
  **Onde assistir:** [Sofascore](https://www.sofascore.com/es/equipo/esports/furia/364252)

---

### 🎮 **VALORANT**

- **Data:** 18 de abril de 2025  
  **Adversário:** MIBR  
  **Resultado:** Derrota por 2 a 1  
  **Torneio:** VCT 2025: Americas Stage 1 - Group Stage  
  **Onde assistir:** [EGamersWorld](https://es.egamersworld.com/valorant/team/furia-esports-NJ1OTBcy9)

---

### 🏆 **League of Legends**

- **Data:** 20 de abril de 2025  
  **Adversário:** Vivo Keyd Stars  
  **Resultado:** Vitória da FURIA  
  **Onde assistir:** [Scores24.live](https://scores24.live/es/lol/m-20-04-2025-furia-esports-vivo-keyd-stars)`;
    }
    if (lowerCaseMessage.includes('que ano foi fundado a furia')) {
      return "A FURIA foi fundada em 2017.";
    }
    return null;
  };

  const getSportradarData = async () => {
    try {
      const apiKey = process.env.REACT_APP_SPORTRADAR_API_KEY; // sua chave da API do Sportradar
      const response = await axios.get(
        `https://api.sportradar.us/soccer/league/fixtures.json?api_key=${apiKey}`
      );
      return response.data;  // ou ajuste conforme a estrutura de resposta da sua API
    } catch (error) {
      console.error('Erro ao obter dados do Sportradar:', error);
      return 'Desculpe, não consegui obter informações de partidas.';
    }
  };

  const getBotResponse = async (userMessage) => {
    const furiaInfo = getFuriaInfo(userMessage);
    if (furiaInfo) {
      return furiaInfo;
    }

    // Aqui podemos integrar a resposta com dados da API do Sportradar
    if (userMessage.toLowerCase().includes("partidas de futebol")) {
      const sportRadarData = await getSportradarData();
      return `Aqui estão algumas informações das partidas de futebol: ${sportRadarData.fixtures[0]?.teams.home.name} vs ${sportRadarData.fixtures[0]?.teams.away.name}`;
    }

    try {
      const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          contents: [{
            parts: [{ text: userMessage }]
          }]
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const botReply = response.data.candidates[0]?.content?.parts[0]?.text || 'Desculpe, não consegui entender sua mensagem.';
      return botReply.trim();
    } catch (error) {
      console.error('Erro ao obter resposta da API:', error);
      return 'Desculpe, não consegui entender sua mensagem.';
    }
  };

  const handleSendMessage = async () => {
    if (inputMessage.trim() === '') return;

    const userMessage = inputMessage.trim();

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userMessage, sender: 'user' },
    ]);

    const botResponse = await getBotResponse(userMessage);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: botResponse, sender: 'bot' },
    ]);

    setInputMessage('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleHighlightedQuestionClick = async (question) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: question, sender: 'user' },
    ]);

    const botResponse = await getBotResponse(question);

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: botResponse, sender: 'bot' },
    ]);

    setHighlightedQuestions((prevQuestions) =>
      prevQuestions.filter((q) => q !== question)
    );
  };

  return (
    <div className="app">
      <header className="header">
        <img src={furiaLogo} className="logo" alt="Furia Logo" />
        <h1>FURIA Chat</h1>
      </header>

      <main className="chat">
        <div className="highlighted-questions">
          {highlightedQuestions.map((question, index) => (
            <button
              key={index}
              className="highlighted-question"
              onClick={() => handleHighlightedQuestionClick(question)}
            >
              {question}
            </button>
          ))}
        </div>

        <div className="messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Digite sua mensagem..."
        />
        <button onClick={handleSendMessage}>Enviar</button>
      </main>
    </div>
  );
}

export default App;
