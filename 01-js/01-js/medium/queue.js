class Queue{
    constructor(size){
        this.size=size
        this.queue=[]
        this.pos=0
    }
    enqueue(ele){
        if(this.pos>this.size){
            return console.log('Queue is full')
        }else{
            this.queue.push(ele)
            this.pos+=1
           return
        }
        
    }
    dequeue(){
        if(this.pos<0){
            return console.log('Queue is empty')
        }else{
            this.queue.shift()
            this.pos-=1
            return
        }
    }
    print(){
        return console.log(this.queue)
    }

}
const queue=new Queue(10)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()
queue.print()
queue.dequeue()