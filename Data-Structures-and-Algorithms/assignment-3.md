# Binary Search Tree Assignment

## Array: [7, 5, 1, 8, 3, 6, 0, 9, 4, 2]

- First step is to place first element of the array as the root.

| Description |     |       |     |
| ----------- | --- | ----- | --- |
| root        |     | **7** |     |

- 5 is lower than 7 therefore it is placed as left leaf of the root.

| Description |       |     |     |     |
| ----------- | ----- | --- | --- | --- |
| root        |       |     | 7   |     |
|             |       | /   |     |     |
| added 5     | **5** |     |     |     |

- 1 is lower 7 and 5, it should be placed as left leaf of 5.

| Description |       |     |     |     |     |
| ----------- | ----- | --- | --- | --- | --- |
| root        |       |     |     |     | 7   |
|             |       |     |     | /   |     |
| added 5     |       |     | 5   |     |     |
|             |       | /   |     |     |     |
| added 1     | **1** |     |     |     |     |

- 8 is higher than 7, it should be placed as right leaf of the root.

| Description |     |     |     |     |     |     |       |
| ----------- | --- | --- | --- | --- | --- | --- | ----- |
| root        |     |     |     |     | 7   |     |       |
|             |     |     |     | /   |     | \   |       |
| added 8     |     |     | 5   |     |     |     | **8** |
|             |     | /   |     |     |     |     |       |
|             | 1   |     |     |     |     |     |       |

- 3 is lower than 7 and 5 but higher than 1, it should be placed as right leaf of 1

| Description |     |     |       |     |     |     |     |
| ----------- | --- | --- | ----- | --- | --- | --- | --- |
| root        |     |     |       |     | 7   |     |     |
|             |     |     |       | /   |     | \   |     |
| added 8     |     |     | 5     |     |     |     | 8   |
|             |     | /   |       |     |     |     |     |
|             | 1   |     |       |     |     |     |     |
|             |     | \   |       |     |     |     |     |
| added 3     |     |     | **3** |     |     |     |     |

- 6 is lower than 7, but higher than 5, therefore it is the right leaf of 5

| Description |     |     |     |     |       |     |     |
| ----------- | --- | --- | --- | --- | ----- | --- | --- |
| root        |     |     |     |     | 7     |     |     |
|             |     |     |     | /   |       | \   |     |
|             |     |     | 5   |     |       |     | 8   |
|             |     | /   |     | \   |       |     |     |
| added 6     | 1   |     |     |     | **6** |     |     |
|             |     | \   |     |     |       |     |     |
|             |     |     | 3   |     |       |     |     |

- 0 is lower than 7, 5 and 1, it is the left leaf of 1.

| Description |       |     |     |     |     |     |     |     |     |
| ----------- | ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| root        |       |     |     |     |     |     | 7   |     |     |
|             |       |     |     |     |     | /   |     | \   |     |
|             |       |     |     |     | 5   |     |     |     | 8   |
|             |       |     |     | /   |     | \   |     |     |     |
|             |       |     | 1   |     |     |     | 6   |     |     |
|             |       | /   |     | \   |     |     |     |     |     |
| added 0     | **0** |     |     |     | 3   |     |     |     |     |

- 9 is higher than both 7 and 8, it is the right leaf of 8

| Description |     |     |     |     |     |     |     |     |     |     |       |
| ----------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | ----- |
| root        |     |     |     |     |     |     | 7   |     |     |     |       |
|             |     |     |     |     |     | /   |     | \   |     |     |       |
|             |     |     |     |     | 5   |     |     |     | 8   |     |       |
|             |     |     |     | /   |     | \   |     |     |     | \   |       |
| added 9     |     |     | 1   |     |     |     | 6   |     |     |     | **9** |
|             |     | /   |     | \   |     |     |     |     |     |     |       |
|             | 0   |     |     |     | 3   |     |     |     |     |     |       |

- 4 is lower than 7 and 5, higher than 1 and 3, therefore it is the right leaf of 3

| Description |     |     |     |     |     |     |       |     |     |     |     |
| ----------- | --- | --- | --- | --- | --- | --- | ----- | --- | --- | --- | --- |
| root        |     |     |     |     |     |     | 7     |     |     |     |     |
|             |     |     |     |     |     | /   |       | \   |     |     |     |
|             |     |     |     |     | 5   |     |       |     | 8   |     |     |
|             |     |     |     | /   |     | \   |       |     |     | \   |     |
|             |     |     | 1   |     |     |     | 6     |     |     |     | 9   |
|             |     | /   |     | \   |     |     |       |     |     |     |     |
|             | 0   |     |     |     | 3   |     |       |     |     |     |     |
|             |     |     |     |     |     | \   |       |     |     |     |     |
| added 4     |     |     |     |     |     |     | **4** |     |     |     |     |

- 2 is lower than 7 and 5, higher than 1 and lower than 3, therefore it is the left leaf of 3.

| Description |     |     |       |     |     |     |     |     |     |     |     |
| ----------- | --- | --- | ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| root        |     |     |       |     |     |     | 7   |     |     |     |     |
|             |     |     |       |     |     | /   |     | \   |     |     |     |
|             |     |     |       |     | 5   |     |     |     | 8   |     |     |
|             |     |     |       | /   |     | \   |     |     |     | \   |     |
|             |     |     | 1     |     |     |     | 6   |     |     |     | 9   |
|             |     | /   |       | \   |     |     |     |     |     |     |     |
|             | 0   |     |       |     | 3   |     |     |     |     |     |     |
|             |     |     |       | /   |     | \   |     |     |     |     |     |
| added 2     |     |     | **2** |     |     |     | 4   |     |     |     |     |
