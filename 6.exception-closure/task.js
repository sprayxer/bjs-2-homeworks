function parseCount(quantityОfGoods){
    if(isNaN(Number.parseFloat(quantityОfGoods))){
        const error = new Error ('Невалидное значение')
        throw error;
    }
    return Number.parseFloat(quantityОfGoods);
}

function validateCount(quantityОfGoods){
    try{
        return parseCount(quantityОfGoods);
        
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if(this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.c < this.a){
            const error = new Error ('Треугольник с такими сторонами не существует');
            throw error;
        }
    }

    get perimeter(){
        return this.a + this.b + this.c;
    }
    
    get area(){
        const p = (this.a + this.b + this.c) / 2;
        return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
    }
}
    function getTriangle(a,b,c) {
        try {
            let triangle = new Triangle(a,b,c);                
            return triangle;
        } catch (error) {
            triangle = {
                get area() {
                    return 'Ошибка! Треугольник не существует';
                },
                get perimeter() {
                    return 'Ошибка! Треугольник не существует';
                }
            }
            return triangle;
        }
    }

