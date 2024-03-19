class Stack{
    constructor(size){
        this.stack=[]
        this.size=size
        this.pos=0
    }
    push(ele){
        if(this.pos>=this.size){
            return console.log('Stack is full')
        }else{
            this.stack.push(ele)
            this.pos+=1
        }
    }
    pop(){
        if(this.pos<0 || this.size<0){
            return console.log('Stack is empty')
        }else{
            this.stack.pop()
            this.pos-=1
        }
    }
    top(){
        if(this.pos<0){
            return console.log('Stack.empty')
        }else{
            console.log(this.stack[this.stack.length-1])
        }
    }
    isEmpty(){
        if(this.pos<1 || this.size<1){
            return console.log('Stack is empty')
        }else{
            return console.log('Stack is not empty')
        }
    }
    isFull(){
        console.log(this.pos)
        if(this.pos>=this.size ){
            return console.log('Stack is full')
        }else{
            return console.log('Stack is not full')
        }
    }
    print(){
        return console.log(this.stack)
    }
}
const stack=new Stack(10)
stack.isEmpty()
for(let i=0;i<10;i++){
    stack.push(i)
}
stack.print()
stack.isFull()
stack.top()
for(let i=10;i>0;i--){
    stack.pop()
}
stack.print()
stack.isEmpty()


