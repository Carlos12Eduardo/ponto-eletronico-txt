# Leitor de Arquivo de Ponto Eletrônico

Este projeto tem o objetivo de fazer a leitura de um arquivo de ponto txt e mostrar em formato de tabela os horários de entradas e saídas que o funcionário registrou.

## 🚀 Funcionalidades

- Upload de arquivo `.txt`
- Leitura usando FileReader
- Conversão para JSON
- Validação do arquivo enviado
- Exibição dos dados na tela em formato de tabela

## 🛠️ Tecnologias utilizadas

- React
- Vite
- JavaScript
- HTML
- CSS

## ▶️ Como executar o projeto

Clone o repositório:

```bash
git clone https://github.com/Carlos12Eduardo/ponto-eletronico-txt.git
```

Entre na pasta:

```bash
cd ponto-eletronico-txt
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

## 📥 Estrutura do arquivo TXT

O sistema aceita arquivos `.txt` contendo um registro por linha.

### Formato

| Posição | Tamanho | Descrição |
|---------|---------|-----------|
| 1 - 10  | 10      | id do ponto registrado |
| 11 - 12 | 2       | dia |
| 13 - 14 | 2       | mês |
| 15 - 18 | 4       | ano |
| 19 - 20 | 2       | hora|
| 21 - 22 | 2       | minutos|
| 23 - 34 | 12      | matrícula do funcionario

### Modelo de linha do arquivo
zzzzzzzzzzddmmaaaahhooyyyyyyyyyy
#### Significado: 
zzzzzzzzzz = id do ponto registrado  
dd = dia  
mm = mês  
aaaa = ano  
hh = hora  
oo = minutos  
yyyyyyyyyy = matricula  

### Exemplo válido

```txt
0000000001010520260800111111111111
0000000002010520260801222222222222
0000000003010520261200111111111111
0000000002010520261205222222222222
```

### Regras

- O arquivo deve ser `.txt`
- Cada linha deve conter 34 caracteres
- Não deve possuir linhas vazias
- O sistema valida automaticamente o formato do arquivo