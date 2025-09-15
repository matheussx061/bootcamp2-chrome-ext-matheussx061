Esta é uma extensão de exemplo para o Google Chrome desenvolvida durante o Bootcamp II, com foco na prática do Manifest V3.

## Funcionalidades

* **Popup Interativo**: Um popup simples que aparece ao clicar no ícone da extensão, com um botão que interage com o Service Worker.
* **Service Worker (Background Script)**: Um script que roda em segundo plano, ouvindo eventos como a instalação da extensão e mensagens do popup.
* **Content Script (Injetado em `developer.chrome.com`)**: Um script que interage diretamente com o conteúdo de páginas web específicas (neste caso, `developer.chrome.com`), adicionando um banner de demonstração.

## Como Instalar e Testar

1.  **Clone o Repositório**:
    ```bash
    git clone [https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories](https://docs.github.com/pt/repositories/creating-and-managing-repositories/quickstart-for-repositories)
    cd my-chrome-extension
    ```
2.  **Carregar no Chrome**:
    * Abra o Chrome e digite `chrome://extensions` na barra de endereço.
    * Ative o "Modo Desenvolvedor" (Developer mode) no canto superior direito.
    * Clique em "Carregar sem compactar" (Load unpacked).
    * Navegue até a pasta `my-chrome-extension` (o diretório raiz do seu projeto) e selecione-a.
    * A extensão "Contador de Cliques" deve aparecer na sua lista de extensões.

3.  **Testar o Popup**: Clique no ícone da extensão na barra de ferramentas do Chrome.
4.  **Testar o Content Script**: Navegue até `https://developer.chrome.com/docs/extensions/`. Você deverá ver um banner amarelo no topo da página.
