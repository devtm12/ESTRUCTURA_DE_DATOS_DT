A = [
    [4,7,2,9,5,7],
    [1,3,7,6,8,0],
    [9,2,5,7,4,6],
    [8,7,1,3,7,2],
    [5,0,6,4,2,9],
    [7,8,9,2,1,7]
]


def coordenadas(A, valor):
    listaCoordenadas=[]
    for i in range(len(A[0])):
        for j in range(len(A[0])):
            if A[i][j] == valor:
                listaCoordenadas.append((i+1,j+1))
    if listaCoordenadas ==[]:
        return print("No encontrado")
    else:
        return print(listaCoordenadas)
    
coordenadas(A,7)




total_reservados = sum(sum(row) for row in A)
print("\n Total de asientos reservados al final:", total_reservados)


Filas_con_mas_reservas = [i+1 for i, row in enumerate(A) if sum(row) == max(sum(r) for r in A)]
print("Filas con más reservas:", Filas_con_mas_reservas)


















