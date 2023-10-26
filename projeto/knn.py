# Dados reais para todos os 51 estados
states = [
    "Texas", "California", "Kentucky", "Georgia", "Wisconsin", "Oregon", "Virginia", "Tennessee", "Louisiana", "New York",
    "Michigan", "Idaho", "Florida", "Alaska", "Montana", "Minnesota", "Nebraska", "Washington", "Ohio", "Illinois",
    "Missouri", "Iowa", "South Dakota", "Arkansas", "Mississippi", "Colorado", "North Carolina", "Utah", "Oklahoma", "Wyoming",
    "West Virginia", "Indiana", "Massachusetts", "Nevada", "Connecticut", "District of Columbia", "Rhode Island", "Alabama", "Puerto Rico", "South Carolina",
    "Maine", "Hawaii", "Arizona", "New Mexico", "Maryland", "Delaware", "Pennsylvania", "Kansas", "Vermont", "New Jersey", "North Dakota", "New Hampshire"
]

# Área de cada estado (em km²)
state_areas = [
    695662, 423967, 104656, 153910, 169634, 254800, 110785, 109153, 135659, 141297, 250487, 82644, 170312, 172333, 380831, 225163, 200330, 184661, 116098, 40953, 149995,
    180540, 56273, 199729, 137732, 46923, 269601, 139391, 139797, 219882, 177660, 253335, 62755, 92789, 20202, 1034, 4005, 12584, 30347, 2289, 77857,
    35380, 642, 295234, 121590, 32145, 50645, 119280, 213100, 251470, 22546, 24214, 24214
]

obesityRates = [
    32.4, 24.2, 34.6, 30.7, 30.7, 30.1, 29.2, 33.8, 36.2, 25.0,
    31.2, 28.6, 26.8, 29.8, 23.6, 26.1, 31.4, 26.4, 29.8, 30.8,
    32.4, 32.1, 30.4, 34.5, 35.6, 20.2, 30.1, 24.5, 33.9, 29.0,
    35.6, 31.3, 24.3, 26.7, 25.3, 22.1, 26.0, 35.6, 29.5, 31.7,
    30.0, 22.7, 28.4, 28.8, 28.9, 29.7, 30.0, 34.2, 25.1, 25.6, 31.0, 26.3
]

# Calcula a taxa de obesidade por área para cada estado
obesity_per_area = [rate / area for rate, area in zip(obesityRates, state_areas)]

# Identifica os estados com as maiores taxas de obesidade por área
top_states_by_area = [states[i] for i in sorted(range(len(obesity_per_area), key=lambda x: obesity_per_area[x], reverse=True)]

# Calcula a taxa de obesidade por porcentagem para cada estado
obesity_percentage = obesityRates

# Identifica os estados com as maiores taxas de obesidade por porcentagem
top_states_by_percentage = [states[i] for i in sorted(range(len(obesity_percentage), key=lambda x: obesity_percentage[x], reverse=True)]

print("Estados com maiores taxas de obesidade por área:")
for state in top_states_by_area[:5]:
    print(state)

print("\nEstados com maiores taxas de obesidade por porcentagem:")
for state in top_states_by_percentage[:5]:
    print(state)
