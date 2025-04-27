# FURIA Bot - Chatbot de Esports

FURIA Bot é um chatbot interativo dedicado à famosa organização de esports FURIA. Criado com **React** e **Vite**, ele fornece respostas automáticas sobre a história da FURIA, seus jogadores, conquistas e partidas recentes. Além disso, integra-se a APIs externas para gerar respostas dinâmicas, oferecendo uma experiência personalizada para o usuário.

<img src="https://github.com/user-attachments/assets/d891dcc3-50f7-41cc-b4ec-dc26826487d8" alt="FURIA Bot - Demonstração" width="800" />
---

## Funcionalidades

- **Respostas automáticas**: O bot responde a perguntas predefinidas sobre a FURIA, como:
  - "Quem são os jogadores da FURIA?"
  - "Quando a FURIA joga?"
  - "Quais as conquistas da FURIA?"
- **Integração com API**: Utiliza a API Gemini (Google) para fornecer respostas dinâmicas e personalizadas para perguntas fora do escopo predefinido.
- **Interface Responsiva**: Design limpo e simples, adaptável tanto para dispositivos móveis quanto para desktops.
- **Conectividade com APIs externas**: Possibilidade de integrar com a API Sportradar para exibir informações em tempo real sobre partidas e eventos de esports.

---

## Demonstração

Acesse a demonstração ao vivo do FURIA Bot no link abaixo:

[**FURIA Bot - Demo**](https://ronnyrocke.github.io/chatBotFuria/)

---

## Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Frontend**: React.js
- **Integração API**: Gemini API (Google) para respostas dinâmicas.
- **Estilização**: CSS para criar um layout moderno e responsivo.
- **APIs de Esports**: Integração com a API Sportradar para exibir informações de partidas e eventos em tempo real.
- **Ferramentas de Build**: Vite

---

## React + Vite

Este template oferece uma configuração mínima para fazer o React funcionar no Vite com HMR (Hot Module Replacement) e algumas regras de ESLint.

Atualmente, dois plugins oficiais estão disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) usa [Babel](https://babeljs.io/) para Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh.

### Expansão da configuração do ESLint

Se você está desenvolvendo uma aplicação para produção, recomendamos o uso de **TypeScript** com regras de linting com suporte a tipos habilitado. Confira o [template TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para informações sobre como integrar o **TypeScript** e o [`typescript-eslint`](https://typescript-eslint.io) no seu projeto.

---

## Como Rodar o Projeto

Siga os passos abaixo para rodar o projeto localmente:

1. Clone este repositório para sua máquina:
    ```bash
    git clone https://github.com/seu-usuario/furia-bot.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd furia-bot
    ```
3. Instale as dependências necessárias:
    ```bash
    npm install
    ```
4. Inicie a aplicação:
    ```bash
    npm start
    ```
5. Acesse o aplicativo em seu navegador através de [http://localhost:3000](http://localhost:3000).

---

## Contribuições

Este projeto é open-source! Contribuições são bem-vindas. Para sugerir melhorias ou relatar problemas, siga os seguintes passos:

1. Fork o repositório.
2. Crie uma branch para a sua feature (`git checkout -b feature/nome-da-feature`).
3. Faça o commit das suas mudanças (`git commit -am 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

---

## Licença

Este projeto está licenciado sob a MIT License - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
