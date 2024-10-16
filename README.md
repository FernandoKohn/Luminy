# Luminy

Gerenciador de finanças e gastos.

- ▶️ [️Demonstração](#Como-funciona)
- ‍💻 [Tecnologias](#Tecnologias)

![print1](https://github.com/user-attachments/assets/4c0ff469-0f0a-456a-a01e-eeaac75c3d43)

## Conceito

Nosso dia a dia pode ser desafiador, e gerenciar as finanças em meio a uma rotina acelerada muitas vezes se torna uma tarefa complexa, mas cheia de oportunidades para otimizar a eficiência. É aí que a Luminy brilha: ela centraliza todos os seus gastos e custos em uma única página, oferecendo uma solução prática e intuitiva. Projetada com foco na usabilidade, Luminy transforma a maneira como você lida com suas finanças, simplificando sua vida e potencializando seu controle.


![print6](https://github.com/user-attachments/assets/5737d690-0190-4aeb-bcae-67377cf7a805)


Os aplicativos de bancos em geral fornecem informações visuais dos seus gastos, mas aqui vai alguns pontos que deixam a desejar:

- Interface Confusa: Aplicativos bancários podem ter interfaces mais complicadas, dificultando a localização de informações sobre gastos.
- Relatórios Limitados: Falta de relatórios detalhados ou opções de personalização para análise de gastos.
- Visualização de Longo Prazo: Pouca ou nenhuma funcionalidade para visualizar tendências de gastos ao longo do tempo.
- Dificuldade de Acesso a Dados Históricos: Falta de um histórico fácil de acessar e compreender, dificultando a análise de gastos passados.

Luminy foi projetado para superar todos esses desafios, garantindo que você tenha total controle e clareza sobre suas finanças em um único lugar.

## Como funciona

As limitações mencionadas acima são abordadas da seguinte forma:

- Luminy tem um design claro e amigável, facilitando a navegação e a localização de informações sobre gastos.
- Facilidade para acessar e entender dados financeiros históricos, facilitando análises de longo prazo.
- Sistema de categorização intuitivo, que ajuda os usuários a classificar e visualizar suas despesas facilmente.

Apenas tenha acesso ao seu dashboard caso seja registrado e esteja logado:

![print2](https://github.com/user-attachments/assets/b3445393-0929-42fb-93b9-35e739258137)

O sistema de login foi desenvolvido completamente apenas com front-end, validando o acesso através de consumo de API e JSON Server com Axios.

Cada usuário tem o seu próprio dashboard, que sempre lembrará das suas informações em qualquer dispositivo ou acesso.

Adicione uma transação:

![Print3](https://github.com/user-attachments/assets/00d4bb95-acec-457b-ae1a-b218e9605f9c)

Ao adicionar uma transação, ficará registrado diversas informações individuais sobre ela, como o dia, a hora e em que foi gasto.

Essas transações serão adicionadas automaticamente ao limite utilizado do seu cartão, que pode ser visualizado log abaixo.

Nota: Cada cartão tem suas transações individuais assim como limite. O cartão pode ser trocado clicando neles, alternando entre o da frente (BISA) e o de trás (FASTERCARD).

![print4](https://github.com/user-attachments/assets/c637928c-10c2-429d-8aff-7d8f76fbbe76)

Além disso, os gráficos serão atualizados automaticamente com suas transações, te mostrando um novo ponto de vista sobre seus gastos e economias.

![print5](https://github.com/user-attachments/assets/e13ebb33-fe01-4d98-9d08-739c16170e46)

## Tecnologias 

Esta aplicação em ReactJS aproveita o máximo das melhores e mais novas práticas de roteamento, utilizando o react-router-dom. Possui rotas protegidas que podem ser acessadas apenas se certos requirimentos forem preenchidos. Além disso, é completamente responsíva.

- React
- React-router-dom
- Mui materials
- Rsuite
- React Echarts
- Axios
                                
## Planos

- [ ] Implementar back-end.











