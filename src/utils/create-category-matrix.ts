type Item = {
  category?: string;
  key: string;
  value: boolean;
  dueDate?: string;
};

type Matrix = {
  [key: string]: Item[];
  categoryless: Item[];
};

export function createCategoryMatrix(data: Item[]): Matrix {
  const matrix: Matrix = {
    categoryless: [],
  };

  data.forEach((item) => {
    if (item.category) {
      if (!matrix[item.category]) {
        matrix[item.category] = [];
      }
      matrix[item.category].push(item);
    } else {
      matrix.categoryless.push(item);
    }
  });

  return matrix;
}
