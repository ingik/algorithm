function solution(sizes) {
    let w = 0;
    let h = 0;

    sizes.forEach(size => {
            size.sort((a, b) => a - b)
            if (w < size[0]) w = size[0];
            if (h < size[1]) h = size[1];
    });
    
    return w * h;
}
