## Inicio
Comecei fazendo a validação de tamanho usando if. Depois, alterei para usar
regex, já que tudo que seria validado era seguindo um padrão, seria mais
fácil e deixaria o código menor usar regex do que vários ifs aninhados.

## Seguindo
Para as validações seguintes, só ia adicionando mais e mais regras no regex
para cada nova condição a ser atendida. Então, se precisava de verificar se tem
caracteres de letra maiúscula, adicionava uma nova a parte ao regex que verifica
exatamente isso ('(?=.*[A-Z])'). A mesma coisa foi feita para os seguintes. A de
espaços é diferente pq só precisei adicionar '\S', que verifica se os caracteres
presentes na string fornecida NÃO são caracteres de espaço, então se tiver um 
único espaço já falha.

## Refatoração
Seguindo o que foi mostrado nas aulas, decidi, já que tinha tempo, em criar um
json com os casos de teste e depois usar ele criar os testes, percorrendo e
usando as propriedades para construir os testes, como 'description', 'expected'
e o valor a ser testado que fica dentro do 'input'.


### Sobre o regex
A notação '(?=.*[A-Z])', por exemplo, faz uma verificação seguindo o seguinte:
* (...) -> define o agrupamento
* '?=' -> diz que só precisa checar se aquela condição é verdadeira
* '.' -> significa tipo 'qualquer caractere'
* '*' -> significa tipo 'zero ou mais'
* [...] -> aqui fica a regra, 'A-Z' são todas as maiúsculas, 'a-z' as minúsculas, etc