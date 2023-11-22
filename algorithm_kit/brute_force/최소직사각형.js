function solution(sizes) {
  let w = 0;
  let h = 0;

  sizes.forEach((size) => {
    if (size[0] < size[1]) {
      if (w < size[1]) {
        w = size[1];
      }
      if (h < size[0]) {
        h = size[0];
      }
    } else {
      if (w < size[0]) {
        w = size[0];
      }
      if (h < size[1]) {
        h = size[1];
      }
    }
  });

  return w * h;
}
