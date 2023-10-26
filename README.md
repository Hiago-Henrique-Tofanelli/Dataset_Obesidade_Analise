# Projeto de Análise de Dados e Implementação do Algoritmo KNN

Este projeto envolve a análise de dados de diferentes estados dos EUA, incluindo informações de obesidade, geometria dos estados e outras métricas relacionadas. Além disso, o projeto incluirá a implementação do algoritmo de aprendizado de máquina K-Nearest Neighbors (KNN) para prever tendências com base nas métricas fornecidas.

## Descrição dos Dados

Os dados fornecidos consistem em uma tabela com as seguintes colunas:

- `FID`: Identificação única para cada estado.
- `NAME`: Nome do estado.
- `Obesity`: Taxa de obesidade no estado.
- `SHAPE_Length`: Comprimento da geometria do estado.
- `SHAPE_Area`: Área da geometria do estado.

Esses dados serão analisados e utilizados para criar visualizações e treinar um modelo de KNN.

## Objetivos do Projeto

1. **Análise de Dados**: Realizar uma análise exploratória dos dados para entender melhor as tendências e correlações entre as variáveis.

2. **Visualizações**: Criar gráficos e visualizações com base nos dados para representar as informações de forma clara e informativa.

3. **Implementação do KNN**: Implementar o algoritmo KNN para prever tendências com base nas métricas fornecidas.

## Estrutura do Repositório

O repositório está organizado da seguinte forma:

- `data/`: Contém os dados de entrada no formato CSV.
- `notebooks/`: Inclui Jupyter Notebooks com código para análise de dados e implementação do KNN.
- `visualizations/`: Armazena as visualizações e gráficos criados a partir dos dados.
- `models/`: Possivelmente, conterá modelos de KNN treinados.
- `README.md`: Este arquivo com informações gerais sobre o projeto.

## Requisitos de Instalação

Para executar os notebooks e scripts neste projeto, você precisará de:

- Python 3.x
- Jupyter Notebook
- Bibliotecas Python como NumPy, Pandas, Matplotlib e Scikit-Learn para análise de dados e implementação do KNN.


| FID | NAME               | Obesity | SHAPE_Length | SHAPE_Area        |
| --- | ------------------ | ------- | -----------  | ----------------- |
| 1   | Texas              | 32.4    | 15408321.87  | 7672329221262.61  |
| 2   | California         | 24.2    | 14518698.46  | 5327809415403.01  |
| 3   | Kentucky           | 34.6    | 6346698.59   | 1128830286256.75  |
| 4   | Georgia            | 30.7    | 5795595.92   | 1652980281864.84  |
| 5   | Wisconsin          | 30.7    | 6806782.08   | 1567816094351.90  |
| 6   | Oregon             | 30.1    | 7976010.94   | 3178445626071.46  |
| 7   | Virginia           | 29.2    | 7710803.90   | 1158804356933.99  |
| 8   | Tennessee          | 33.8    | 6350376.86   | 1177054472558.46  |
| 9   | Louisiana          | 36.2    | 7383856.92   | 1355093764697.92  |
| 10  | New York           | 25.0    | 7981383.08   | 1411440550734.63  |
| 11  | Michigan           | 31.2    | 12407988.02  | 1657221839418.83  |
| 12  | Idaho              | 28.6    | 9081125.22   | 2593598268244.12  |
| 13  | Florida            | 26.8    | 10533929.14  | 1674411223041.20  |
| 14  | Alaska             | 29.8    | 6663726.59   | 530113882116939   |
| 15  | Montana            | 23.6    | 9745471.75   | 4371466366614.52  |
| 16  | Minnesota          | 26.1    | 8530250.43   | 2367874733333.85  |
| 17  | Nebraska           | 31.4    | 6921599.99   | 2207444436435.34  |
| 18  | Washington         | 26.4    | 7508966.84   | 2214214821535.73  |
| 19  | Ohio               | 29.8    | 5015484.93   | 1158015967734.46  |
| 20  | Illinois           | 30.8    | 6172530.81   | 1571568299027.73  |
| 21  | Missouri           | 32.4    | 7165632.97   | 1949020823655.51  |
| 22  | Iowa               | 32.1    | 5558144.62   | 1575588858404.13  |
| 23  | South Dakota       | 30.4    | 6680911.25   | 2199053487708.16  |
| 24  | Arkansas           | 34.5    | 5707634.00   | 1488699273848.93  |
| 25  | Mississippi        | 35.6    | 5834201.77   | 1327853198175.37  |
| 26  | Colorado           | 20.2    | 7092296.50   | 3066878609047.81  |
| 27  | North Carolina     | 30.1    | 6714056.24   | 1495755986090.79  |
| 28  | Utah               | 24.5    | 6798972.50   | 2614280967942.81  |
| 29  | Oklahoma           | 33.9    | 7857119.57   | 1982448890144.30  |
| 30  | Wyoming            | 29.0    | 6860971.19   | 2897400399041.46  |
| 31  | West Virginia      | 35.6    | 5374279.70   | 685167361615589   |
| 32  | Indiana            | 31.3    | 4858882.22   | 1010364222333.80  |
| 33  | Massachusetts      | 24.3    | 4197218.18   | 247224998635541   |
| 34  | Nevada             | 26.7    | 8240794.81   | 3564354191161.93  |
| 35  | Connecticut        | 25.3    | 1780630.96   | 145421898735938   |
| 36  | District of Columbia | 22.1  | 200324.96   | 1972102312.29     |
| 37  | Rhode Island       | 26.0    | 984524.58   | 36178076477.74     |
| 38  | Alabama            | 35.6    | 5750657.81   | 1442806615250.92  |
| 39  | Puerto Rico        | 29.5    | 2136273.27   | 114783882870193   |
| 40  | South Carolina     | 31.7    | 4370940.54   | 878270407919019   |
| 41  | Maine              | 30.0    | 5560035.37   | 990384869184921   |
| 42  | Hawaii             | 22.7    | 0            | 0                 |
| 43  | Arizona            | 28.4    | 8044184.23   | 3562685913793.35  |
| 44  | New Mexico         | 28.8    | 8075166.56   | 3622933199179.54  |
| 45  | Maryland           | 28.9    | 5850363.29   | 303943203091598   |
| 46  | Delaware           | 29.7    | 1383604.12   | 59081101616.55     |
| 47  | Pennsylvania       | 30.0    | 5024348.11   | 1288451936889.14  |
| 48  | Kansas             | 34.2    | 6540498.42   | 2340365916439.03  |
| 49  | Vermont            | 25.1    | 2653732.23   | 278931330216061   |
| 50  | New Jersey         | 25.6    | 2599119.26   | 224606547518286   |
| 51  | North Dakota       | 31.0    | 5872756.36   | 2013151767399.38  |
| 52  | New Hampshire      | 26.3    | 2674767.15   | 270529403259303   |
