/*
11. Container With Most Water

You are given an integer array height of length n. 
There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. 
In this case, the max area of water (blue section) the container can contain is 49.

Input: height = [1,1]
Output: 1

*/

/*
Ваша задача - найти две линии, которые вместе с осью x образуют контейнер, такой, что контейнер содержит максимальное количество воды.

Вот шаги, которые мы будем следовать:

1. Используйте два указателя, один указывает на начало массива, а другой - на конец.
2. Вычислите площадь между двумя линиями и сохраните максимальную площадь.
3. Если высота линии, на которую указывает левый указатель, меньше высоты линии, на которую указывает правый указатель, переместите левый указатель вправо.
4. В противном случае переместите правый указатель влево.
5. Повторяйте шаги 2-4, пока левый указатель меньше правого.

Your task is to find two lines that together with the x-axis form a container, such that the container contains the most water.

Here are the steps we will follow:

1. Use two pointers, one pointing at the start of the array, and the other at the end.
2. Calculate the area between the two lines and keep track of the maximum area.
3. If the height of the line pointed by the left pointer is less than the height of the line pointed by the right pointer, move the left pointer to the right.
4. Otherwise, move the right pointer to the left.
5. Repeat steps 2-4 until the left pointer is less than the right.

*/

function maxArea(height) {
    // Инициализируем два указателя и максимальную площадь
    // Initialize two pointers and the maximum area
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    // Пока левый указатель меньше правого
    // While the left pointer is less than the right
    while (left < right) {
        // Вычисляем площадь между двумя линиями
        // Calculate the area between the two lines
        let area = Math.min(height[left], height[right]) * (right - left);

        // Обновляем максимальную площадь, если текущая площадь больше
        // Update the maximum area if the current area is larger
        maxArea = Math.max(maxArea, area);

        // Если высота линии, на которую указывает левый указатель, меньше высоты линии, на которую указывает правый указатель
        // If the height of the line pointed by the left pointer is less than the height of the line pointed by the right
        if (height[left] < height[right]) {
            // Перемещаем левый указатель вправо
            // Move the left pointer to the right
            left++;
        } else {
            // В противном случае перемещаем правый указатель влево
            // Otherwise, move the right pointer to the left
            right--;
        }
    }

    // Возвращаем максимальную площадь
    // Return the maximum area
    return maxArea;
}
