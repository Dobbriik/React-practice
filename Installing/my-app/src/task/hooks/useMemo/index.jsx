import { useMemo, useState } from 'react'

function HooksUseMemo() {
	const [number, setNumber] = useState(5)
	const [isGreen, setIsGreen] = useState(true)

	// Функция для вычисления факториала
	const factorial = n => {
		console.log('Вычисляем факториал...')
		return n <= 1 ? 1 : n * factorial(n - 1)
	}

	// Вычисляем факториал текущего числа
	const result = useMemo(() => factorial(number), [number])
	return (
		<div>
			<h1 style={{ color: isGreen ? 'green' : 'red' }}>
				Факториал числа {number} равен {result}
			</h1>
			<button onClick={() => setNumber(number + 1)}>Увеличить число</button>
			<button onClick={() => setIsGreen(!isGreen)}>Изменить цвет</button>
		</div>
	)
}

export default HooksUseMemo
