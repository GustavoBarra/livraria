# Livraria Página Viva

Projeto da atividade prática de HTML, CSS e JavaScript – Catálogo da Livraria Página Viva.

## 1. Qual é o papel de um servidor Web?

O servidor Web recebe a requisição HTTP feita pelo navegador e devolve os recursos solicitados, como o arquivo HTML, os arquivos CSS e JavaScript e as imagens. Assim, o navegador consegue carregar e apresentar a página.

## 2. Resposta da pergunta de fixação da Etapa 7

Se o arquivo estiver em `paginas/sobre.html` e a imagem estiver em `imagens/capa-livro.png`, o caminho relativo correto será:

```html
<img src="../imagens/capa-livro.png" alt="Capa do livro">
```

O `../` volta uma pasta a partir de `paginas/`, chegando à pasta `projeto/`. Depois, o caminho entra na pasta `imagens/` e encontra `capa-livro.png`.

## 3. Boas práticas de escrita HTML aplicadas

Foram utilizadas tags semânticas como `header`, `nav`, `main`, `article`, `section` e `footer` para representar corretamente cada parte do conteúdo. As tags foram corretamente aninhadas e fechadas, os IDs não foram repetidos e a indentação foi mantida de forma consistente para facilitar a leitura e manutenção do código.
