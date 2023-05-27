
const states = {
    pending: 'Pending',
    resolved: 'Resolved',
    rejected: 'Rejected'
};


class PromiseTest {
    // Promise accepts call back function
    constructor(executor) {

        const resolve = (data) => {
            this.state = states.resolved + ": "+ data;
        };

        const reject = (data) => {
            this.state = states.rejected + " :"+ data;
        };

        this.state = states.pending;
        
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }       
    }
    
}


let pro = new PromiseTest((resolve,reject) => {
    resolve("Testing Promisee...implementation")
});

console.log(pro)

