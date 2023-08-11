This app is for test-task 

Тестовое задание на позицию react developer

Условия:
Вы можете использовать языки программирования Javascript или Typescript.
Вы можете использовать фреймворк ReactJS/React Native если сочтёте необходимым. Учтите, что некоторые задания предполагают создание только приложения на React/React Native.
Вы можете использовать любые библиотеки кроме тех, которые предполагают собой полное выполнение задачи (Lodash и ей подобные). Используйте свои собственные знания вместо готовых функций
Вы можете использовать систему контроля версий Github если сочтёте нужным.
Комментирование кода даёт + к общей оценке выполненных задач.
Вы можете использовать любые стили или библиотеки элементов
У вас есть 4 часа что бы выполнить максимальное кол-во задач. Вы не обязаны выполнить их все, но максимальное количество приветствуется.

Задача 1

Создайте приложение, которое будет проверять является ли строка палиндромом. Пользователь вводит в поле какие либо данные и снизу под строкой должно появиться сообщение “Строка является/не является палиндромом!”. 

Тестовые данные для задачи:
“Привет” => false
“Hello” => false
“racecar” => true
“Racecar” => true
“А роза упала на лапу азора” => true
“0110” => true
“0” => false
“    ” => false
“” => false

Задача 2

Создайте приложение, которое будет проводить переворот матрицы NxN на 90 градусов вправо. В этом задании вы можете использовать заранее прописанную матрицу. Графический интерфейс отсутствует, результат вывести в консоль.

Тестовые данные для задачи:






[
	[1,2,3],
[1,2,3],
[1,2,3]
] => [
[1,1,1], 
[2,2,2], 
[3,3,3]
]

Усиленный вариант задачи 2

Создайте приложение с графическим интерфейсом, которое будет проводить переворот матрицы NxN на 90 градусов вправо или влево. Поведение по умолчанию- поворот матрицы на 90 градусов вправо. Пользователь должен видеть первоначальный вариант матрицы, галочку “повернуть влево” и кнопку “Повернуть”. В зависимости от того, нажал ли пользователь галочку, он должен увидеть рядом с первоначальной матрицей модифицированный вариант.


Задача 3

Создайте приложение калькулятора с использованием React. Пользователь должен видеть интерфейс калькулятора (пример ниже, вы не обязаны использовать такие же стили)



 
Калькулятор имеет сетку кнопок с цифрами, кнопки с знаками арифметики и 2 кнопки DEL и CLEAR. Кнопка DEL удаляет последний введённый символ. Кнопка CLEAR очищает поле ввода до исходного состояния. Пользователь может совершать только операции с двумя числами. Если введены два числа и знак арифметики, то при повторном нажатии на кнопку на знак арифметики необходимо провести операцию и начать работу с результатом. Пример: пользователь ввёл “5+10” и при нажатии на “+” необходимо вывести на экран “15+”.

Важное примечание: вы не можете использовать eval()

Задача 4

Создайте приложение с графическим интерфейсом, которое будет определять все ли скобки в строке являются закрытыми. Пользователь должен ввести в поле строку с N количеством скобок либо без них и получить результат в виде сообщения “Все скобки закрыты” либо “Скобки не закрыты” под полем ввода.

Тестовые данные для задачи:
“(hello)” => true
“(hello}” => false
“{(hello)}” => true
“{  (hello)     }” => true
“[{(hello)}” => false
“{()}]” => false
“[]]]” => false
“[” => false
“[    ]” => true
